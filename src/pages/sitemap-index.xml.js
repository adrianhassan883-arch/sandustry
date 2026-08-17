import { guides, site } from '../data/site-content.js';
import { absoluteUrl } from '../utils/paths.js';

const staticPages = ['/', '/guides', '/search', '/resources', '/buildings', '/mechanics', '/platform', '/community'];
const urls = [...staticPages, ...guides.map((guide) => guide.slug)];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${absoluteUrl(url)}</loc><lastmod>${site.updated}</lastmod></url>`)
    .join('\n')}\n</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
