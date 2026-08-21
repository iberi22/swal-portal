<script lang="ts">
  import NetworkCanvas from "./NetworkCanvas.svelte";
  import { t } from "../i18n/index";
</script>

<section class="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
  <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
    <!-- Left Hero Copy -->
    <div class="lg:col-span-6 space-y-8 z-10">
      <!-- Release Badge -->
      <div class="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan backdrop-blur-md">
        <span class="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
        <span>{t("hero.badge")}</span>
        <span class="text-white/30">|</span>
        <span class="text-white/80">{t("hero.partners")}</span>
      </div>

      <!-- Main Headline -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
        {t("hero.title1")} <br />
        <span class="bg-gradient-to-r from-accent-cyan via-accent-emerald to-accent-orange bg-clip-text text-transparent glow-cyan">
          {t("hero.titleGradient")}
        </span>
        <br />{t("hero.title2")}
      </h1>

      <!-- Subtitle -->
      <p class="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
        {t("hero.subtitle")}
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-wrap gap-4 pt-2">
        <a
          href="#apps"
          class="px-6 py-3.5 rounded-xl bg-accent-cyan text-bg-void font-bold text-sm tracking-wide transition-all duration-300 hover:bg-accent-cyan/90 hover:scale-[1.02] shadow-lg shadow-accent-cyan/25"
        >
          {t("hero.exploreApps")}
        </a>
        <a
          href="#enterprise"
          class="px-6 py-3.5 rounded-xl bg-bg-surface hover:bg-bg-surface/80 border border-white/10 text-white font-medium text-sm transition-all duration-300 hover:border-accent-emerald/50 flex items-center gap-2"
        >
          <span class="w-2 h-2 rounded-full bg-accent-emerald"></span>
          {t("hero.enterpriseCase")}
        </a>
      </div>

      <!-- Telemetry Highlights Grid -->
      <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
        <div class="space-y-1">
          <div class="text-xl md:text-2xl font-bold font-mono text-white">100k</div>
          <div class="text-xs text-text-muted font-mono uppercase tracking-wider">{t("hero.statNodes")}</div>
        </div>
        <div class="space-y-1">
          <div class="text-xl md:text-2xl font-bold font-mono text-accent-emerald">&lt; 15 ms</div>
          <div class="text-xs text-text-muted font-mono uppercase tracking-wider">{t("hero.statSync")}</div>
        </div>
        <div class="space-y-1">
          <div class="text-xl md:text-2xl font-bold font-mono text-accent-orange">ISO 27001</div>
          <div class="text-xs text-text-muted font-mono uppercase tracking-wider">{t("hero.statIso")}</div>
        </div>
      </div>
    </div>

    <!-- Right 3D Interactive WebGL Mesh -->
    <div class="lg:col-span-6 relative z-10">
      <NetworkCanvas />
    </div>
  </div>
</section>
