# Nazeer Micro Irrigation Agency — website

A single-page marketing site for **Nazeer Micro Irrigation Agency** (Godavari region, Andhra
Pradesh): micro irrigation materials, personally drawn system designs, and the Nazeer Automobile
Agency spares counter under the same roof.

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**. All fonts and imagery are
self-hosted, so the site deploys anywhere — nothing is fetched from a third-party CDN.

## Art direction: "Irrigation Almanac"

The page is built as a printed almanac from a firm twenty years in the field.

1. **Field photography does the talking.** The eight photographs are numbered plates, graded with
   one restrained CSS filter so they read as a single shoot, and referenced from anywhere on the
   page (`PLATE 03`).
2. **One editorial serif, two scales.** Fraunces sets statement type — used exactly twice on the
   page (the cover headline and the epigraph) — and the measured section headlines. Everything
   else is small.
3. **Tiny tracked mono carries the metadata.** Plate captions, section numbers, units, ledger
   columns: JetBrains Mono at 11px, 0.2em tracking.
4. **One accent, three jobs.** Moss marks the active entry in the index rail, the single most
   important figure on the page (the 60% water saved), and the one CTA band. Nowhere else.
5. **Rhythm, not repetition.** Cover plate → tight text column → tonal panel → night band →
   specimen table → epigraph → ledger → moss band, in 5/7, 4/8 and 7/5 splits rather than 50/50.

## Design system

| Token | Value | Use |
| --- | --- | --- |
| `canvas` | `#FBF9F4` | the page background |
| `panel` | `#F3F1E9` | tonal bands and insets |
| `ink` | `#14140F` | type and rules |
| `ink-soft` / `ink-faint` | `#55554B` / `#6F6F64` | body copy / tiny mono labels |
| `night` | `#0F1511` | the one dark band (§03) |
| `moss` | `#1E5B3A` | the single accent |
| `hairline` | `#E3E0D5` | every rule and divider |

- **Banned and enforced:** no shadows (`--shadow-*` is cleared from the theme), no glass, no
  decorative gradients, no radii, no card grids, no stock icon sets, no grain. The seven hairline
  glyphs in `src/components/icons.tsx` are the whole icon set.
- **Tone bands** (`.band-panel`, `.band-night`, `.band-moss`) re-declare the ink and hairline
  custom properties locally, so every utility inside them follows the tone — including contrast:
  `.band-panel` darkens `ink-faint` to `#5E5E54` to stay above 4.5:1 on the panel.
- **Type:** Fraunces (display), Inter (body), JetBrains Mono (labels) — all self-hosted through
  `@fontsource-variable/*`. Statement type is `clamp(2.25rem, 10.2vw, 6.6rem)`.
- **Grid:** `.shell` (max 72rem) and `.g12` (4 columns on a phone, 12 from 768px; children default
  to full width).

## Page structure

```
Cover · plate 01 (hero)
01 Story — tight text column + measured figures
02 Standards — tonal panel, ruled specimen block
03 In the field — the night band, plate mosaic
04 The range — specimen table + fixed crossfading plate
   Epigraph — statement type between two plates
05 Design expertise — 4/8, plate left
06 The water — draggable flood/drip wipe + hairline bars
07 Savings — the ledger
   Moss band — book a free field visit
08 Automobile — wide plate, narrow list
09 Why farmers call us — reasons + placeholder testimonials
10 Visit — contact, enquiry form, FAQ
```

`src/components/IndexRail.tsx` prints the numbers 01–10 in the left gutter from 1280px up, with a
moss rule easing out on the active section.

## Motion

Quiet, slow, once-only — the living almanac: Lenis smooth scroll; the CSS line-mask reveal on the
cover headline; a 14px fade-up on first view; the cover photograph settling from 1.04 → 1 and then
breathing (26s, the one subtle living move the cover is allowed); section rules drawing themselves
in left-to-right (`.rule-draw`); plates settling from 1.06 → 1 as they are reached (`.plate-zoom`);
the epigraph rising word by word (`.word-rise`); counters; the link-underline wipe; the index rule
easing in width; the catalogue plate crossfade (300ms); a 1px reading-progress hairline under the
sticky bar; and two tactile details — button arrows that walk on hover and hanging numbers that
blush moss on their row.

Everything is transform-only (zero layout shift) and once-only.

- `Reveal` is a hand-rolled IntersectionObserver plus one CSS transition — no motion library ships
  to the browser. The resting state lives behind `[data-reveal]`, which a `<noscript>` rule in the
  layout retires, so nothing is ever invisible without JavaScript.
- `prefers-reduced-motion: reduce` disables all of it, with the cover headline simply printed.

## Performance notes

- `priority` on the cover photograph only; every other image is lazy with an explicit `sizes`.
- First-load JS is ~124 kB (no animation library, seven inline SVG glyphs).
- Fonts are `font-display: swap` with metric-similar fallbacks; every image frame has an
  `aspect-ratio`, so font swaps and image loads cannot shift the page.

## Mobile & accessibility

- Laid out from 360px: fluid `clamp()` type, 16px inputs (no iOS zoom), 44px minimum targets
  (`.tap`), `env(safe-area-inset-bottom)` on the sticky Call / WhatsApp / Directions bar.
- Body contrast ≥ 4.5:1 and large text ≥ 3:1 on every tone band; visible focus rings that follow
  the band tone; skip link; FAQ on native `<details>`; decorative plates carry `alt=""`.

## Search indexing

- `public/googleff76cce7ae2bb6e7.html` is the Google Search Console verification file. It **must
  live in `public/`** — files kept at the repository root are never served by Next.js, so the
  verification request returns a 404. The file's bytes must stay exactly as Google issues them.
- `/robots.txt` and `/sitemap.xml` are generated from `src/app/robots.ts` and `src/app/sitemap.ts`,
  both driven by `SITE.url` in `src/data/content.ts`.
- **Set `NEXT_PUBLIC_SITE_URL`** in the deploy environment to the live domain. It is the single
  source of truth for canonical URLs, Open Graph URLs, `robots.txt` and `sitemap.xml`; the
  fallback is the Vercel project URL.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
```

## Placeholders to personalise

- **Testimonials** in `src/data/content.ts` are sample quotes, and the section says so on the page.
  Replace them with real customer words (with permission) and remove the placeholder note.
- The street address is intentionally generic ("Godavari region") because it is not published;
  `SITE.mapsUrl` points to the real shop location.
- Savings-calculator figures are indicative estimates, stated as such on the page.
- `STUDIO_CREDIT` in `src/data/content.ts` is a one-line footer credit, off by default. Set
  `enabled: true` with the studio `name` and `href` to switch it on.
- Phone, WhatsApp, email and opening hours all live in `SITE` in `src/data/content.ts`.
