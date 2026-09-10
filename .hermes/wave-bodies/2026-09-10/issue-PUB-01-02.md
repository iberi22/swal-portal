# [PUB-02] Portal i18n parity + data + layouts + public assets

> PUB-02 batch, slots P3+P4+P5+P6. Full spec: `.hermes/wave-bodies/2026-09-10/body-pub-01-02.md` (read ALL of it before coding).
> Labels: `pub`, `wave-pub` (NO `jules` — added only after pre-dispatch verification).

## Current State (MEASURABLE)

- `main` HEAD `82df6e2`, `src/i18n/` (3 files), `src/data/ecosystem.ts` (1 file), `src/layouts/` + `public/` exist.
- Red line: NO client identities, NO internal timelines, NO technical leaks.

## Objective

Translation parity for every user-facing string (no hardcoded copy in components) + public-safe dataset + layout/metadata (title/description/OG) + public assets only.

## File Islands (ONLY touch these)

- `src/i18n/`
- `src/data/`
- `src/layouts/`
- `public/`

## Acceptance Criteria (VERIFIABLE BY COMMAND)

- [ ] `node ./node_modules/astro/bin/astro.mjs build` — 0 errors
- [ ] i18n parity: new user-facing strings have keys in `translations.ts` (report grep counts)
- [ ] `src/data/ecosystem.ts` — no NDA names, no internal URLs
- [ ] `public/` — favicons/og-images/robots extras only, no internal docs/screenshots
- [ ] `git status --porcelain` — ONLY island files
- [ ] PR contains >= 1 file

## DO NOT touch

`src/components/`, `src/pages/`, `dist/`, `.env*`.
Web rule: delivery needs Playwright desktop+mobile captures + 0-error console (maintainer verifies).
