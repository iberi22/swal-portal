# [PUB-01] Portal sections + pages NDA-safe hardening

> PUB-01 batch, slots P1+P2. Full spec: `.hermes/wave-bodies/2026-09-10/body-pub-01-02.md` (read ALL of it before coding).
> Labels: `pub`, `wave-pub` (NO `jules` — added only after pre-dispatch verification).

## Current State (MEASURABLE)

- `main` HEAD `82df6e2` (NDA redact), 14 `.svelte` sections in `src/components/`, 3 files in `src/pages/`.
- Red line: NO client identities, NO internal timelines, NO technical leaks.

## Objective

Public-safe section hardening (Enterprise/DAO/ISO sections NDA-clean, a11y contrast >= 4.5:1) + `index.astro` composition + robots/sitemap correctness. Mirror prop style of existing sections.

## File Islands (ONLY touch these)

- `src/components/`
- `src/pages/`

## Acceptance Criteria (VERIFIABLE BY COMMAND)

- [ ] `node ./node_modules/astro/bin/astro.mjs build` — 0 errors
- [ ] NDA audit: `grep -rniE "confidential|internal-only" src/ | wc -l` — 0
- [ ] No internal URLs: `grep -rniE "localhost|192\.168|staging\." src/ | wc -l` — 0 (except `// public-docs-example` comments)
- [ ] `git status --porcelain` — ONLY island files
- [ ] PR contains >= 1 file

## DO NOT touch

`src/data/`, `src/i18n/`, `src/layouts/`, `public/`, `dist/`, `.env*`.
Web rule: delivery needs Playwright desktop+mobile captures + 0-error console (maintainer verifies).
