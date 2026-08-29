<script lang="ts">
  import { t } from "../i18n/index";
</script>

<footer class="py-16 px-6 border-t border-white/10 bg-bg-void text-text-secondary text-xs font-mono">
  <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
    <!-- Brand Info -->
    <div class="space-y-4 md:col-span-2">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-accent-cyan/20 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan font-bold">
          SW
        </div>
        <span class="text-base font-bold text-white tracking-wider">SouthWest AI Labs (SWAL)</span>
      </div>
      <p class="text-text-muted leading-relaxed max-w-md">
        {t("footer.desc")}
      </p>
      <div class="text-[11px] text-text-muted">
        {t("footer.founder")}
      </div>
    </div>

    <!-- Quick Links -->
    <div class="space-y-3">
      <div class="font-bold text-white uppercase tracking-wider text-xs">{t("footer.linksTitle")}</div>
      <ul class="space-y-2 text-text-muted">
        <li><a href="https://saberparatodos.space" target="_blank" class="hover:text-accent-cyan transition-colors">SaberParaTodos</a></li>
        <li><a href="https://estante-inventario.vercel.app" target="_blank" class="hover:text-accent-cyan transition-colors">Shelf POS</a></li>
        <li><a href="https://github.com/iberi22/xavier" target="_blank" class="hover:text-accent-cyan transition-colors">Xavier Memory Core</a></li>
        <li><a href="https://github.com/iberi22/edge-mesh" target="_blank" class="hover:text-accent-cyan transition-colors">Edge Mesh Protocol</a></li>
      </ul>
    </div>

    <!-- Governance & Standards -->
    <div class="space-y-3">
      <div class="font-bold text-white uppercase tracking-wider text-xs">{t("footer.securityTitle")}</div>
      <ul class="space-y-2 text-text-muted">
        <li><span class="text-accent-emerald">✔</span> ISO 27001:2022 (ISMS)</li>
        <li><span class="text-accent-emerald">✔</span> ISO 27701:2019 (PIMS)</li>
        <li><span class="text-accent-emerald">✔</span> ISO 42001:2023 (AI AIMS)</li>
        <li><span class="text-accent-cyan">✔</span> P2P Tor / Onion Transport</li>
        <li><span class="text-purple-400">✔</span> 100k Node DAO Handover</li>
      </ul>
    </div>
  </div>

  <div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-text-muted text-[11px]">
    <div>
      {t("footer.copyright")}
    </div>
    <div class="flex items-center gap-6">
      <a href="https://github.com/southwest-ai-labs" target="_blank" class="hover:text-white">GitHub Org</a>
      <a href="https://github.com/iberi22" target="_blank" class="hover:text-white">@iberi22</a>
      <a href="https://t.me/BeRi0n3" target="_blank" class="hover:text-white">Telegram</a>
    </div>
  </div>
</footer>
