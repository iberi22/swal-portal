<script lang="ts">
  import { t } from "../i18n/index";

  let currentCmd = $state("swal node status");

  let terminalOutput = $derived<string[]>([
    t("terminal.welcome1"),
    t("terminal.welcome2"),
    "",
    t("terminal.onlineXavier"),
    t("terminal.onlineStorage"),
    t("terminal.onlineGpu"),
    t("terminal.onlineIso"),
    "",
    t("terminal.typeHelp")
  ]);

  let customLogs = $state<string[]>([]);

  function runCommand(cmd: string) {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === "clear") {
      customLogs = [];
      return;
    }

    let response: string[] = [];
    if (trimmed === "help") {
      response = t("terminal.cmdHelpDesc").split("\n");
    } else if (trimmed === "swal node status") {
      response = [
        t("terminal.nodeStatusTitle"),
        "Node ID: swal-node-9f82a1e04b77",
        t("terminal.netTopology"),
        t("terminal.storageLabel"),
        t("terminal.activePeers"),
        t("terminal.karmaScore"),
        t("terminal.statusHealthy")
      ];
    } else if (trimmed === "xavier memory query") {
      response = [
        t("terminal.queryTitle"),
        ...t("terminal.queryText").split("\n")
      ];
    } else if (trimmed === "mesh peers list") {
      response = t("terminal.peersTitle").split("\n");
    } else if (trimmed === "gpu benchmark") {
      response = t("terminal.gpuTitle").split("\n");
    } else {
      response = [t("terminal.cmdNotFound")];
    }

    customLogs = [
      ...customLogs,
      `$ ${cmd}`,
      ...response,
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
        <span>{t("terminal.badge")}</span>
      </div>
      <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-mono">
        {t("terminal.title")}
      </h2>
      <p class="text-text-secondary text-sm font-mono">
        {t("terminal.subtitle")}
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

        {#each customLogs as line}
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
          placeholder={t("terminal.placeholder")}
          class="flex-1 bg-transparent border-none text-white focus:outline-none placeholder-text-muted text-xs font-mono"
        />
        <button
          onclick={() => { runCommand(currentCmd); currentCmd = ""; }}
          class="px-3 py-1 rounded bg-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan/30 text-[11px] font-bold transition-all cursor-pointer"
        >
          {t("terminal.execute")}
        </button>
      </div>
    </div>
  </div>
</section>
