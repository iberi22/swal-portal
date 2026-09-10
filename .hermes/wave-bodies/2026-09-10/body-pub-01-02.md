# [PUB-01/PUB-02] SWAL Portal public release — NDA-safe content, i18n, pages, data, layouts, public assets

> PUB-01/PUB-02 — [Polish/Public].
> Labels: `pub`, `wave-pub` (NO `jules` label — add only after pre-dispatch verification, per Platinum Rule).

---

## Current State (MEASURABLE)

- Ledger: NONE — no `.gitcore/features.json`, no `features.json` (verified with `ls .gitcore/features.json features.json` → both missing). Tracking for this batch = this body + PR checklist.
- Branch: `main` (verified with `git branch --show-current`); HEAD `82df6e2 fix(portal): redact NDA client identity from enterprise case (PUB-01)` (verified with `git log --oneline -3`; prior `b513964` redeploy, `4b98878` external-audience streamline: internal timeline hidden, technical leaks cleaned).
- Package (verified with `cat package.json`): `swal-portal@1.0.0`, `private`, `AGPL-3.0-only`; scripts `dev/build/preview/astro`; deps `astro ^7.2.10, svelte ^5.56.10, tailwindcss ^4.3.3, three ^0.170.0`.
- `src/` (verified with `ls src/`): `components, data, i18n, layouts, pages, styles` + `public/` at root.
- Components (14, verified with `ls src/components/`): `CorePillars, DaoHandoverSection, EcosystemShowcase, EnterprisePartnerSection, Footer, HardwareAndCloudSection, HeroSection, IsoComplianceSection, Navbar, NetworkCanvas, SplitFlapText, TerminalDemo, TimelineSection` (all `.svelte`).
- Pages (verified with `ls src/pages/`): `index.astro, robots.txt.ts, sitemap.xml.ts` (3 files).
- i18n (verified with `ls src/i18n/`): `index.svelte.ts, index.ts, translations.ts` (3 files).
- Data (verified with `ls src/data/`): `ecosystem.ts` (1 file).
- Dirty state (verified with `git status --porcelain`): `M package.json`, `?? LICENSE`.
- Red line (from HEAD history): NO client identities, NO internal timelines, NO technical leaks — every PUB change is NDA-audited.

## Desired State (DELTA)

- **Slot P1 (PUB-01)**: `src/components/` — public-safe section hardening (Enterprise/DAO/ISO sections NDA-clean, a11y contrast >= 4.5:1).
- **Slot P2 (PUB-01)**: `src/pages/` — `index.astro` composition + `robots.txt.ts`/`sitemap.xml.ts` correctness.
- **Slot P3 (PUB-02)**: `src/i18n/` — translation parity for every user-facing string added in P1/P2 (no hardcoded strings in components).
- **Slot P4 (PUB-02)**: `src/data/` — `ecosystem.ts` public-safe dataset (no NDA names, no internal URLs).
- **Slot P5 (PUB-02)**: `src/layouts/` — layout/metadata hardening (title/description/OG, no leak headers).
- **Slot P6 (PUB-02)**: `public/` — public assets only (favicons/og-images/robots extras; no internal docs/screenshots).

## 🌐 Web Research Required

**MANDATORY — 4-6 queries. The agent MUST research before implementing.**

1. search: "Astro 7 sitemap robots.txt.ts integration 2026"
2. search: "Svelte 5 i18n typesafe translations pattern 2026"
3. search: "WCAG 2.2 AA contrast 4.5:1 Svelte Tailwind 2026"
4. search: "Open Graph meta tags Astro layout 2026"

## 🔬 Agent Session Prompt

"Before implementing, please:
1. Research the queries above.
2. Read and understand:
   - `src/pages/index.astro` — note section composition order
   - `src/i18n/translations.ts` + `index.ts` — note key structure before adding keys
   - `src/data/ecosystem.ts` — note the public-safe shape (what fields exist)
   - One section component (e.g. `EnterprisePartnerSection.svelte`) — note NDA-safe tone + prop patterns
3. Run `ls` on your slot paths FIRST.
4. Document your findings in the issue before writing any code."

## Existing Code Patterns (MUST follow these)

- Sections → `.svelte` components in `src/components/`, composed by `src/pages/index.astro` (mirror prop style of existing sections).
- User-facing strings → `src/i18n/translations.ts` keys consumed via `src/i18n/index*.ts` (never hardcoded copy in components).
- Public dataset → `src/data/ecosystem.ts` shape (extend fields, never add identity/leak fields).
- Build: `node ./node_modules/astro/bin/astro.mjs build` (repo has no test runner — build + grep audits are the gates).

## Acceptance Criteria (VERIFIABLE BY COMMAND)

- [ ] `ls <slot-path>` — path exists (or nearest match via `find`, recorded in Notes)
- [ ] `node ./node_modules/astro/bin/astro.mjs build` — 0 errors
- [ ] NDA audit: `grep -rniE "<CLIENT_NAME>|confidential|internal-only|nd[a]?[_-]?client" src/ public/ | wc -l` — 0 (maintainer supplies the real redacted-name pattern at dispatch; default pattern above)
- [ ] No internal URLs: `grep -rniE "localhost|192\.168|10\.|internal\.|staging\." src/ | wc -l` — 0 (excluding code comments explicitly marked `// public-docs-example`)
- [ ] i18n parity: every new user-facing string has a key — `grep -rn ">[A-Z][a-z].*</" src/components/<touched> | wc -l` — reported, and matching keys exist in `translations.ts`
- [ ] `git status --porcelain` — ONLY slot-island files
- [ ] `gh pr view <NUM> --json files --jq '.files | length'` — >= 1
- [ ] `git show HEAD --name-only | grep -cE "src/|public/"` — >= 1 (real source)

## Files to Modify

| File | Current State | Change | Risk |
|------|--------------|--------|------|
| Slot P1 `src/components/` | 14 `.svelte` sections | NDA-safe hardening + a11y | MED |
| Slot P2 `src/pages/` | 3 files | Composition + robots/sitemap | LOW |
| Slot P3 `src/i18n/` | 3 files | Key parity, no hardcoded copy | LOW |
| Slot P4 `src/data/` | `ecosystem.ts` | Public-safe dataset | LOW |
| Slot P5 `src/layouts/` | Exists | Metadata/OG hardening | LOW |
| Slot P6 `public/` | Exists | Public assets only | LOW |

## File Islands (explicit, machine-verified)

```island-micro
repo: portal
batch: pub-01-02
slot: P1-components
paths:
  - src/components/
```

```island-micro
repo: portal
batch: pub-01-02
slot: P2-pages
paths:
  - src/pages/
```

```island-micro
repo: portal
batch: pub-01-02
slot: P3-i18n
paths:
  - src/i18n/
```

```island-micro
repo: portal
batch: pub-01-02
slot: P4-data
paths:
  - src/data/
```

```island-micro
repo: portal
batch: pub-01-02
slot: P5-layouts
paths:
  - src/layouts/
```

```island-micro
repo: portal
batch: pub-01-02
slot: P6-public
paths:
  - public/
```

## DO NOT touch (Anti-Regression)

- `.env*` — never read, never commit (nothing in this batch needs secrets)
- `src/styles/` — outside this batch (no global style refactors in a PUB wave)
- `dist/` — build output, never commit
- `node_modules/` — never commit
- `astro.config.mjs`, `tsconfig.json`, `package.json` deps — no config/toolchain changes in this batch (note: `M package.json` + `?? LICENSE` pre-exist — do NOT bundle unrelated hunks)
- Internal timelines / client identities / technical internals — NEVER (re)introduce (red line from `82df6e2`/`4b98878`)

## Anti-Hallucination Guard ⚠️

1. **READ before write**: read each target file COMPLETELY before modifying.
2. **LS before path**: `ls <slot-path>` FIRST; `find` nearest match if missing; record in Notes.
3. **NDA-first**: every added string/asset is guilty until proven public — run the NDA greps BEFORE committing.
4. **No hardcoded copy**: user-facing text without an i18n key is a REJECT for P1/P2 (P3 owns the keys; coordinate key names in issue comments).
5. **No toolchain drift**: do not upgrade astro/svelte/tailwind or add deps to fix a content problem.
6. **Commit honesty + slot confinement**: message matches `git diff --stat HEAD`; only island files in `git status --porcelain`.
7. **Belal default rule**: reasonable default + Notes entry; ask ONLY for blocking irreversible calls.

## PR Delivery Requirements (ANTI-EMPTY-PR)

- [ ] `git status --porcelain` non-empty BEFORE opening the PR (absolute paths `src/...`, `public/...`)
- [ ] `git diff --stat HEAD` NOT empty; PR contains >= 1 file
- [ ] PR body pastes: build output tail + NDA-grep counts (all 0)
- [ ] Preview/server screenshot or `curl` of the built page for visual slots (P1/P2/P5)
- [ ] IF blocked: comment the blocker on the issue, do NOT open an empty PR

## Verification

```bash
# Reality check
ls src/components/ src/pages/ src/i18n/ src/data/ src/layouts/ public/
# Build gate (no test runner in this repo)
node ./node_modules/astro/bin/astro.mjs build 2>&1 | tail -5
# NDA + leak audits (maintainer confirms redacted-name pattern at dispatch)
grep -rniE "confidential|internal-only" src/ public/ | wc -l   # expect 0
grep -rniE "localhost|192\.168|staging\." src/ | wc -l          # expect 0
# Scope
git status --porcelain
git diff --stat HEAD
```

## Dependencies & Merge Order

- **Depends on:** P3 (i18n keys) should land before/with P1 copy changes — coordinate key names in issue comments; islands stay disjoint
- **Parallel with:** all slots (disjoint islands)
- **Merge order within wave:** P4 (data) → P1 (components) → P3 (i18n) → P2 (pages) → P5 (layouts) → P6 (public assets last)
- **Expected effort:** Small (P2/P4/P5/P6) / Medium (P1/P3)

## Failure Recovery

| If this happens | Action |
|----------------|--------|
| `astro build` fails | Fix, do NOT commit broken code |
| NDA grep hits | Remove/redact the string, re-run greps, note the file:line in the PR |
| Missing i18n key at build | Add key in P3 pattern (coordinate if P3 slot is parallel-open) |
| Slot subpath missing | `find` nearest match, Notes entry, continue |
| Conflict with parallel slot | Rebase + re-verify (should not happen: disjoint islands) |

## Notes / Assumptions

- Default: no `features.json` in this repo — done = build green + audits 0 + PR merged; reconciliaton = PR checklist paste.
- Default: the exact redacted client-name pattern is confirmed at dispatch; the generic NDA greps above are the floor, not the ceiling.
- Note: `M package.json` + `?? LICENSE` pre-exist in working tree — PUB slots must NOT sweep unrelated hunks into their PRs.
