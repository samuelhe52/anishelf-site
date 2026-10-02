import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Long-form pages, one Markdown file per locale: `docs/<locale>/<slug>.md`. */
const docs = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { docs };
