# Nazeer Micro Irrigation Agency — website

A single-page marketing site for **Nazeer Micro Irrigation Agency** (Godavari region, Andhra
Pradesh): micro irrigation materials, personally drawn system designs, and the Nazeer Automobile
Agency spares counter under the same roof.

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**. All fonts and imagery are
self-hosted, so the site deploys anywhere — nothing is fetched from a third-party CDN.

## Design system

The visual language is deliberately quiet: it should read as premium stationery, not as a brochure.

| Token | Value | Use |
| --- | --- | --- |
| `canvas` | `#fbfaf6` | the only page background |
| `panel` | `#f4f3ed` | rare inset panels |
| `ink` | `#17170f` | headings, primary text |
| `ink-soft` | `#5c5c52` | body copy |
| `ink-faint` | `#6f6f64` | tiny mono labels |
| `hairline` | `#e2e0d6` | every rule and divider |
| `moss` | `#1e5b3a` | the single green accent |

- **No shadows, gradients, glass, grain or card grids.** Separation comes from hairlines,
  whitespace and type size. `--shadow-*` is cleared from the Tailwind theme so shadows cannot
  creep back in accidentally.
- **Type:** Fraunces (editorial serif) for display, Inter for body, JetBrains Mono for the tiny
  tracked labels — all self-hosted through `@fontsource-variable/*`.
- **Rhythm:** every section opens with a hairline rule, a mono label, a section number and an
  editorial headline (`SectionHeading`).
- **Motion:** Lenis smooth scroll, one CSS line-mask reveal on the hero headline, gentle
  fade-ups (`Reveal`), soft counters (`CountUp`) and underlines that grow in on hover
  (`.link-quiet`). Everything is disabled under `prefers-reduced-motion: reduce` — including the
  masked headline, which stays visible without JavaScript.
- **Mobile-first:** laid out at 360px first. Fluid `clamp()` type, 16px inputs (no iOS zoom),
  44px minimum tap targets (`.tap`) and a sticky Call / WhatsApp / Directions bar.

## Page structure

`Hero · Story (+ counters) · Standards · The range · In the field · Design expertise ·
Savings calculator · Automobile · Why farmers call us (+ testimonials) · FAQ · Contact · Footer`

Each section is one component in `src/components`.

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

- **Testimonials** in `src/data/content.ts` are sample quotes, and the section says so on the
  page. Replace them with real customer words (with permission) and remove the placeholder note.
- The street address is intentionally generic ("Godavari region") because it is not published;
  `SITE.mapsUrl` points to the real shop location.
- Savings-calculator figures are indicative estimates, stated as such on the page.
- Phone, WhatsApp, email and opening hours all live in `SITE` in `src/data/content.ts`.
