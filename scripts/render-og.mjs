// Renders public/og/og-<locale>.png from the /og-template/<locale>/ pages.
// Usage: npm run og   (requires `npx playwright install chromium` once)
import { mkdir } from 'node:fs/promises';
import { build, preview } from 'astro';
import { chromium } from 'playwright';

const locales = ['en', 'zh', 'ja'];
const port = 4399;

process.env.KEEP_OG_PAGES = '1';
await build({ logLevel: 'warn' });
const server = await preview({ server: { port }, logLevel: 'warn' });

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
    colorScheme: 'light',
  });
  await mkdir(new URL('../public/og/', import.meta.url), { recursive: true });
  for (const locale of locales) {
    await page.goto(`http://localhost:${port}/og-template/${locale}/`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const path = new URL(`../public/og/og-${locale}.png`, import.meta.url).pathname;
    await page.screenshot({ path, clip: { x: 0, y: 0, width: 1200, height: 630 } });
    console.log(`wrote ${path}`);
  }
} finally {
  await browser.close();
  await server.stop();
}

// Rebuild without the template pages so dist/ matches a normal build.
delete process.env.KEEP_OG_PAGES;
await build({ logLevel: 'warn' });
