import { strict as assert } from 'node:assert';
const { guides, navGroups, sources } = await import('../src/data/site-content.js');
const { richContent } = await import('../src/data/rich-content.js');
const { pageEnhancements } = await import('../src/data/page-enhancements.js');

assert.ok(Array.isArray(guides), 'guides must be an array');
assert.ok(Array.isArray(navGroups), 'navGroups must be an array');
assert.ok(Array.isArray(sources), 'sources must be an array');

assert.ok(guides.length >= 18, `expected at least 18 guides, found ${guides.length}`);
assert.ok(sources.length >= 8, `expected at least 8 source entries, found ${sources.length}`);

const slugs = new Set();
for (const guide of guides) {
  assert.ok(guide.slug?.startsWith('/'), `${guide.title} must use an absolute slug`);
  assert.ok(!slugs.has(guide.slug), `duplicate slug: ${guide.slug}`);
  slugs.add(guide.slug);
  assert.ok(guide.title, `${guide.slug} missing title`);
  assert.ok(guide.category, `${guide.slug} missing category`);
  assert.ok(guide.shortAnswer, `${guide.slug} missing short answer`);
  assert.ok(guide.confidence, `${guide.slug} missing confidence label`);
  assert.ok(['High', 'Medium', 'Needs verification'].includes(guide.confidence), `${guide.slug} has invalid confidence`);
  assert.ok(Array.isArray(guide.keywords) && guide.keywords.length > 0, `${guide.slug} missing keywords`);
  assert.ok(Array.isArray(guide.sections) && guide.sections.length >= 4, `${guide.slug} needs at least 4 sections`);
  assert.ok(Array.isArray(guide.related) && guide.related.length > 0, `${guide.slug} needs related links`);
  assert.ok(Array.isArray(guide.faq) && guide.faq.length >= 2, `${guide.slug} needs at least 2 FAQ items`);
  const rich = richContent[guide.slug];
  assert.ok(rich, `${guide.slug} missing rich content`);
  const richBlockCount = (rich.quickFacts?.length ?? 0) + (rich.steps?.length ?? 0) + (rich.tables?.length ?? 0) + (rich.dos?.length ?? 0) + (rich.donts?.length ?? 0);
  assert.ok(richBlockCount >= 8, `${guide.slug} needs deeper content blocks, found ${richBlockCount}`);
  const enhancement = pageEnhancements[guide.slug];
  assert.ok(enhancement, `${guide.slug} missing page enhancement`);
  assert.ok(enhancement.diagram?.nodes?.length >= 4, `${guide.slug} needs a visual flow with at least 4 nodes`);
  assert.ok(enhancement.deepSections?.length >= 1, `${guide.slug} needs deep article sections`);
}

const requiredSlugs = [
  '/wiki',
  '/resources/water',
  '/resources/lava',
  '/buildings/kinetic-slag-press',
  '/mechanics/how-to-move-lava',
  '/platform/game-pass',
  '/mods',
  '/maps',
];

for (const slug of requiredSlugs) {
  assert.ok(slugs.has(slug), `missing required guide slug: ${slug}`);
}

const uncertain = guides.filter((guide) => guide.confidence === 'Needs verification' || guide.notes?.some((note) => /verify|testing|game/i.test(note)));
assert.ok(uncertain.length >= 3, 'expected uncertain mechanics to be marked for verification');

console.log(`Validated ${guides.length} guides, ${navGroups.length} nav groups, ${sources.length} sources.`);
