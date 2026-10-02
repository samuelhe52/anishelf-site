# anishelf-site agent notes

See `README.md` for commands, layout, and copy conventions. These rules come
from the maintainer and aren't obvious from the code:

- Do not deploy. Hosting (`anishelf.konakona.dev`, Cloudflare DNS, VPS) is
  handled separately, and only when the maintainer asks.
- Keep the bookshelf visuals (spine navigation, petals, sky), but don't lean on
  the word "shelf", 书架, or 本棚 in copy. Use library, collection, 资料库, 收藏,
  ライブラリ, or コレクション instead.
- Never mention the maintainer's location.
- AniShelf runs on iPhone, iPad, and Apple silicon Macs (as the iPad app).
  The Japanese-locale screenshots are used for every language on purpose.
- Keep all three locales in sync. Edit copy in `src/i18n.ts`, and keep the
  `|` phrase markers in CJK headings. The guide, support, and privacy pages live
  in `src/content/docs/<locale>/`. Follow the Docs section of `README.md`.
- After changing hero copy or screenshots, run `npm run og` and commit the
  regenerated `public/og/` images.
- Before finishing, run `npm run check` and `npm run build`. Visually check
  English, Chinese, and Japanese pages in light and dark mode, on desktop and
  at a 390px width.
- Keep text at WCAG AA contrast. Light-mode `--ink-faint` and `--apricot-deep`
  were tuned for that, so recheck if you change them.
- Commits use conventional commits: `<type>: <Imperative subject>`.
