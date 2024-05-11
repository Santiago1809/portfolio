import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    css: {
      devSourcemap: true // Genera sourcemaps para CSS en modo desarrollo
    }
  },
  output: "server",
  adapter: vercel()
});