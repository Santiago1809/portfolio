import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    css: {
      devSourcemap: true, // Genera sourcemaps para CSS en modo desarrollo
    }
  }
});