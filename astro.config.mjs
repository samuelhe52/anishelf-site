// @ts-check
import { rm } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

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
  markdown: {
    // `## Heading {#id}` gives doc headings ids that match across locales, so
    // links like /zh/guide/#api-key keep working when the heading text changes.
    processor: satteri({ features: { headingAttributes: true } }),
  },
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
