// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import decapCmsOauth from 'astro-decap-cms-oauth';

// https://astro.build/config
export default defineConfig({
  site: 'https://habitatroot.com', // Will update with actual domain
  integrations: [
    tailwind(),
    sitemap(),
    decapCmsOauth()
  ],
  output: 'static' // Static build for now, will change to server when deploying
});
