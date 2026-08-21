<script lang="ts">
  import { TRIPRO_CASE_STUDY } from "../data/ecosystem";
  import { t } from "../i18n/index";
</script>

<section id="enterprise" class="py-24 px-6 relative border-t border-white/5 overflow-hidden">
  <div class="max-w-7xl mx-auto space-y-16">
    <!-- Header -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-xs font-mono text-accent-emerald">
        <span>{t("enterprise.badge")}</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        {t("enterprise.title")} <span class="text-accent-emerald">tripro.cl</span>
      </h2>
      <p class="text-text-secondary text-base md:text-lg leading-relaxed">
        {t("enterprise.subtitle")}
      </p>
    </div>

    <!-- Case Study Card -->
    <div class="glass-panel p-8 md:p-12 border-accent-emerald/20 bg-gradient-to-br from-bg-surface via-bg-surface to-accent-emerald/5 relative overflow-hidden">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6">
          <div class="flex items-center gap-4">
            <div class="px-4 py-2 rounded-xl bg-accent-emerald/10 border border-accent-emerald/30 font-mono font-bold text-accent-emerald text-sm">
              tripro.cl (Chile)
            </div>
            <span class="text-xs font-mono text-text-muted">Mining & Engineering Services</span>
          </div>

          <blockquote class="text-lg md:text-xl font-medium text-white/90 italic leading-relaxed border-l-2 border-accent-emerald pl-6">
            "{t("enterprise.quote")}"
          </blockquote>

          <p class="text-sm text-text-secondary leading-relaxed">
            {t("enterprise.description")}
          </p>

          <div class="flex items-center gap-4 pt-2">
            <a
              href="https://tripro.cl/manteniapp"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2.5 rounded-xl bg-accent-emerald text-bg-void font-bold text-xs font-mono tracking-wider uppercase transition-all hover:bg-accent-emerald/90 shadow-lg shadow-accent-emerald/20"
            >
              {t("enterprise.accessBtn")}
            </a>
            <a
              href="https://tripro.cl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs font-mono text-text-muted hover:text-white transition-colors"
            >
              {t("enterprise.visitPartner")}
            </a>
          </div>
        </div>

        <!-- Metrics Grid -->
        <div class="lg:col-span-5 grid grid-cols-2 gap-4">
          {#each TRIPRO_CASE_STUDY.metrics as metric}
            <div class="glass-panel p-5 space-y-2 border-white/5 bg-bg-void/50">
              <div class="text-2xl font-bold font-mono text-accent-emerald">{metric.value}</div>
              <div class="text-xs font-bold text-white">{metric.label}</div>
              <div class="text-[11px] text-text-muted leading-tight">{metric.detail}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Comparative Table -->
    <div class="space-y-6 pt-6">
      <h3 class="text-xl font-bold text-white">{t("enterprise.tableTitle")}</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs font-mono border-collapse">
          <thead>
            <tr class="border-b border-white/10 text-text-muted">
              <th class="py-3 px-4">{t("enterprise.tableDim")}</th>
              <th class="py-3 px-4 text-red-400">{t("enterprise.tableLegacy")}</th>
              <th class="py-3 px-4 text-accent-emerald">{t("enterprise.tableSwal")}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-text-secondary">
            <tr>
              <td class="py-3 px-4 font-bold text-white">{t("enterprise.rowOffline")}</td>
              <td class="py-3 px-4 text-text-muted">{t("enterprise.rowOfflineLegacy")}</td>
              <td class="py-3 px-4 text-accent-emerald font-bold">{t("enterprise.rowOfflineSwal")}</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-white">{t("enterprise.rowPrivacy")}</td>
              <td class="py-3 px-4 text-text-muted">{t("enterprise.rowPrivacyLegacy")}</td>
              <td class="py-3 px-4 text-accent-emerald font-bold">{t("enterprise.rowPrivacySwal")}</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-white">{t("enterprise.rowPricing")}</td>
              <td class="py-3 px-4 text-text-muted">{t("enterprise.rowPricingLegacy")}</td>
              <td class="py-3 px-4 text-accent-emerald font-bold">{t("enterprise.rowPricingSwal")}</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-white">{t("enterprise.rowLockin")}</td>
              <td class="py-3 px-4 text-text-muted">{t("enterprise.rowLockinLegacy")}</td>
              <td class="py-3 px-4 text-accent-emerald font-bold">{t("enterprise.rowLockinSwal")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
