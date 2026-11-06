import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    tagline: z.string().max(140),
    // Diferenciamos los 2 tipos de proyectos que nos pediste:
    type: z.enum(['personal', 'collaborative']), 
    year: z.number(),
    location: z.string(),
    surfaceArea: z.string().optional(), // Ej: "350 m²"
    
    // Si es colaboración, exigimos o permitimos indicar el estudio y su rol
    collaboration: z.object({
      studio: z.string(),
      role: z.string(),
    }).optional(),

    // Optimización automática de imágenes con Astro Image API
    coverImage: image(),
    featured: z.boolean().default(false), // Para saber si sale en la Home
    order: z.number().default(0), // Para ordenar manualmente la retícula
  }),
});

export const collections = {
  projects: projectsCollection,
};