import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import decapCmsOauth from 'astro-decap-cms-oauth';

// Vercel configuration with serverless functions for CMS OAuth
export default defineConfig({
  site: process.env.SITE_URL || 'https://habitatroot.vercel.app',
  integrations: [
    tailwind(),
    sitemap(),
    decapCmsOauth() // OAuth integration works with Vercel
  ],
  output: 'server',
  adapter: vercel(),
  
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    }
  }
});
