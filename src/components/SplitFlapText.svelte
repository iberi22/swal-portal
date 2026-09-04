<script lang="ts">
  import { onMount, untrack } from 'svelte';

  interface Props {
    text: string;
    duration?: number;
    delay?: number;
    class?: string;
  }

  let { text = '', duration = 1800, delay = 0, class: className = '' }: Props = $props();

  const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#$%&*+=-/_:;~';

  // Render real text on SSR AND on initial client mount — no scramble flash.
  // untrack: this only reads the initial `text`, deliberately not reactive.
  let displayText = $state(untrack(() => text));
  let isFlapping = $state(false);
  let rootEl: HTMLSpanElement | undefined = $state();
  let animId: number | null = null;
  let cancelled = false;
  let resolved = false;

  function getRandomGlyph(): string {
    return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
  }

  function getScrambledString(target: string): string {
    let s = '';
    for (let i = 0; i < target.length; i++) {
      const c = target[i];
      if (c === ' ' || c === '\n' || c === '\t' || c === '.' || c === ',' || c === '—' || c === '-') {
        s += c;
      } else {
        s += getRandomGlyph();
      }
    }
    return s;
  }

  function stopFlap() {
    cancelled = true;
    if (animId !== null && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(animId);
      animId = null;
    }
    // Ensure displayText is always restored to target on any early exit.
    displayText = text;
    isFlapping = false;
  }

  function runFlap(targetText: string) {
    if (typeof window === 'undefined' || !targetText) {
      displayText = targetText;
      return;
    }

    // Respect reduced-motion: skip animation entirely.
    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || duration <= 0) {
      displayText = targetText;
      isFlapping = false;
      return;
    }

    cancelled = false;
    isFlapping = true;
    resolved = false;

    const len = targetText.length;
    const startTimestamp = performance.now();
    let lastTick = 0;

    function frame(now: number) {
      if (cancelled) {
        // Force-finalize before dying so the DOM never stays scrambled.
        displayText = targetText;
        isFlapping = false;
        animId = null;
        return;
      }

      const elapsed = now - startTimestamp;

      // Throttle glyph rerolls to ~40ms for a smoother mechanical cyber-decode feel
      if (now - lastTick > 40 || elapsed >= duration) {
        lastTick = now;

        if (elapsed < delay) {
          // Waiting for delay: keep showing scrambled or initial
          animId = requestAnimationFrame(frame);
          return;
        }

        const effectiveElapsed = elapsed - delay;
        const effectiveDuration = Math.max(150, duration - delay);
        const progress = Math.min(effectiveElapsed / effectiveDuration, 1);

        let output = "";
        for (let i = 0; i < len; i++) {
          const targetChar = targetText[i];
          if (
            targetChar === " " ||
            targetChar === "\n" ||
            targetChar === "\t" ||
            targetChar === "." ||
            targetChar === "," ||
            targetChar === "—" ||
            targetChar === "-" ||
            targetChar === "&" ||
            targetChar === "/"
          ) {
            output += targetChar;
            continue;
          }

          // Progressive unveil: left to right with a short decode window
          const charThreshold = (i + 0.5) / len;
          if (progress >= charThreshold) {
            output += targetChar;
          } else {
            output += getRandomGlyph();
          }
        }

        displayText = output;

        if (progress >= 1 && elapsed >= duration) {
          displayText = targetText;
          isFlapping = false;
          resolved = true;
          animId = null;
          return;
        }
      }

      animId = requestAnimationFrame(frame);
    }

    // Trigger on intersection or fallback
    if (rootEl && typeof IntersectionObserver !== "undefined") {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !resolved) {
              displayText = getScrambledString(targetText);
              animId = requestAnimationFrame(frame);
              io.disconnect();
            }
          }
        },
        { threshold: 0.1 }
      );
      io.observe(rootEl);

      animId = requestAnimationFrame(() => {
        if (!resolved && !cancelled) {
          displayText = getScrambledString(targetText);
          animId = requestAnimationFrame(frame);
        }
        io.disconnect();
      });
    } else {
      displayText = getScrambledString(targetText);
      animId = requestAnimationFrame(frame);
    }

    const safetyTimeout = window.setTimeout(() => {
      if (!resolved && !cancelled) {
        displayText = targetText;
        isFlapping = false;
        if (animId !== null) cancelAnimationFrame(animId);
        animId = null;
      }
    }, duration + delay + 250);

    return () => {
      cancelled = true;
      window.clearTimeout(safetyTimeout);
      if (animId !== null) cancelAnimationFrame(animId);
      animId = null;
    };
  }

  $effect(() => {
    const target = text;
    const cleanup = runFlap(target);
    return () => {
      stopFlap();
      if (cleanup) cleanup();
    };
  });
</script>

<span
  bind:this={rootEl}
  class={`split-flap-root ${className}`}
  class:flapping={isFlapping}
  aria-label={text}
>
  {displayText}
</span>

<style>
  .split-flap-root {
    display: inline;
    letter-spacing: normal;
    font-variant-numeric: tabular-nums;
    word-break: break-word;
  }
  .split-flap-root.flapping {
    text-shadow: 0 0 8px rgba(6, 182, 212, 0.35);
  }
</style>
