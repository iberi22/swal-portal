<script lang="ts">
  import { t } from "../i18n/index";

  let cores = $derived([
    {
      id: "xavier",
      icon: "🧠",
      name: t("cores.xavier.name"),
      tagline: t("cores.xavier.tagline"),
      description: t("cores.xavier.desc"),
      features: [
        t("cores.xavier.feat1"),
        t("cores.xavier.feat2"),
        t("cores.xavier.feat3"),
        t("cores.xavier.feat4")
      ],
      color: "border-accent-cyan/30 text-accent-cyan",
      badge: "Cognitive Core",
      github: "https://github.com/iberi22/xavier"
    },
    {
      id: "edge-mesh",
      icon: "🌐",
      name: t("cores.edgeMesh.name"),
      tagline: t("cores.edgeMesh.tagline"),
      description: t("cores.edgeMesh.desc"),
      features: [
        t("cores.edgeMesh.feat1"),
        t("cores.edgeMesh.feat2"),
        t("cores.edgeMesh.feat3"),
        t("cores.edgeMesh.feat4")
      ],
      color: "border-accent-emerald/30 text-accent-emerald",
      badge: "Libp2p / Rust",
      github: "https://github.com/iberi22/edge-mesh"
    },
    {
      id: "agent-runner",
      icon: "🤖",
      name: t("cores.agentRunner.name"),
      tagline: t("cores.agentRunner.tagline"),
      description: t("cores.agentRunner.desc"),
      features: [
        t("cores.agentRunner.feat1"),
        t("cores.agentRunner.feat2"),
        t("cores.agentRunner.feat3"),
        t("cores.agentRunner.feat4")
      ],
      color: "border-accent-orange/30 text-accent-orange",
      badge: "VFS Isolation",
      github: "https://github.com/iberi22/swal-agent-runner"
    },
    {
      id: "swal-ui",
      icon: "🎨",
      name: t("cores.swalUi.name"),
      tagline: t("cores.swalUi.tagline"),
      description: t("cores.swalUi.desc"),
      features: [
        t("cores.swalUi.feat1"),
        t("cores.swalUi.feat2"),
        t("cores.swalUi.feat3"),
        t("cores.swalUi.feat4")
      ],
      color: "border-purple-500/30 text-purple-400",
      badge: "Svelte 5 / Tokens",
      github: "https://github.com/iberi22/swal-ui"
    }
  ]);
</script>

<section id="cores" class="py-24 px-6 relative border-t border-white/5">
  <div class="max-w-7xl mx-auto space-y-16">
    <!-- Section Header -->
    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-text-secondary">
        <span>{t("cores.badge")}</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        {t("cores.title")} <span class="text-accent-cyan">{t("cores.titleAccent")}</span>
      </h2>
      <p class="text-text-secondary text-base md:text-lg leading-relaxed">
        {t("cores.subtitle")}
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
              <span>{t("cores.inspectSource")}</span>
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
