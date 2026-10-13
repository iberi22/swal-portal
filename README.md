# SWAL Portal

Portal oficial de **SouthWest AI Labs (SWAL)** — red soberana y descentralizada de IA (Sovereign Decentralized AI Network).

## Status

[![CI](https://github.com/iberi22/swal-portal/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/iberi22/swal-portal/actions/workflows/ci.yml)

- **Sitio publicado:** GitHub Pages de la organización → `https://southwest-ai-labs.github.io`
- **Este repositorio:** solo CI (check, tests y build). No publica GitHub Pages.
- **Note:** Legal and pricing claims follow PR #9.

Sitio de posicionamiento de marca construido con **Astro 7 + Svelte 5 + Tailwind CSS 4 + Three.js** (mesh 3D). Documenta el posicionamiento de SWAL como *community deep-tech research lab* fundado por Brahyan Belalcázar, con enfoque en soberanía de datos, infraestructura descentralizada y gobernanza DAO.

## Stack

- [Astro](https://astro.build) 7 (static output)
- [Svelte](https://svelte.dev) 5
- Tailwind CSS 4 (vía `@tailwindcss/vite`)
- Three.js (mesh 3D interactivo, sprites y controles de arrastre)
- i18n: detección automática de idioma (top 10)

## Secciones del portal

- Hero
- Core Pillars (pilares del ecosistema)
- Ecosystem Showcase
- Enterprise Partner
- ISO Compliance
- Hardware & Cloud
- DAO Handover
- Terminal Demo

## Desarrollo

| Script | Descripción |
|---|---|
| `pnpm install` | Instalar dependencias |
| `pnpm dev` | Servidor local |
| `pnpm build` | Build estático a `dist/` |
| `pnpm preview` | Previsualizar el build |

## Despliegue

El sitio canónico se publica en **`https://southwest-ai-labs.github.io`** desde el repositorio de la
organización `southwest-ai-labs/southwest-ai-labs.github.io`, que tiene su propio
`.github/workflows/deploy.yml`.

Este repositorio solo ejecuta CI. El workflow duplicado `Deploy to GitHub Pages` fue eliminado:
publicaba una copia rota en `iberi22.github.io/swal-portal/` — el build no define `base`, por lo que
los assets `/_astro/*` resolvían a `iberi22.github.io/_astro/*` y devolvían 404 — y esa URL no se
referencia en ningún sitio. El dominio canónico declarado en `astro.config.mjs`, `robots.txt`,
`sitemap.xml` y `Layout.astro` es `southwest-ai-labs.github.io`, que este repositorio no puede servir.

---

© SouthWest AI Labs (SWAL)
