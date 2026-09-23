# Shop-web — Nazeer Micro Irrigation Agency

A redesigned marketing website for **Nazeer Micro Irrigation Agency** (Godavari region),
replacing the earlier v0-generated site at `v0-nazeer-micro-irrigation.vercel.app`.

## What's inside

A single-page, long-scroll marketing site built with **Next.js 15 (App Router) +
TypeScript + Tailwind CSS v4**, with all fonts self-hosted (Fontsource) and all
imagery stored locally in `public/images/` so it deploys anywhere (Vercel-ready).

Sections:

- **Hero** — full-bleed field photography, live status chip, quick-contact bar
- **Marquee** — trust strip (ISI certified, 10,000+ farmers, …)
- **Our Story** — legacy, animated stat counters
- **Quality** — bento grid with an animated flood-vs-drip water-use comparison
- **Products** — filterable 9-category range + shop banner with directions
- **Gallery** — sprinklers, polyhouses and the 60% water-savings promise
- **System Design** — Nazeer's 4-step design process
- **Savings Calculator** — interactive estimate of water & pumping-cost savings
- **Automobile Agency** — the motorbike spare-parts venture
- **Why Us + Testimonials**, **FAQ**, **Contact** (WhatsApp enquiry form), **Footer**

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run typecheck
```

## Notes / placeholders to personalise

- Testimonials in `src/data/content.ts` are illustrative samples for the
  redesign — swap in real customer quotes.
- Shop address text is generic ("Godavari region"); the Google Maps deep link
  in `SITE.mapsUrl` points to the real location.
- Calculator figures are indicative estimates (stated on-page).
- Contact details, phone and email live in `SITE` in `src/data/content.ts`.
