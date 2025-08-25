import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import decapCmsOauth from 'astro-decap-cms-oauth';

// Netlify configuration with server-side rendering for CMS OAuth
export default defineConfig({
  site: process.env.SITE_URL || 'https://habitatroot.netlify.app',
  integrations: [
    tailwind(),
    sitemap(),
    decapCmsOauth() // OAuth integration works with Netlify
  ],
  output: 'server',
  adapter: netlify(),
  
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
