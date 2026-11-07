import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    tagline: z.string().max(140),
    type: z.enum(['personal', 'collaborative']), 
    year: z.number(),
    location: z.string(),
    surfaceArea: z.string().optional(),
    collaboration: z.object({
      studio: z.string(),
      role: z.string(),
    }).optional(),
    coverImage: image(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects: projectsCollection,
};