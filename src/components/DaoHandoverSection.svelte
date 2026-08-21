<script lang="ts">
  let currentNodes = $state(14820);
  let verifiedHumans = $state(28);
  const targetNodes = 100000;
  const targetHumans = 100;

  let nodesPercent = $derived(((currentNodes / targetNodes) * 100).toFixed(1));
  let humansPercent = $derived(((verifiedHumans / targetHumans) * 100).toFixed(1));
</script>

<section id="dao" class="py-24 px-6 relative bg-bg-dark/60 border-t border-white/5">
  <div class="max-w-7xl mx-auto space-y-16">
    <!-- Header -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-400">
        <span>GOVERNANCE ROADMAP</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        Decentralized Governance & <span class="text-purple-400">Community Handover</span>
      </h2>
      <p class="text-text-secondary text-base md:text-lg leading-relaxed">
        BELA (Colombia) initiates and stewards the SWAL network. Full protocol governance will be formally transferred to the community DAO once verifiable network scale is reached.
      </p>
    </div>

    <!-- Handover Progress HUD -->
    <div class="glass-panel p-8 md:p-12 border-purple-500/20 bg-gradient-to-br from-bg-surface to-purple-900/10 space-y-10">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Node Count Progress -->
        <div class="space-y-3">
          <div class="flex justify-between items-baseline font-mono">
            <span class="text-xs text-text-secondary uppercase tracking-wider">Active P2P Mesh Nodes</span>
            <span class="text-sm text-purple-400 font-bold">{currentNodes.toLocaleString()} / {targetNodes.toLocaleString()} ({nodesPercent}%)</span>
          </div>
          <div class="w-full h-3 rounded-full bg-bg-void/80 overflow-hidden border border-white/10 p-0.5">
            <div class="h-full rounded-full bg-gradient-to-r from-accent-cyan via-accent-emerald to-purple-500 transition-all duration-1000" style="width: {nodesPercent}%"></div>
          </div>
          <p class="text-[11px] font-mono text-text-muted">Requires 100k active network nodes maintaining CRDT state.</p>
        </div>

        <!-- Human Nodes Progress -->
        <div class="space-y-3">
          <div class="flex justify-between items-baseline font-mono">
            <span class="text-xs text-text-secondary uppercase tracking-wider">Verified Human Nodes (Public Info)</span>
            <span class="text-sm text-accent-emerald font-bold">{verifiedHumans} / {targetHumans} ({humansPercent}%)</span>
          </div>
          <div class="w-full h-3 rounded-full bg-bg-void/80 overflow-hidden border border-white/10 p-0.5">
            <div class="h-full rounded-full bg-gradient-to-r from-accent-emerald to-accent-cyan transition-all duration-1000" style="width: {humansPercent}%"></div>
          </div>
          <p class="text-[11px] font-mono text-text-muted">Requires 100 verified public nodes of real community builders.</p>
        </div>
      </div>

      <!-- Radical Transparency Block -->
      <div class="p-6 rounded-xl bg-bg-void/60 border border-white/10 space-y-4">
        <div class="flex items-center gap-3">
          <span class="text-xl">🔓</span>
          <h3 class="text-base font-bold text-white font-mono">The Xavier Radical Transparency Commitment</h3>
        </div>
        <p class="text-xs text-text-secondary leading-relaxed">
          Upon reaching the 100k node milestone, SouthWest AI Labs will decentralize and expose its entire institutional memory through <strong>Xavier</strong>: complete project codebases, architectural decision records (ADRs), full development session histories, agent harnesses, and skill registries — queried intelligently and immutably across the P2P mesh.
        </p>
      </div>
    </div>
  </div>
</section>
