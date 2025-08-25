// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://habitatroot.com',
  integrations: [
    tailwind(),
    sitemap()
    // Note: decapCmsOauth integration removed for static builds
    // For production with CMS, use a server adapter like @astrojs/netlify
  ],
  output: 'static', // Static build for GitHub Pages and similar hosts

  // Vite configuration for better build optimization
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
