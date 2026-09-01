import type { APIContext } from 'astro';
export async function GET() {
  return new Response(`User-agent: *
Allow: /

Sitemap: https://southwest-ai-labs.github.io/sitemap.xml
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
