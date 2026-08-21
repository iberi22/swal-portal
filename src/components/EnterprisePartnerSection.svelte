<script lang="ts">
  import { TRIPRO_CASE_STUDY } from '../data/ecosystem';
</script>

<section id="enterprise" class="py-24 px-6 relative border-t border-white/5 overflow-hidden">
  <div class="max-w-7xl mx-auto space-y-16">
    <!-- Header -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-xs font-mono text-accent-emerald">
        <span>★ PIONEER COMMERCIAL PARTNER</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        Enterprise Validation: <span class="text-accent-emerald">tripro.cl</span>
      </h2>
      <p class="text-text-secondary text-base md:text-lg leading-relaxed">
        Real-world industrial operations powered by SWAL's sovereign local-first architecture in Chile.
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
            "{TRIPRO_CASE_STUDY.quote}"
          </blockquote>

          <p class="text-sm text-text-secondary leading-relaxed">
            Through <strong>ManteniApp</strong>, tripro.cl executes continuous work orders, equipment vibration telemetry, and digital compliance sign-offs in remote mining environments with zero cloud dependency.
          </p>

          <div class="flex items-center gap-4 pt-2">
            <a
              href="https://tripro.cl/manteniapp"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2.5 rounded-xl bg-accent-emerald text-bg-void font-bold text-xs font-mono tracking-wider uppercase transition-all hover:bg-accent-emerald/90 shadow-lg shadow-accent-emerald/20"
            >
              Access ManteniApp (tripro.cl) ↗
            </a>
            <a
              href="https://tripro.cl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs font-mono text-text-muted hover:text-white transition-colors"
            >
              Visit tripro.cl Portal
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
      <h3 class="text-xl font-bold text-white">Architecture Comparison: Traditional SaaS vs SWAL</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs font-mono border-collapse">
          <thead>
            <tr class="border-b border-white/10 text-text-muted">
              <th class="py-3 px-4">Dimension</th>
              <th class="py-3 px-4 text-red-400">Traditional Enterprise SaaS</th>
              <th class="py-3 px-4 text-accent-emerald">SWAL Sovereign Mesh</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-text-secondary">
            <tr>
              <td class="py-3 px-4 font-bold text-white">Offline Operations</td>
              <td class="py-3 px-4 text-text-muted">Fails or requires clunky sync plugins</td>
              <td class="py-3 px-4 text-accent-emerald font-bold">100% Native Local-First (CRDT)</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-white">Data Privacy</td>
              <td class="py-3 px-4 text-text-muted">Exfiltrated to US vendor multi-tenant cloud</td>
              <td class="py-3 px-4 text-accent-emerald font-bold">Zero-Knowledge on-device persistence</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-white">Pricing Model</td>
              <td class="py-3 px-4 text-text-muted">0-00 / user / month recurring fees</td>
              <td class="py-3 px-4 text-accent-emerald font-bold">bash Software fees (Run your own node)</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-bold text-white">Vendor Lock-In</td>
              <td class="py-3 px-4 text-text-muted">Proprietary formats and walled gardens</td>
              <td class="py-3 px-4 text-accent-emerald font-bold">Open SQLite, AGPL-3.0, Portable</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
