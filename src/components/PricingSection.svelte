<script lang="ts">
  // Precios de Xavier Cloud. Fuente: copia exacta del catálogo canónico
  // iberi22/xavier-cloud → plans/catalog.v1.json (no editar aquí: cambiar allá y copiar).
  import { t, currentLang } from "../i18n/index";
  import catalog from "../data/plans-catalog.v1.json";

  // PLACEHOLDER: buzón de la lista de espera. Debe existir antes de publicar (ver PR).
  const WAITLIST_MAILTO =
    "mailto:hola@swal.network?subject=Lista%20de%20espera%20Fundador%20-%20Xavier%20Cloud&body=Hola%2C%20quiero%20un%20cupo%20Fundador.%20Uso%20estos%20agentes%3A%20";
  const CONTACT_MAILTO = "mailto:hola@swal.network?subject=Xavier%20Empresa";
  const GITHUB_URL = "https://github.com/iberi22/xavier";

  type Plan = (typeof catalog.plans)[number];

  const fill = (s: string, vars: Record<string, string | number>) =>
    Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)), s);

  function limitsFor(plan: Plan): string[] {
    const l = plan.limits;
    const out: string[] = [];
    if (l.storage_bytes) out.push(fill(t("pricing.limit.storage"), { gb: l.storage_bytes / 1024 ** 3 }));
    if (l.devices) out.push(fill(t("pricing.limit.devices"), { n: l.devices }));
    if (l.ai_tokens_per_day) out.push(fill(t("pricing.limit.ai"), { k: l.ai_tokens_per_day / 1000 }));
    if (l.mcp_clients) out.push(fill(t("pricing.limit.mcp"), { n: l.mcp_clients }));
    if (l.seats_included && l.seats_included > 1) out.push(fill(t("pricing.limit.seats"), { n: l.seats_included }));
    return out;
  }

  let cards = $derived(
    ($currentLang,
    catalog.plans.map((plan) => ({
      plan,
      desc: fill(t(`pricing.plan.${plan.id}.desc`), { max: (plan as { max_customers?: number }).max_customers ?? 50 }),
      status: t(`pricing.status.${plan.status}`),
      limits: limitsFor(plan),
      yearly: plan.price.yearly_usd ? fill(t("pricing.perYear"), { yearly: plan.price.yearly_usd }) : "",
    })))
  );
</script>

<section id="precios" class="py-24 px-6 relative border-t border-white/5 bg-bg-dark/40">
  <div class="max-w-7xl mx-auto space-y-12">
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-xs font-mono text-accent-emerald">
        <span>{t("pricing.badge")}</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        {t("pricing.title")} <span class="text-accent-emerald">{t("pricing.titleAccent")}</span>
      </h2>
      <p class="text-text-secondary text-base md:text-lg leading-relaxed">{t("pricing.subtitle")}</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each cards as card (card.plan.id)}
        <div
          class="glass-panel p-6 space-y-4 flex flex-col"
          class:border-accent-emerald={card.plan.id === "fundador"}
          data-plan={card.plan.id}
        >
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-white">{card.plan.name}</h3>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-text-secondary uppercase">
              {card.status}
            </span>
          </div>
          <div class="font-mono">
            {#if card.plan.price.monthly_usd === null}
              <span class="text-3xl font-bold text-white">{t("pricing.custom")}</span>
            {:else}
              <span class="text-3xl font-bold text-white">{card.plan.price.monthly_usd} USD</span>
              <span class="text-sm text-text-muted">{t("pricing.perMonth")}</span>
              {#if card.yearly}<div class="text-xs text-text-muted">{card.yearly}</div>{/if}
            {/if}
          </div>
          <p class="text-sm text-text-secondary leading-relaxed">{card.desc}</p>
          {#if card.limits.length}
            <ul class="text-xs font-mono text-text-muted space-y-1">
              {#each card.limits as item}<li><span class="text-accent-emerald">✔</span> {item}</li>{/each}
            </ul>
          {/if}
          <div class="pt-2 mt-auto">
            {#if card.plan.id === "local"}
              <a href={GITHUB_URL} target="_blank" rel="noopener" class="text-xs font-mono text-accent-cyan hover:underline">{t("pricing.ctaLocal")} →</a>
            {:else if card.plan.id === "fundador"}
              <a href={WAITLIST_MAILTO} class="inline-block px-4 py-2 rounded-lg bg-accent-emerald text-bg-void text-xs font-mono font-bold">{t("pricing.ctaWaitlist")}</a>
            {:else if card.plan.id === "empresa"}
              <a href={CONTACT_MAILTO} class="text-xs font-mono text-accent-cyan hover:underline">{t("pricing.ctaContact")} →</a>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <div class="text-xs text-text-muted font-mono space-y-1 max-w-4xl">
      <p>· {t("pricing.notePayments")}</p>
      <p>· {t("pricing.noteEncryption")}</p>
      <p>· {t("pricing.noteToken")}</p>
    </div>
  </div>
</section>
