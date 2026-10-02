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

/**
 * @fontsource declares every face with `font-display: swap`. Safari then paints
 * one frame in the fallback font on each page load, even with the font cached,
 * so text visibly jumps between pages. `block` hides that frame instead.
 * @type {import('vite').Plugin}
 */
const blockFontSwap = {
  name: 'fontsource-display-block',
  enforce: 'pre',
  transform(code, id) {
    if (!/[\\/]@fontsource(-variable)?[\\/].*\.css$/.test(id)) return;
    return { code: code.replaceAll('font-display: swap', 'font-display: block'), map: null };
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
  vite: { plugins: [blockFontSwap] },
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
