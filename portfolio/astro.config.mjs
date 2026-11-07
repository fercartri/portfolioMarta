import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false, // El español no llevará prefijo (ej: /proyectos), el inglés sí (ej: /en/projects)
    }
  }
});