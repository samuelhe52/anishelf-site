// @ts-check
import { rm } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * The /og/ pages exist only so scripts/render-og.mjs can screenshot them.
 * @type {import('astro').AstroIntegration}
 */
const dropOgPages = {
  name: 'drop-og-pages',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      if (process.env.KEEP_OG_PAGES) return;
      await rm(new URL('og/', dir), { recursive: true, force: true });
    },
  },
};

export default defineConfig({
  site: 'https://anishelf.konakona.dev',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/og/'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh-Hans', ja: 'ja' },
      },
    }),
    dropOgPages,
  ],
});
