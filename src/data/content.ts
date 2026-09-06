import type { CollectionEntry } from 'astro:content';

export type EssayCategory = 'design-systems' | 'architecture' | 'engineering-sre';

export const categories: { id: EssayCategory; label: string; index: string; blurb: string }[] = [
  {
    id: 'design-systems',
    label: 'Design Systems',
    index: '01',
    blurb: 'Tokens, components, visual language and the process of designing with systems.',
  },
  {
    id: 'architecture',
    label: 'Architecture',
    index: '02',
    blurb: 'System architecture, patterns and the trade-offs behind technical decisions.',
  },
  {
    id: 'engineering-sre',
    label: 'Engineering / SRE',
    index: '03',
    blurb: 'Platform, DevOps, observability and engineering culture.',
  },
];

export const categoryById: Record<EssayCategory, (typeof categories)[number]> = Object.fromEntries(
  categories.map((c) => [c.id, c]),
) as Record<EssayCategory, (typeof categories)[number]>;

export function categoryOf(post: CollectionEntry<'blog' | 'blog-pt'>) {
  return categoryById[post.data.category];
}

export function readingTimeOf(post: CollectionEntry<'blog' | 'blog-pt'>) {
  return Math.max(1, Math.ceil((post.body?.split(/\s+/).length ?? 0) / 220));
}