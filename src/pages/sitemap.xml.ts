import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const site = 'https://southwest-ai-labs.github.io';
  const routes = [
    { loc: `${site}/`, changefreq: 'weekly', priority: '1.0' },
  ];
  const urls = routes.map(r => `  <url>\n    <loc>${r.loc}</loc>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
