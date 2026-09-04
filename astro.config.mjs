import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// Fixed dev port to avoid clashing with WorldExams (4321), gara-g (4322/4323).
export default defineConfig({
  integrations: [svelte()],
  site: 'https://southwest-ai-labs.github.io',
  output: 'static',
  server: {
    port: 4324,
    host: '0.0.0.0',
  },
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['@astrojs/svelte', 'three'],
    },
  },
});
