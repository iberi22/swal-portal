<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    text: string;
    duration?: number;
    delay?: number;
    class?: string;
  }

  let { text = '', duration = 1800, delay = 0, class: className = '' }: Props = $props();

  const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#$%&*+=-/_:;~';

  // Render real text on SSR AND on initial client mount — no scramble flash.
  let displayText = $state(text);
  let isFlapping = $state(false);
  let rootEl: HTMLSpanElement | undefined = $state();
  let animId: number | null = null;
  let cancelled = false;

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
  }

  function runFlap(targetText: string) {
    if (typeof window === 'undefined' || !targetText) {
      displayText = targetText;
      return;
    }

    // Respect reduced-motion: skip animation entirely.
    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || duration <= 0) {
      displayText = targetText;
      isFlapping = false;
      return;
    }

    cancelled = false;
    isFlapping = true;

    // Only scramble visually — never leave the DOM with stale scrambled text.
    // We do a single tick of scramble, then resolve to targetText on lock.
    const len = targetText.length;
    const startTimestamp = performance.now();
    let lastTick = 0;
    let resolved = false;

    function frame(now: number) {
      if (cancelled) return;

      const elapsed = now - startTimestamp;

      if (now - lastTick > 35 || elapsed >= duration) {
        lastTick = now;

        const effectiveElapsed = Math.max(0, elapsed - delay);
        const effectiveDuration = Math.max(100, duration - delay);
        const progress = Math.min(effectiveElapsed / effectiveDuration, 1);

        let output = '';
        for (let i = 0; i < len; i++) {
          const targetChar = targetText[i];
          if (targetChar === ' ' || targetChar === '\n' || targetChar === '\t' || targetChar === '.' || targetChar === ',' || targetChar === '—' || targetChar === '-') {
            output += targetChar;
            continue;
          }

          const lockProgress = (i + 1) / len;

          if (elapsed >= delay && progress >= lockProgress) {
            output += targetChar;
          } else {
            output += getRandomGlyph();
          }
        }

        displayText = output;

        if (progress >= 1 && elapsed >= duration) {
          // Hard resolve: always end on the real text, no matter what.
          displayText = targetText;
          isFlapping = false;
          resolved = true;
          animId = null;
          return;
        }
      }

      animId = requestAnimationFrame(frame);
    }

    // Start with a single scramble tick so the user sees motion, but only
    // when this component is actually visible in the viewport.
    if (rootEl && typeof IntersectionObserver !== 'undefined') {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !resolved) {
              // Kick off the first scramble tick only now (when visible).
              displayText = getScrambledString(targetText);
              animId = requestAnimationFrame(frame);
              io.disconnect();
            }
          }
        },
        { threshold: 0.1 },
      );
      io.observe(rootEl);
      // Safety net: if observer never fires (e.g. already in viewport at mount
      // before observe()), start anyway after one frame.
      animId = requestAnimationFrame((t) => {
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

    // Hard safety net: even if RAF loop dies for any reason, force final text.
    const safetyTimeout = window.setTimeout(() => {
      if (!resolved && !cancelled) {
        displayText = targetText;
        isFlapping = false;
        if (animId !== null) cancelAnimationFrame(animId);
        animId = null;
      }
    }, duration + delay + 200);

    return () => {
      cancelled = true;
      window.clearTimeout(safetyTimeout);
      if (animId !== null) cancelAnimationFrame(animId);
      animId = null;
    };
  }

  $effect(() => {
    // Track the text input reactively.
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
    display: inline-block;
    letter-spacing: normal;
    transition: color 0.15s ease;
    font-variant-numeric: tabular-nums;
  }
  .split-flap-root.flapping {
    text-shadow: 0 0 10px rgba(6, 182, 212, 0.4);
  }
</style>
