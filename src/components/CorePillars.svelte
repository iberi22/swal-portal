<script lang="ts">
  const cores = [
    {
      id: 'xavier',
      icon: '🧠',
      name: 'Xavier',
      tagline: 'Cognitive Agentic Memory Engine',
      description: 'Unified high-performance memory daemon in Rust. Combines multi-tier vector indexing, GraphRAG knowledge graphs, and sealed pack verification to ensure agents never lose context across sessions.',
      features: ['L0-L3 Memory Hierarchy', 'SQLite-vec & Embeddings', 'GraphRAG Context', 'XTSP / MCP Server'],
      color: 'border-accent-cyan/30 text-accent-cyan',
      glow: 'shadow-accent-cyan/10',
      badge: 'Port :8006',
      github: 'https://github.com/iberi22/xavier'
    },
    {
      id: 'edge-mesh',
      icon: '🌐',
      name: 'edge-mesh',
      tagline: 'P2P CRDT & Post-Quantum Data Plane',
      description: 'Decentralized peer-to-peer transport layer syncing devices without central servers. Implements state-based CRDTs, multi-tenant namespaces, and post-quantum identity (ML-DSA-65 / ML-KEM-768).',
      features: ['State-based CRDT Sync', 'Quantum-Safe Cryptography', 'Tor & Onion Routing', 'Zero Cloud Dependency'],
      color: 'border-accent-emerald/30 text-accent-emerald',
      glow: 'shadow-accent-emerald/10',
      badge: 'Libp2p / Rust',
      github: 'https://github.com/iberi22/edge-mesh'
    },
    {
      id: 'agent-runner',
      icon: '🤖',
      name: 'swal-agent-runner',
      tagline: 'Autonomous Sandboxed Agent Engine',
      description: 'Deterministic execution harness for autonomous AI agents. Features complete virtual filesystem (VFS) isolation, capability grants, and GitCore 3.8 parallel task delegation.',
      features: ['VFS Sandboxing', 'GitCore 3.8 Protocol', 'WASM Extension Hooks', 'Autonomous Task Waves'],
      color: 'border-accent-orange/30 text-accent-orange',
      glow: 'shadow-accent-orange/10',
      badge: 'VFS Isolation',
      github: 'https://github.com/iberi22/swal-agent-runner'
    },
    {
      id: 'swal-ui',
      icon: '🎨',
      name: '@swal/ui',
      tagline: 'Hive Dark Modular Design System',
      description: 'Canonical design system engineered in Svelte 5 and Tailwind CSS 4. Standardizes visual tokens, accessible cybernetic HUDs, and unified cross-platform interfaces.',
      features: ['Svelte 5 Runes Native', 'Hive Dark Design Tokens', 'WCAG AAA Accessibility', 'Modular HUD Widgets'],
      color: 'border-purple-500/30 text-purple-400',
      glow: 'shadow-purple-500/10',
      badge: 'Svelte 5 / Tokens',
      github: 'https://github.com/iberi22/swal-ui'
    }
  ];
</script>

<section id="cores" class="py-24 px-6 relative border-t border-white/5">
  <div class="max-w-7xl mx-auto space-y-16">
    <!-- Section Header -->
    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-text-secondary">
        <span>CANONICAL ARCHITECTURE</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        The 4 Unified <span class="text-accent-cyan">Core Pillars</span>
      </h2>
      <p class="text-text-secondary text-base md:text-lg leading-relaxed">
        The bedrock infrastructure powering every application in the SWAL network. Zero proprietary silos, 100% sovereign code.
      </p>
    </div>

    <!-- 4 Pillars Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each cores as core}
        <div class="glass-panel p-8 flex flex-col justify-between space-y-6 hover:translate-y-[-4px] transition-all duration-300">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-3xl">{core.icon}</span>
              <span class="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-text-muted">
                {core.badge}
              </span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white flex items-center gap-2">
                {core.name}
              </h3>
              <p class="text-xs font-mono text-accent-cyan mt-1">{core.tagline}</p>
            </div>
            <p class="text-text-secondary text-xs leading-relaxed">
              {core.description}
            </p>
          </div>

          <div class="space-y-4 pt-4 border-t border-white/5">
            <div class="space-y-2">
              {#each core.features as feat}
                <div class="flex items-center gap-2 text-xs text-text-muted font-mono">
                  <span class="w-1.5 h-1.5 rounded-full bg-accent-cyan/60"></span>
                  <span>{feat}</span>
                </div>
              {/each}
            </div>

            <a
              href={core.github}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-accent-cyan transition-colors pt-2"
            >
              <span>Inspect Source</span>
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
