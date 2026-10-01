// @ts-check
import { rm } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * The /og-template/ pages exist only so scripts/render-og.mjs can screenshot
 * them. Generated images live in public/og/ and are unaffected.
 * @type {import('astro').AstroIntegration}
 */
const dropOgPages = {
  name: 'drop-og-pages',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      if (process.env.KEEP_OG_PAGES) return;
      await rm(new URL('og-template/', dir), { recursive: true, force: true });
    },
  },
};

export default defineConfig({
  site: 'https://anishelf.konakona.dev',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/og-template/') && !page.endsWith('/404/'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh-Hans', ja: 'ja' },
      },
    }),
    dropOgPages,
  ],
});
