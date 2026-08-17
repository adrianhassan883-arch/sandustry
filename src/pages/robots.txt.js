import { site } from '../data/site-content.js';
import { absoluteUrl } from '../utils/paths.js';

export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${absoluteUrl('/sitemap-index.xml')}\n`);
}
