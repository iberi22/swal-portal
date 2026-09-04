<script lang="ts">
  import { t } from "../i18n/index";

  const milestones = [
    {
      date: "August 2026",
      tag: "Wave 1 - 5",
      title: "Cores Unification & Deterministic VFS",
      desc: "Xavier cognitive memory engine, edge-mesh P2P CRDT data plane, swal-agent-runner VFS sandboxes, and @swal/ui Hive Dark design tokens reached 100% verified status.",
      commit: "5c8bbc9d",
      status: "verified"
    },
    {
      date: "Late August 2026",
      tag: "Wave 14",
      title: "GOS Release v1.0.0 & Public Recipe Standards",
      desc: "Gastronomic Open Standard normalized across 1,017 structured JSON files, with 509 recipes and complete E2E test suites (22 tests, 5 specs). Released under public open license.",
      commit: "d7f5fd03",
      status: "released"
    },
    {
      date: "September 2026",
      tag: "Enterprise & Private Enclave",
      title: "Veedur-IA Private Enterprise Engine",
      desc: "Forensic SECOP II public procurement intelligence and whistleblower audit engine isolated as a confidential internal enterprise venture under strict operational security.",
      commit: "623af36",
      status: "private"
    },
    {
      date: "September 2026",
      tag: "Wave 6 - 7",
      title: "Desktop One-Click & Cloudflare Edge Resilience",
      desc: "Dual distribution milestone: One-click native desktop bundles (.dmg / .msi) with automatic background daemons and Cloudflare serverless edge persistence (Workers, Vectorize, D1).",
      commit: "f7076854",
      status: "live"
    }
  ];
</script>

<section id="timeline" class="py-24 px-6 relative border-t border-white/5 bg-bg-dark/40">
  <div class="max-w-7xl mx-auto space-y-16">
    <!-- Header -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-mono text-accent-cyan">
        <span>COMMIT TRAIL & VERIFIED ROADMAP</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        Engineering Timeline & <span class="text-accent-cyan">Commit Ledger</span>
      </h2>
      <p class="text-text-secondary text-base md:text-lg leading-relaxed">
        Verifiable proof of work: tracing the evolution of SWAL deep-tech cores, enterprise enclaves, and public application releases through deterministic commits.
      </p>
    </div>

    <!-- Timeline Grid -->
    <div class="relative border-l border-white/10 ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
      {#each milestones as m}
        <div class="relative group">
          <!-- Dot Marker -->
          <div class="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-bg-void border-2 border-accent-cyan flex items-center justify-center group-hover:scale-125 transition-transform">
            <div class="w-1.5 h-1.5 rounded-full bg-accent-cyan"></div>
          </div>

          <!-- Card Content -->
          <div class="glass-panel p-6 md:p-8 space-y-3 bg-bg-surface/60 hover:bg-bg-surface border-white/10 hover:border-accent-cyan/40 transition-all duration-300">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs font-mono text-accent-cyan font-semibold">{m.date} · {m.tag}</span>
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold
                  {m.status === 'private' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                   m.status === 'released' ? 'bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/30' :
                   'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'}">
                  {m.status}
                </span>
                <span class="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-text-muted">
                  git:{m.commit}
                </span>
              </div>
            </div>

            <h3 class="text-xl font-bold text-white font-mono">{m.title}</h3>
            <p class="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
