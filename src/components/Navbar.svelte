<script lang="ts">
  import {
    currentLang,
    setLanguage,
    currentTheme,
    setTheme,
    t,
    LANGUAGE_OPTIONS,
    type SupportedLanguage,
    type ThemeMode
  } from "../i18n/index";

  let isMobileMenuOpen = $state(false);
  let isLangMenuOpen = $state(false);
  let isThemeMenuOpen = $state(false);

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function changeLanguage(code: SupportedLanguage) {
    setLanguage(code);
    isLangMenuOpen = false;
  }

  function changeTheme(mode: ThemeMode) {
    setTheme(mode);
    isThemeMenuOpen = false;
  }
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-bg-void/85 backdrop-blur-xl border-b border-white/5">
  <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <!-- Brand -->
    <a href="#" class="flex items-center gap-3 group">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan via-accent-emerald to-accent-orange p-0.5 shadow-lg shadow-accent-cyan/20 group-hover:scale-105 transition-transform">
        <div class="w-full h-full bg-bg-void rounded-[10px] flex items-center justify-center font-mono font-bold text-accent-cyan text-sm">
          SW
        </div>
      </div>
      <div class="flex flex-col">
        <span class="font-bold text-base tracking-wider text-white group-hover:text-accent-cyan transition-colors">
          SWAL
        </span>
        <span class="text-[10px] font-mono text-text-muted tracking-widest uppercase">
          SouthWest AI Labs
        </span>
      </div>
    </a>

    <!-- Desktop Nav Links -->
    <nav class="hidden lg:flex items-center gap-7 text-xs font-mono font-medium text-text-secondary">
      <a href="#cores" class="hover:text-accent-cyan transition-colors">{t("nav.cores")}</a>
      <a href="#apps" class="hover:text-accent-cyan transition-colors">{t("nav.apps")}</a>
      <a href="#iso" class="hover:text-accent-cyan transition-colors">{t("nav.iso")}</a>
      <a href="#gpu-cloud" class="hover:text-accent-cyan transition-colors">{t("nav.gpuCloud")}</a>
      <a href="#dao" class="hover:text-accent-cyan transition-colors">{t("nav.dao")}</a>
    </nav>

    <!-- Header Actions -->
    <div class="hidden md:flex items-center gap-3">
      <!-- Theme Selector Dropdown -->
      <div class="relative">
        <button
          onclick={() => { isThemeMenuOpen = !isThemeMenuOpen; isLangMenuOpen = false; }}
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-bg-surface border border-white/10 text-xs font-mono text-text-secondary hover:text-white hover:border-accent-cyan/40 transition-colors cursor-pointer"
          aria-label="Toggle Theme"
        >
          <span>
            {#if $currentTheme === "dark"}🌙{:else if $currentTheme === "light"}☀️{:else}💻{/if}
          </span>
          <span class="capitalize text-[11px]">
            {t(`theme.${$currentTheme}`)}
          </span>
          <svg class="w-3 h-3 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {#if isThemeMenuOpen}
          <div class="absolute right-0 mt-2 w-36 rounded-xl bg-bg-surface border border-white/10 shadow-2xl py-1 z-50 backdrop-blur-2xl">
            <button
              onclick={() => changeTheme("dark")}
              class="w-full text-left px-4 py-2 text-xs font-mono flex items-center justify-between hover:bg-accent-cyan/10 hover:text-accent-cyan transition-colors cursor-pointer"
              class:text-accent-cyan={$currentTheme === "dark"}
            >
              <span>🌙 {t("theme.dark")}</span>
            </button>
            <button
              onclick={() => changeTheme("light")}
              class="w-full text-left px-4 py-2 text-xs font-mono flex items-center justify-between hover:bg-accent-cyan/10 hover:text-accent-cyan transition-colors cursor-pointer"
              class:text-accent-cyan={$currentTheme === "light"}
            >
              <span>☀️ {t("theme.light")}</span>
            </button>
            <button
              onclick={() => changeTheme("system")}
              class="w-full text-left px-4 py-2 text-xs font-mono flex items-center justify-between hover:bg-accent-cyan/10 hover:text-accent-cyan transition-colors cursor-pointer"
              class:text-accent-cyan={$currentTheme === "system"}
            >
              <span>💻 {t("theme.auto")}</span>
            </button>
          </div>
        {/if}
      </div>

      <!-- Language Dropdown -->
      <div class="relative">
        <button
          onclick={() => { isLangMenuOpen = !isLangMenuOpen; isThemeMenuOpen = false; }}
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-bg-surface border border-white/10 text-xs font-mono text-text-secondary hover:text-white hover:border-accent-cyan/40 transition-colors cursor-pointer"
          aria-label="Select Language"
        >
          <span>🌐</span>
          <span class="uppercase font-bold">{$currentLang}</span>
          <svg class="w-3 h-3 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {#if isLangMenuOpen}
          <div class="absolute right-0 mt-2 w-48 max-h-80 overflow-y-auto rounded-xl bg-bg-surface border border-white/10 shadow-2xl py-1 z-50 backdrop-blur-2xl">
            {#each LANGUAGE_OPTIONS as opt}
              <button
                onclick={() => changeLanguage(opt.code as SupportedLanguage)}
                class="w-full text-left px-4 py-2 text-xs font-mono flex items-center justify-between hover:bg-accent-cyan/10 hover:text-accent-cyan transition-colors cursor-pointer"
                class:text-accent-cyan={$currentLang === opt.code}
                class:font-bold={$currentLang === opt.code}
              >
                <div class="flex items-center gap-2">
                  <span>{opt.native}</span>
                  {#if opt.dir === "rtl"}
                    <span class="text-[9px] px-1 rounded bg-accent-orange/20 text-accent-orange">RTL</span>
                  {/if}
                </div>
                <span class="text-[10px] text-text-muted uppercase">{opt.code}</span>
              </button>
            {/each}
          </div>
        {/if}
      </div>

      <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-surface border border-white/10 text-xs font-mono text-text-secondary">
        <span class="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
        <span>{t("nav.networkVersion")}</span>
      </div>

      <a
        href="#terminal"
        class="px-4 py-2 rounded-xl bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-bold transition-all shadow-sm hover:shadow-accent-cyan/20"
      >
        &gt;_ {t("nav.launchNode")}
      </a>
    </div>

    <!-- Mobile Menu Toggle -->
    <div class="flex items-center gap-2 lg:hidden">
      <button
        onclick={() => isLangMenuOpen = !isLangMenuOpen}
        class="p-2 text-xs font-mono rounded-lg border border-white/10 text-text-secondary uppercase"
      >
        🌐 {$currentLang}
      </button>

      <button
        onclick={toggleMenu}
        class="p-2 text-text-secondary hover:text-white rounded-lg border border-white/10 cursor-pointer"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {#if isMobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          {/if}
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Dropdown Menu -->
  {#if isMobileMenuOpen}
    <div class="lg:hidden bg-bg-dark border-b border-white/10 px-6 py-6 space-y-4">
      <nav class="flex flex-col gap-4 text-xs font-mono text-text-secondary">
        <a href="#cores" onclick={toggleMenu} class="hover:text-accent-cyan">{t("nav.cores")}</a>
        <a href="#apps" onclick={toggleMenu} class="hover:text-accent-cyan">{t("nav.apps")}</a>
        <a href="#iso" onclick={toggleMenu} class="hover:text-accent-cyan">{t("nav.iso")}</a>
        <a href="#gpu-cloud" onclick={toggleMenu} class="hover:text-accent-cyan">{t("nav.gpuCloud")}</a>
        <a href="#dao" onclick={toggleMenu} class="hover:text-accent-cyan">{t("nav.dao")}</a>
      </nav>

      <div class="pt-4 border-t border-white/10 flex flex-wrap gap-2">
        {#each LANGUAGE_OPTIONS as opt}
          <button
            onclick={() => { changeLanguage(opt.code as SupportedLanguage); toggleMenu(); }}
            class="px-2.5 py-1 rounded bg-bg-surface border border-white/10 text-[10px] font-mono text-text-secondary"
            class:text-accent-cyan={$currentLang === opt.code}
            class:border-accent-cyan-40={$currentLang === opt.code}
          >
            {opt.native}
          </button>
        {/each}
      </div>

      <div class="pt-2 flex gap-2">
        <button
          onclick={() => changeTheme("dark")}
          class="px-2.5 py-1 rounded bg-bg-surface border border-white/10 text-[10px] font-mono text-text-secondary"
          class:text-accent-cyan={$currentTheme === "dark"}
        >
          🌙 Dark
        </button>
        <button
          onclick={() => changeTheme("light")}
          class="px-2.5 py-1 rounded bg-bg-surface border border-white/10 text-[10px] font-mono text-text-secondary"
          class:text-accent-cyan={$currentTheme === "light"}
        >
          ☀️ Light
        </button>
        <button
          onclick={() => changeTheme("system")}
          class="px-2.5 py-1 rounded bg-bg-surface border border-white/10 text-[10px] font-mono text-text-secondary"
          class:text-accent-cyan={$currentTheme === "system"}
        >
          💻 Auto
        </button>
      </div>
    </div>
  {/if}
</header>
