<script lang="ts">
  let isMobileMenuOpen = (false);

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-bg-void/80 backdrop-blur-xl border-b border-white/5">
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
    <nav class="hidden lg:flex items-center gap-8 text-sm font-medium text-text-secondary">
      <a href="#cores" class="hover:text-accent-cyan transition-colors">Core Pillars</a>
      <a href="#apps" class="hover:text-accent-cyan transition-colors">Ecosystem (18 Apps)</a>
      <a href="#enterprise" class="hover:text-accent-cyan transition-colors">Enterprise (tripro.cl)</a>
      <a href="#iso" class="hover:text-accent-cyan transition-colors">ISO Standards</a>
      <a href="#gpu-cloud" class="hover:text-accent-cyan transition-colors">GPU & Cloud</a>
      <a href="#dao" class="hover:text-accent-cyan transition-colors">DAO & Governance</a>
    </nav>

    <!-- Header Actions -->
    <div class="hidden md:flex items-center gap-4">
      <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-bg-surface border border-white/10 text-xs font-mono text-text-secondary">
        <span class="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
        <span>Network v1.0</span>
      </div>
      <a
        href="#terminal"
        class="px-4 py-2 rounded-xl bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-bold transition-all shadow-sm hover:shadow-accent-cyan/20"
      >
        &gt;_ Launch Node
      </a>
    </div>

    <!-- Mobile Menu Toggle -->
    <button
      onclick={toggleMenu}
      class="lg:hidden p-2 text-text-secondary hover:text-white rounded-lg border border-white/10"
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

  <!-- Mobile Dropdown Menu -->
  {#if isMobileMenuOpen}
    <div class="lg:hidden bg-bg-dark border-b border-white/10 px-6 py-6 space-y-4">
      <nav class="flex flex-col gap-4 text-sm font-medium text-text-secondary">
        <a href="#cores" onclick={toggleMenu} class="hover:text-accent-cyan">Core Pillars</a>
        <a href="#apps" onclick={toggleMenu} class="hover:text-accent-cyan">Ecosystem Apps</a>
        <a href="#enterprise" onclick={toggleMenu} class="hover:text-accent-cyan">Enterprise (tripro.cl)</a>
        <a href="#iso" onclick={toggleMenu} class="hover:text-accent-cyan">ISO Security</a>
        <a href="#gpu-cloud" onclick={toggleMenu} class="hover:text-accent-cyan">GPU & Cloud</a>
        <a href="#dao" onclick={toggleMenu} class="hover:text-accent-cyan">DAO Governance</a>
      </nav>
      <div class="pt-4 border-t border-white/10 flex justify-between items-center">
        <span class="text-xs font-mono text-text-muted">BELA Colombia & tripro.cl</span>
        <a href="#terminal" onclick={toggleMenu} class="px-3 py-1.5 rounded-lg bg-accent-cyan/20 text-accent-cyan text-xs font-mono font-bold">
          Launch Node
        </a>
      </div>
    </div>
  {/if}
</header>
