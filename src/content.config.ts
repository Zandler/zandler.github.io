import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const essay = (dir: string) =>
  defineCollection({
    loader: glob({ pattern: '**/*.md', base: dir }),
    schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      description: z.string().optional(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      coverImage: z.string().optional(),
      category: z.enum(['design-systems', 'architecture', 'engineering-sre']),
      author: z.string().default('Zandler Oliveira'),
      draft: z.boolean().default(false),
      language: z.enum(['en', 'pt']).default('en'),
      translationOf: z.string().optional(),
    }),
  });

export const collections = {
  blog: essay('./src/content/blog'),
  'blog-pt': essay('./src/content/pt/blog'),
};