<script lang="ts">
  import { t } from "../i18n/index";
</script>

<section id="gpu-cloud" class="py-24 px-6 relative border-t border-white/5">
  <div class="max-w-7xl mx-auto space-y-16">
    <!-- Header -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-mono text-accent-cyan">
        <span>{t("gpu.badge")}</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        {t("gpu.title")} <span class="text-accent-cyan">{t("gpu.titleAccent")}</span>
      </h2>
      <p class="text-text-secondary text-base md:text-lg leading-relaxed">
        {t("gpu.subtitle")}
      </p>
    </div>

    <!-- 2 Column Comparison -->
    <div class="grid lg:grid-cols-2 gap-8">
      <!-- Local GPU Mode -->
      <div class="glass-panel p-8 md:p-10 space-y-6 border-accent-cyan/30 bg-gradient-to-br from-bg-surface to-accent-cyan/5">
        <div class="flex items-center justify-between">
          <div class="w-12 h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-2xl">
            ⚡
          </div>
          <span class="px-3 py-1 rounded-full bg-accent-cyan text-bg-void text-xs font-mono font-bold uppercase">
            {t("gpu.localBadge")}
          </span>
        </div>

        <div class="space-y-2">
          <h3 class="text-2xl font-bold text-white">{t("gpu.localTitle")}</h3>
          <p class="text-xs font-mono text-accent-cyan">{t("gpu.localSubtitle")}</p>
        </div>

        <p class="text-sm text-text-secondary leading-relaxed">
          {t("gpu.localDesc")}
        </p>

        <div class="space-y-2.5 pt-2 border-t border-white/5 font-mono text-xs text-text-muted">
          <div class="flex items-center gap-2 text-white">
            <span class="text-accent-cyan">✔</span> {t("gpu.localCheck1")}
          </div>
          <div class="flex items-center gap-2 text-white">
            <span class="text-accent-cyan">✔</span> {t("gpu.localCheck2")}
          </div>
          <div class="flex items-center gap-2 text-white">
            <span class="text-accent-cyan">✔</span> {t("gpu.localCheck3")}
          </div>
        </div>
      </div>

      <!-- Partner Cloud Persistence -->
      <div class="glass-panel p-8 md:p-10 space-y-6 border-accent-emerald/30 bg-gradient-to-br from-bg-surface to-accent-emerald/5">
        <div class="flex items-center justify-between">
          <div class="w-12 h-12 rounded-2xl bg-accent-emerald/10 border border-accent-emerald/30 flex items-center justify-center text-2xl">
            ☁️
          </div>
          <span class="px-3 py-1 rounded-full bg-accent-emerald text-bg-void text-xs font-mono font-bold uppercase">
            {t("gpu.cloudBadge")}
          </span>
        </div>

        <div class="space-y-2">
          <h3 class="text-2xl font-bold text-white">{t("gpu.cloudTitle")}</h3>
          <p class="text-xs font-mono text-accent-emerald">{t("gpu.cloudSubtitle")}</p>
        </div>

        <p class="text-sm text-text-secondary leading-relaxed">
          {t("gpu.cloudDesc")}
        </p>

        <div class="space-y-2.5 pt-2 border-t border-white/5 font-mono text-xs text-text-muted">
          <div class="flex items-center gap-2 text-white">
            <span class="text-accent-emerald">✔</span> {t("gpu.cloudCheck1")}
          </div>
          <div class="flex items-center gap-2 text-white">
            <span class="text-accent-emerald">✔</span> {t("gpu.cloudCheck2")}
          </div>
          <div class="flex items-center gap-2 text-white">
            <span class="text-accent-emerald">✔</span> {t("gpu.cloudCheck3")}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
