<script lang="ts">
  import { SWAL_APPS, type SwalApp } from "../data/ecosystem";
  import { t } from "../i18n/index";

  let selectedCategory = $state<string>("all");
  let searchQuery = $state<string>("");

  let filteredApps = $derived(
    SWAL_APPS.filter(app => {
      const matchCategory = selectedCategory === "all" || app.category === selectedCategory;
      const matchSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.stack.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    })
  );
</script>

<section id="apps" class="py-24 px-6 relative bg-bg-dark/50 border-t border-white/5">
  <div class="max-w-7xl mx-auto space-y-12">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan">
          <span>{t("apps.badge")}</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          {t("apps.title")} <span class="text-accent-cyan">{t("apps.titleCount")}</span>
        </h2>
        <p class="text-text-secondary text-base max-w-xl">
          {t("apps.subtitle")}
        </p>
      </div>

      <!-- Search Input -->
      <div class="w-full md:w-72">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder={t("apps.searchPlaceholder")}
          class="w-full px-4 py-2.5 rounded-xl bg-bg-surface border border-white/10 text-xs font-mono text-white placeholder-text-muted focus:outline-none focus:border-accent-cyan/50 transition-colors"
        />
      </div>
    </div>

    <!-- Category Filter Tabs -->
    <div class="flex flex-wrap gap-2 pb-2">
      <button
        onclick={() => selectedCategory = "all"}
        class="px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer"
        class:bg-accent-cyan={selectedCategory === "all"}
        class:text-bg-void={selectedCategory === "all"}
        class:font-bold={selectedCategory === "all"}
        class:bg-bg-surface={selectedCategory !== "all"}
        class:text-text-secondary={selectedCategory !== "all"}
        class:border={selectedCategory !== "all"}
        class:border-white-5={selectedCategory !== "all"}
      >
        {t("apps.allProjects")}
      </button>

      <button
        onclick={() => selectedCategory = "enterprise"}
        class="px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer"
        class:bg-accent-cyan={selectedCategory === "enterprise"}
        class:text-bg-void={selectedCategory === "enterprise"}
        class:font-bold={selectedCategory === "enterprise"}
        class:bg-bg-surface={selectedCategory !== "enterprise"}
        class:text-text-secondary={selectedCategory !== "enterprise"}
        class:border={selectedCategory !== "enterprise"}
        class:border-white-5={selectedCategory !== "enterprise"}
      >
        {t("apps.catEnterprise")}
      </button>

      <button
        onclick={() => selectedCategory = "core"}
        class="px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer"
        class:bg-accent-cyan={selectedCategory === "core"}
        class:text-bg-void={selectedCategory === "core"}
        class:font-bold={selectedCategory === "core"}
        class:bg-bg-surface={selectedCategory !== "core"}
        class:text-text-secondary={selectedCategory !== "core"}
        class:border={selectedCategory !== "core"}
        class:border-white-5={selectedCategory !== "core"}
      >
        {t("apps.catCore")}
      </button>

      <button
        onclick={() => selectedCategory = "civic"}
        class="px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer"
        class:bg-accent-cyan={selectedCategory === "civic"}
        class:text-bg-void={selectedCategory === "civic"}
        class:font-bold={selectedCategory === "civic"}
        class:bg-bg-surface={selectedCategory !== "civic"}
        class:text-text-secondary={selectedCategory !== "civic"}
        class:border={selectedCategory !== "civic"}
        class:border-white-5={selectedCategory !== "civic"}
      >
        {t("apps.catCivic")}
      </button>

      <button
        onclick={() => selectedCategory = "mobile"}
        class="px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer"
        class:bg-accent-cyan={selectedCategory === "mobile"}
        class:text-bg-void={selectedCategory === "mobile"}
        class:font-bold={selectedCategory === "mobile"}
        class:bg-bg-surface={selectedCategory !== "mobile"}
        class:text-text-secondary={selectedCategory !== "mobile"}
        class:border={selectedCategory !== "mobile"}
        class:border-white-5={selectedCategory !== "mobile"}
      >
        {t("apps.catMobile")}
      </button>

      <button
        onclick={() => selectedCategory = "creator"}
        class="px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer"
        class:bg-accent-cyan={selectedCategory === "creator"}
        class:text-bg-void={selectedCategory === "creator"}
        class:font-bold={selectedCategory === "creator"}
        class:bg-bg-surface={selectedCategory !== "creator"}
        class:text-text-secondary={selectedCategory !== "creator"}
        class:border={selectedCategory !== "creator"}
        class:border-white-5={selectedCategory !== "creator"}
      >
        {t("apps.catCreator")}
      </button>
    </div>

    <!-- Apps Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filteredApps as app (app.id)}
        <div class="glass-panel p-6 flex flex-col justify-between space-y-6 hover:border-accent-cyan/40 transition-all duration-300 relative group">
          {#if app.isEnterpriseClient}
            <div class="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-accent-emerald text-bg-void text-[10px] font-mono font-bold tracking-wider uppercase shadow-md">
              ★ tripro.cl Enterprise
            </div>
          {/if}

          <div class="space-y-4">
            <div class="flex items-center justify-between pt-1">
              <h3 class="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                {app.name}
              </h3>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border border-white/10"
                class:text-accent-emerald={app.status === "production"}
                class:text-accent-cyan={app.status === "active"}
                class:text-text-muted={app.status !== "production" && app.status !== "active"}
              >
                {app.status}
              </span>
            </div>

            <p class="text-xs font-mono text-accent-cyan/80">{app.tagline}</p>
            <p class="text-text-secondary text-xs leading-relaxed">{app.description}</p>
          </div>

          <div class="space-y-4 pt-4 border-t border-white/5">
            <div class="flex flex-wrap gap-1.5">
              {#each app.stack as tag}
                <span class="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-text-muted">
                  {tag}
                </span>
              {/each}
            </div>

            <div class="flex items-center justify-between pt-2">
              <div>
                {#if app.liveUrl}
                  <a
                    href={app.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-3 py-1.5 rounded-lg bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-bold transition-all inline-block"
                  >
                    {t("apps.liveDemo")}
                  </a>
                {/if}
              </div>

              <div>
                {#if app.repoStatus === "public" && app.repoUrl}
                  <a
                    href={app.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs font-mono text-text-muted hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    <span>{t("apps.publicRepo")}</span>
                  </a>
                {:else}
                  <a
                    href="https://t.me/BeRi0n3"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Invite-only repository during mesh expansion phase. Contact for access."
                    class="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t("apps.inviteOnly")}</span>
                  </a>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
