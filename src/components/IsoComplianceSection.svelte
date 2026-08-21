<script lang="ts">
  import { ISO_STANDARDS } from '../data/ecosystem';
</script>

<section id="iso" class="py-24 px-6 relative bg-bg-dark/40 border-t border-white/5">
  <div class="max-w-7xl mx-auto space-y-16">
    <!-- Header -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-orange/10 border border-accent-orange/30 text-xs font-mono text-accent-orange">
        <span>STANDARDS & CYBERNETIC SECURITY</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        ISO Compliance & <span class="text-accent-orange">Data Governance</span>
      </h2>
      <p class="text-text-secondary text-base md:text-lg leading-relaxed">
        Engineered from day one to satisfy rigorous international standards for security, privacy, cloud persistence, and agentic AI oversight.
      </p>
    </div>

    <!-- ISO Cards Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each ISO_STANDARDS as std}
        <div class="glass-panel p-6 space-y-4 flex flex-col justify-between hover:border-accent-orange/40 transition-all duration-300">
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded bg-accent-orange/10 border border-accent-orange/30 text-[10px] font-mono font-bold text-accent-orange uppercase">
                {std.badge}
              </span>
              <span class="text-xs font-mono text-accent-emerald">{std.coverage}</span>
            </div>
            <h3 class="text-base font-bold text-white">{std.code}</h3>
            <p class="text-xs font-mono text-text-muted">{std.name}</p>
            <p class="text-xs text-text-secondary leading-relaxed">{std.desc}</p>
          </div>

          <div class="pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-accent-emerald">
            <span>✔</span>
            <span>By-Design Architecture</span>
          </div>
        </div>
      {/each}
    </div>

    <!-- Advanced Cybernetic Features -->
    <div class="glass-panel p-8 md:p-10 border-white/5 space-y-6">
      <h3 class="text-xl font-bold text-white">Private Mesh & Tor / Onion Transport Layer</h3>
      <p class="text-sm text-text-secondary leading-relaxed max-w-4xl">
        SWAL allows any collective, enterprise, or community to spin up private encrypted P2P mesh networks spanning from <strong>1 to thousands of nodes</strong>. Network packets utilize end-to-end ChaCha20-Poly1305 encryption, optional Tor / Onion transport routing, and post-quantum ML-KEM encapsulation, ensuring complete resistance against eavesdropping, ISP tracking, and traffic analysis.
      </p>

      <div class="grid sm:grid-cols-3 gap-4 pt-2">
        <div class="p-4 rounded-xl bg-bg-void/60 border border-white/5 space-y-1 font-mono text-xs">
          <div class="text-accent-cyan font-bold">Private Mallas (1-N)</div>
          <div class="text-text-muted">Isolated subnets for closed teams</div>
        </div>
        <div class="p-4 rounded-xl bg-bg-void/60 border border-white/5 space-y-1 font-mono text-xs">
          <div class="text-accent-emerald font-bold">Onion Transport</div>
          <div class="text-text-muted">Tor-hidden routing for peer discovery</div>
        </div>
        <div class="p-4 rounded-xl bg-bg-void/60 border border-white/5 space-y-1 font-mono text-xs">
          <div class="text-accent-orange font-bold">Role-Based ACL</div>
          <div class="text-text-muted">Least-privilege cybernetic access</div>
        </div>
      </div>
    </div>
  </div>
</section>
