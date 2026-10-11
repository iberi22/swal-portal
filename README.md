# SWAL Portal

Portal oficial de **SouthWest AI Labs (SWAL)** — red soberana y descentralizada de IA (Sovereign Decentralized AI Network).

## Status

[![CI](https://github.com/iberi22/swal-portal/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/iberi22/swal-portal/actions/workflows/deploy.yml)

- **Deploy Target:** GitHub Pages (`southwest-ai-labs.github.io`)
- **Note:** Legal and pricing claims follow PR #9.

Sitio de posicionamiento de marca construido con **Astro 6 + Svelte 5 + Tailwind CSS 4 + Three.js** (mesh 3D). Documenta el posicionamiento de SWAL como *community deep-tech research lab* fundado por Brahyan Belalcázar, con enfoque en soberanía de datos, infraestructura descentralizada y gobernanza DAO.

## Stack

- [Astro](https://astro.build) 6 (static output)
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

Compilación estática vía GitHub Actions (`.github/workflows/deploy.yml`). El sitio también se publica en GitHub Pages del org (`southwest-ai-labs.github.io`).

---

© SouthWest AI Labs (SWAL)
