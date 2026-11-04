import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    // Keystatic omits empty optional fields from frontmatter, so default them here.
    description: z.string().optional(),
    showInNav: z.boolean().default(true),
    navOrder: z.number().default(0),
  }),
});

export const collections = { posts, pages };