# anishelf-site

Marketing site for [AniShelf](https://github.com/samuelhe52/AniShelf), served at
<https://anishelf.konakona.dev>. It's a static [Astro](https://astro.build) site with
English (`/`), Simplified Chinese (`/zh/`), and Japanese (`/ja/`) pages.

## Commands

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
npm run check     # type-check .astro and .ts files
npm run og        # regenerate public/og/og-<locale>.png (needs `npx playwright install chromium`)
```

## Layout

- `src/i18n.ts` holds all copy and site-wide links. Every locale implements the
  same `Strings` type, so a missing translation fails `npm run check`.
- `src/components/Landing.astro` is the page. `src/pages/{,zh/,ja/}index.astro`
  render it per locale, and only the CJK pages load their CJK serif font.
- `src/pages/og-template/[lang]/` is the 1200×630 social preview template.
  `npm run og` screenshots it into `public/og/`. Normal builds delete the
  template pages from `dist/`.
- `src/assets/` holds the source images. Astro generates the AVIF/WebP/JPEG
  variants at build time.

## Copy conventions

- CJK headings mark phrase boundaries with `|`, for example `'新一集，|不再错过。'`.
  `<Phrases>` renders each phrase as an unbreakable inline block, so lines
  never break mid-word. Safari has no `word-break: auto-phrase`. Use `plain()`
  wherever a heading becomes plain text, such as ARIA labels.
- Feature names and statuses follow the app's own localizations in
  `MyAnimeList/Resources/Localizable.xcstrings`.
- The reminder mockup copies the app's real notification format
  (`S01E08 airs in 15 minutes.`).

## Assets

| Asset | Source |
| --- | --- |
| Screenshots (light, and dark in `dark/`) | `AniShelf/.app-store-assets/screenshots/{ios,ipad}/` |
| iPhone 16 Pro hardware render (Black Titanium) | Pixelmator Pro export. Its display outline is the screen mask in `Phone.astro` |
| 13-inch iPad Pro (M4) hardware render | Pixelmator Pro export, turned to landscape. Its display outline, rotated to match, is the screen mask in `Tablet.astro` |
| iOS status bar icons (signal, Wi-Fi, battery) | Cropped from a Pixelmator Pro status bar export for the reminder Lock Screen |
| App icons (light and dark) | `AniShelf/MyAnimeList/Resources/Assets.xcassets/AppIcon.appiconset/` |
| App Store badges | Apple Marketing Tools (`toolbox.marketingtools.apple.com`), localized for en-us, zh-cn, and ja-jp |
| TMDB logo | TMDB's [logos and attribution](https://www.themoviedb.org/about/logos-attribution) page |

When the app screenshots change, copy them over the files in
`src/assets/screens/` (keep the file names, and put the dark versions in each
`dark/` folder) and run `npm run og`. `src/assets/screens.ts` pairs each light
screenshot with its dark twin, which pages show when the visitor prefers dark
mode.

## Deployment

`npm run build` outputs a fully static `dist/`. Serve it with:

- `/_astro/*`: content-hashed, so cache it as `public, max-age=31536000, immutable`.
- HTML, `/og/*`, and favicons: short cache or `no-cache`.
- Directory index (`/zh/` → `/zh/index.html`) and the generated `404.html` page.

See [DEPLOY.md](DEPLOY.md) for origin setup, GitHub Actions
secrets, manual deployment, and rollback. Pushes and PRs run checks; publication
requires explicitly running the Deploy workflow on `main`.
