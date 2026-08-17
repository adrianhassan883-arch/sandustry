import { site } from '../data/site-content.js';

export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: https://${site.domain}/sitemap-index.xml\n`);
}
