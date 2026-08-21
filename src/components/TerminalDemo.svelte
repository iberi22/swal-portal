<script lang="ts">
  let currentCmd = $state("swal node status");
  let terminalOutput = $state<string[]>([
    "SWAL Mesh Core v1.0.0-PROD (Linux x86_64)",
    "Connected to P2P Edge-Mesh via ML-DSA-65 post-quantum transport.",
    "",
    "[✓] Xavier Memory Core: ONLINE (:8006)",
    "[✓] Local CRDT Storage: SQLite-vec sync OK",
    "[✓] GPU Acceleration: NVIDIA RTX / WebGPU Active",
    "[✓] ISO 27001 Controls: SGSI Active (Encrypted Blobs)",
    "",
    "Type \"help\" to view available cybernetic commands."
  ]);

  const commands: Record<string, string[]> = {
    "help": [
      "Available Commands:",
      "  swal node status     - Display local mesh node telemetry",
      "  xavier memory query  - Inspect cognitive memory vectors",
      "  mesh peers list      - List connected P2P mesh nodes",
      "  tripro case          - View tripro.cl enterprise deployment stats",
      "  gpu benchmark        - Run local on-device inference test",
      "  clear                - Clear terminal screen"
    ],
    "swal node status": [
      "--- SWAL LOCAL NODE STATUS ---",
      "Node ID: swal-node-9f82a1e04b77",
      "Network Topology: P2P Mesh (Direct + Tor Onion fallback)",
      "Storage: 42.8 MB (Local Encrypted SQLite-vec)",
      "Active Peers: 124 (Chile, Colombia, US, EU)",
      "Karma Score: 1,480 points (Soulbound)",
      "Status: HEALTHY (Uptime: 99.98%)"
    ],
    "xavier memory query": [
      "--- XAVIER COGNITIVE GRAPH QUERY ---",
      "Query: \"Ecosystem architecture and enterprise client tripro.cl\"",
      "[Result 1] apps/manteniapp (similarity: 0.94) -> Enterprise FSM SaaS with tripro.cl",
      "[Result 2] cores/edge-mesh (similarity: 0.91) -> CRDT P2P data plane",
      "[Result 3] docs/SWAL/COMMERCIAL_STRATEGY.md (similarity: 0.89) -> ISO compliance & zero paywalls"
    ],
    "mesh peers list": [
      "--- CONNECTED P2P PEERS ---",
      "1. [Chile] tripro-node-01 (Enterprise / ManteniApp) -> 12ms",
      "2. [Colombia] swal-genesis-bela (Core Node) -> 8ms",
      "3. [Germany] peer-node-berlin (Community) -> 64ms",
      "4. [Japan] peer-node-tokyo (Community) -> 110ms"
    ],
    "tripro case": [
      "--- TRIPRO.CL ENTERPRISE PROFILE ---",
      "Partner: tripro.cl (Chile)",
      "Software: ManteniApp (PWA + AI Diagnostics)",
      "Deployment: Heavy Mining & Industrial Maintenance",
      "Data Privacy: 100% On-Premises / Sovereign",
      "Licensing Fee: $0 / user (Sovereign Node Mode)"
    ],
    "gpu benchmark": [
      "--- ON-DEVICE GPU BENCHMARK ---",
      "Device: Hardware WebGPU Engine",
      "Inference Engine: Ollama / wgpu Native",
      "Throughput: 84.6 tokens/sec (Llama-3-8B-Instruct-Q4)",
      "Cloud Tokens Consumed: 0 (Cost: $0.00)"
    ]
  };

  function runCommand(cmd: string) {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === "clear") {
      terminalOutput = [];
      return;
    }

    terminalOutput = [
      ...terminalOutput,
      `$ ${cmd}`,
      ...(commands[trimmed] || [`Error: Command "${cmd}" not recognized. Type "help" for manual.`]),
      ""
    ];
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      runCommand(currentCmd);
      currentCmd = "";
    }
  }
</script>

<section id="terminal" class="py-24 px-6 relative border-t border-white/5">
  <div class="max-w-5xl mx-auto space-y-8">
    <div class="text-center space-y-3">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-mono text-accent-cyan">
        <span>INTERACTIVE HUD TERMINAL</span>
      </div>
      <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-mono">
        &gt; SWAL_CLI_SIMULATOR
      </h2>
      <p class="text-text-secondary text-sm font-mono">
        Test live simulated commands against the Xavier memory core and edge-mesh network.
      </p>
    </div>

    <!-- Terminal Window -->
    <div class="rounded-2xl border border-white/10 bg-bg-void shadow-2xl overflow-hidden font-mono text-xs">
      <!-- Terminal Title Bar -->
      <div class="px-4 py-3 bg-bg-surface border-b border-white/10 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
          <span class="ml-2 text-text-muted text-[11px]">swal@mesh-node-01:~</span>
        </div>
        <span class="text-[10px] text-accent-cyan">TLS 1.3 / ML-KEM-768</span>
      </div>

      <!-- Terminal Body -->
      <div class="p-6 space-y-1 max-h-96 overflow-y-auto bg-bg-void/90 text-text-secondary">
        {#each terminalOutput as line}
          <div class="leading-relaxed" class:text-accent-cyan={line.startsWith("$")} class:text-accent-emerald={line.includes("[✓]") || line.includes("HEALTHY")}>
            {line}
          </div>
        {/each}
      </div>

      <!-- Terminal Input Line -->
      <div class="px-6 py-4 bg-bg-surface/50 border-t border-white/5 flex items-center gap-3">
        <span class="text-accent-cyan font-bold">&gt;</span>
        <input
          type="text"
          bind:value={currentCmd}
          onkeydown={handleKeydown}
          placeholder="Type a command (e.g. swal node status, xavier memory query, help)..."
          class="flex-1 bg-transparent border-none text-white focus:outline-none placeholder-text-muted text-xs font-mono"
        />
        <button
          onclick={() => { runCommand(currentCmd); currentCmd = ""; }}
          class="px-3 py-1 rounded bg-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan/30 text-[11px] font-bold transition-all cursor-pointer"
        >
          Execute
        </button>
      </div>
    </div>
  </div>
</section>
