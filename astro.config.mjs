import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://renta-de-inflables.com',
  output: 'static',
  integrations: [sitemap(), mdx()],
  build: { assets: '_assets' },
});
