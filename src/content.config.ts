// Defines the "stories" collection: where the files live and what fields each must have.
// If a story is missing a field (or has a typo in one), the build stops with a clear error.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const stories = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    proof: z.array(z.string()).default([]),
  }),
});

export const collections = { stories };
