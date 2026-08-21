<script lang="ts">
  import { SWAL_APPS, type SwalApp } from "../data/ecosystem";

  let selectedCategory = $state<string>("all");
  let searchQuery = $state<string>("");

  const categories = [
    { id: "all", label: "All Projects (18)" },
    { id: "enterprise", label: "Industrial & Enterprise" },
    { id: "core", label: "Core Infrastructure" },
    { id: "civic", label: "Civic & Education" },
    { id: "mobile", label: "Mobile & Wearables" },
    { id: "creator", label: "AI & Creator Tools" }
  ];

  let filteredApps = $derived(
    SWAL_APPS.filter(app => {
      const matchCategory = selectedCategory === "all" || app.category === selectedCategory;
      const matchSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.stack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
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
          <span>CANONICAL PORTFOLIO</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          SWAL Ecosystem <span class="text-accent-cyan">(18 Apps)</span>
        </h2>
        <p class="text-text-secondary text-base max-w-xl">
          Explore all live and active decentralized applications. Every app includes complete Pro capabilities out of the box with zero subscriptions.
        </p>
      </div>

      <!-- Search Input -->
      <div class="w-full md:w-72">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Search apps, stack, domain..."
          class="w-full px-4 py-2.5 rounded-xl bg-bg-surface border border-white/10 text-xs font-mono text-white placeholder-text-muted focus:outline-none focus:border-accent-cyan/50 transition-colors"
        />
      </div>
    </div>

    <!-- Category Filter Tabs -->
    <div class="flex flex-wrap gap-2 pb-2">
      {#each categories as cat}
        <button
          onclick={() => selectedCategory = cat.id}
          class="px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer"
          class:bg-accent-cyan={selectedCategory === cat.id}
          class:text-bg-void={selectedCategory === cat.id}
          class:font-bold={selectedCategory === cat.id}
          class:bg-bg-surface={selectedCategory !== cat.id}
          class:text-text-secondary={selectedCategory !== cat.id}
          class:border={selectedCategory !== cat.id}
          class:border-white-5={selectedCategory !== cat.id}
        >
          {cat.label}
        </button>
      {/each}
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
                class:bg-emerald-500-10={app.status === "production"}
                class:text-accent-emerald={app.status === "production"}
                class:bg-cyan-500-10={app.status === "active"}
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

            <div class="flex items-center gap-4 pt-2">
              {#if app.liveUrl}
                <a
                  href={app.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-3 py-1.5 rounded-lg bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-bold transition-all"
                >
                  Live Demo ↗
                </a>
              {/if}
              {#if app.repoUrl}
                <a
                  href={app.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs font-mono text-text-muted hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>Repository</span>
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
