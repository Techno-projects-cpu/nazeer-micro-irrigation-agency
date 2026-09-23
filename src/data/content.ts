export const SITE = {
  name: "Nazeer Micro Irrigation Agency",
  shortName: "Nazeer Irrigation",
  tagline: "Premium irrigation solutions, designed around your farm.",
  phoneDisplay: "+91 98493 06820",
  phoneHref: "tel:+919849306820",
  whatsappHref: "https://wa.me/919849306820",
  email: "nazeergodavari@gmail.com",
  hours: "Mon – Sat · 9:00 AM – 7:00 PM",
  mapsUrl: "https://maps.app.goo.gl/g4gq9qmN7yvSftEs9",
  since: 2004,
  /**
   * Canonical origin for metadata, robots.txt and sitemap.xml.
   * Set NEXT_PUBLIC_SITE_URL in the deploy environment to the live domain.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://v0-nazeer-micro-irrigation.vercel.app",
} as const;

/* ---------------------------------------------------------------------------
   Plates — the eight photographs, numbered like the plates of an almanac so
   the page can refer to them from anywhere ("see plate 03").
--------------------------------------------------------------------------- */

export interface Plate {
  /** Two-digit plate number, printed as `PLATE 01`. */
  id: string;
  src: string;
  /** Empty string marks a decorative plate (rendered with alt=""). */
  alt: string;
  caption: string;
}

export const PLATES = {
  hero: {
    id: "01",
    src: "/images/hero-field.jpg",
    alt: "Rows of drip-irrigated crops running to the horizon at golden hour in the Godavari delta",
    caption: "Drip lines at work · Godavari delta",
  },
  aerial: {
    id: "02",
    src: "/images/field-aerial.jpg",
    alt: "Aerial view of patchwork farmland and irrigation channels in the Godavari delta",
    caption: "Furrow and channel irrigation in the delta",
  },
  drip: {
    id: "03",
    src: "/images/drip-closeup.jpg",
    alt: "Close-up of a drip emitter releasing a single droplet at the root zone",
    caption: "One emitter, one plant, season after season",
  },
  sprinkler: {
    id: "04",
    src: "/images/sprinkler.jpg",
    alt: "Micro sprinkler throwing a fine backlit mist over a vegetable crop",
    caption: "Micro-sprinklers in a vegetable field",
  },
  polyhouse: {
    id: "05",
    src: "/images/polyhouse.jpg",
    alt: "White polyhouse with rows of crops growing on raised beds inside",
    caption: "Polyhouses, framed and clad by our team",
  },
  shelves: {
    id: "06",
    src: "/images/shop-shelves.jpg",
    alt: "Organised shelves of pipes, filters and fittings inside the Nazeer shop",
    caption: "The aisles · Godavari region",
  },
  desk: {
    id: "07",
    src: "/images/design-desk.jpg",
    alt: "Hands drawing a farm irrigation layout on a field map beside a compass and calculator",
    caption: "Every layout drawn by hand, for your field",
  },
  automobile: {
    id: "08",
    src: "/images/automobile.jpg",
    alt: "Motorbike spare parts on shelves — chains, sprockets and boxed components",
    caption: "Spares counter · under the same roof",
  },
} as const satisfies Record<string, Plate>;

export type PlateId = keyof typeof PLATES;

/**
 * The running index: the ten numbered sections of the almanac, printed in the
 * left gutter from 1280px up. The hero is the cover, so it carries no number.
 */
export const SECTIONS: { index: string; id: string; label: string }[] = [
  { index: "01", id: "story", label: "Story" },
  { index: "02", id: "standards", label: "Standards" },
  { index: "03", id: "field", label: "In the field" },
  { index: "04", id: "range", label: "The range" },
  { index: "05", id: "design", label: "Design" },
  { index: "06", id: "water", label: "The water" },
  { index: "07", id: "savings", label: "Savings" },
  { index: "08", id: "automobile", label: "Automobile" },
  { index: "09", id: "why", label: "Why us" },
  { index: "10", id: "visit", label: "Visit" },
];

/** A house epigraph — the shop's own standing note, not a customer quote. */
export const EPIGRAPH = {
  quote: "A flooded field drinks for itself. A designed field drinks for the crop.",
  attribution: "House note · Nazeer Micro Irrigation Agency",
} as const;

/**
 * A single-line credit in the footer. Flip `enabled` to true and fill in
 * `name` / `href` to switch it on — nothing else on the page changes.
 */
export const STUDIO_CREDIT = {
  enabled: false,
  name: "",
  href: "",
} as const;

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 20, suffix: "+", label: "Years in the field" },
  { value: 10000, suffix: "+", label: "Happy farmers" },
  { value: 100, suffix: "%", label: "Genuine products" },
  { value: 100, suffix: "+", label: "Product categories" },
];

export interface QualityPoint {
  title: string;
  body: string;
}

export const QUALITY: QualityPoint[] = [
  {
    title: "ISI Certified",
    body: "Every product we stock meets the highest industry standards with proper ISI certification and quality marks.",
  },
  {
    title: "Premium Grade Materials",
    body: "We source from top manufacturers to ensure UV-stabilised, durable and long-lasting irrigation components.",
  },
  {
    title: "Tested & Verified",
    body: "Each product undergoes rigorous testing for pressure tolerance, flow consistency and weather resistance.",
  },
  {
    title: "Eco-Friendly Solutions",
    body: "Micro irrigation conserves up to 60% of the water used by traditional methods — better yields, lighter bills.",
  },
];

export type ProductTag = "irrigation" | "water" | "structure" | "tools";

export interface Product {
  title: string;
  blurb: string;
  items: string[];
  tags: ProductTag[];
  /** Which photograph the specimen row points at. */
  plate: PlateId;
}

export const PRODUCT_FILTERS: { id: "all" | ProductTag; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "irrigation", label: "Drip & Sprinkler" },
  { id: "water", label: "Water & Pipes" },
  { id: "structure", label: "Structures & Covers" },
  { id: "tools", label: "Tools & Offers" },
];

export const PRODUCTS: Product[] = [
  {
    title: "Drip Systems",
    blurb:
      "Complete inline and online drip irrigation systems for row crops, orchards and greenhouses.",
    items: ["Inline & online drippers", "Pressure-compensating emitters", "Micro-tubes, jets & bubblers"],
    tags: ["irrigation"],
    plate: "drip",
  },
  {
    title: "Sprinkler Systems",
    blurb:
      "Mini and micro sprinklers for uniform water distribution across every terrain type.",
    items: ["Micro & mini sprinklers", "Rain guns for open fields", "Risers, adapters & stakes"],
    tags: ["irrigation"],
    plate: "sprinkler",
  },
  {
    title: "Drip Tapes & Laterals",
    blurb:
      "High-quality flat and round drip tapes with precise emitter spacing for maximum efficiency.",
    items: ["Flat drip tape, 0.15–0.6 mm", "Round laterals 12–20 mm", "Custom emitter spacing"],
    tags: ["irrigation"],
    plate: "hero",
  },
  {
    title: "Filters & Fertigation",
    blurb:
      "Sand, disc and screen filters along with venturi-based fertigation equipment.",
    items: ["Screen, disc & sand filters", "Venturi injectors & dosing", "Hydro-cyclone desanders"],
    tags: ["water"],
    plate: "shelves",
  },
  {
    title: "Pipes & Fittings",
    blurb: "HDPE and PVC pipes with a full range of connectors, valves and end caps.",
    items: ["HDPE & PVC pipes, all sizes", "Ball, air & flush valves", "Couplers, elbows & end caps"],
    tags: ["water"],
    plate: "shelves",
  },
  {
    title: "Accessories & Tools",
    blurb: "Punch tools, grommet take-offs, end plugs, pressure gauges — everything you need.",
    items: ["Punch tools & take-offs", "Pressure gauges & meters", "End plugs, clamps & seals"],
    tags: ["tools"],
    plate: "desk",
  },
  {
    title: "Mulch Films & Crop Covers",
    blurb:
      "Premium mulch films for weed control and moisture retention, plus crop covers for season extension.",
    items: ["Silver-black mulch film", "Insect & shade nets", "Crop covers & row covers"],
    tags: ["structure"],
    plate: "polyhouse",
  },
  {
    title: "Polyhouses & Greenhouses",
    blurb:
      "Complete polyhouse and greenhouse structures with cladding, ventilation and climate control.",
    items: ["GI & bamboo frame structures", "UV-stabilised cladding films", "Ventilation & fan-pad cooling"],
    tags: ["structure"],
    plate: "polyhouse",
  },
  {
    title: "Special Offers",
    blurb:
      "Seasonal deals, combo packs and bulk pricing on popular irrigation products — great value for every farmer.",
    items: ["Seasonal combo packs", "Bulk & group discounts", "Subsidy-scheme guidance"],
    tags: ["tools"],
    plate: "automobile",
  },
];

export interface ProcessStep {
  title: string;
  body: string;
}

export const PROCESS: ProcessStep[] = [
  {
    title: "Site Assessment",
    body: "Thorough analysis of your land topography, soil type, water source and crop layout before we design anything.",
  },
  {
    title: "Custom System Design",
    body: "A tailored irrigation plan drawn from scratch for your field dimensions, crop type and water availability.",
  },
  {
    title: "Precision Layout",
    body: "Exact lateral spacing, emitter placement and mainline routing, calculated for maximum water-use efficiency.",
  },
  {
    title: "End-to-End Execution",
    body: "From blueprint to installation and after-sales support — we handle the whole process so you can focus on farming.",
  },
];

export const WHY_US: string[] = [
  "20+ years of hands-on expertise in micro irrigation",
  "Only genuine, ISI-certified products stocked",
  "Competitive pricing with honest bulk discounts",
  "Free technical consultation and system design",
  "After-sales support and installation guidance",
  "Wide network of trusted manufacturers",
];

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

/** NOTE: placeholder testimonials for the redesign — replace with real customer quotes. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Nazeer garu visited my field himself, drew the layout, and my water bill dropped by half the very first season. The chilli crop has never looked better.",
    name: "Ravi K.",
    detail: "Chilli farmer · 3 acres",
  },
  {
    quote:
      "Whatever part I need for my bike or my drip line, I find it under one roof — and the price is always fair. That is why the whole village comes here.",
    name: "Suresh P.",
    detail: "Paddy farmer · East Godavari",
  },
  {
    quote:
      "They guided me through the subsidy paperwork and installed the polyhouse on time. Two years on, not one leakage. Genuine people, genuine products.",
    name: "Lakshmi D.",
    detail: "Vegetable grower · Polyhouse owner",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "Do you help with government subsidy schemes for drip irrigation?",
    a: "Yes. We guide farmers through the PMKSY / state micro-irrigation subsidy process — from eligibility and paperwork to empanelled installation — so you get the maximum benefit with minimum hassle.",
  },
  {
    q: "Will someone visit my farm before suggesting a system?",
    a: "Absolutely. Nazeer personally studies your land, water source and crops before recommending anything. The design is drawn for your field, not from a catalogue.",
  },
  {
    q: "Do you provide installation and after-sales support?",
    a: "Yes — we handle layout, installation and commissioning, and we stay available for maintenance, expansion and spare parts long after your system is running.",
  },
  {
    q: "Can I get bulk pricing for a group of farmers?",
    a: "We regularly supply farmer groups and cooperatives with combo packs and bulk rates. Call the shop or send your requirement on WhatsApp for a same-day quote.",
  },
  {
    q: "Are all your products genuine and certified?",
    a: "Every item on our shelves is sourced from trusted manufacturers and carries proper ISI certification. If it is not genuine, we do not stock it.",
  },
];

export const AUTOMOBILE_POINTS: { title: string; body: string }[] = [
  {
    title: "Genuine Spare Parts",
    body: "Original and OEM-grade parts for all major motorbike brands — perfect fitment, long life.",
  },
  {
    title: "Reasonable Pricing",
    body: "Every part is priced fairly, so vehicle repairs never become a financial burden.",
  },
  {
    title: "Wide Range of Parts",
    body: "Brake shoes, clutch plates, chains, sprockets, filters and electricals — one roof.",
  },
  {
    title: "Farmer-First Approach",
    body: "Your bike is your lifeline. Quick availability and honest advice get you moving sooner.",
  },
];

export const NAV_LINKS = [
  { href: "#story", label: "Our story" },
  { href: "#range", label: "The range" },
  { href: "#design", label: "Design" },
  { href: "#savings", label: "Savings" },
  { href: "#automobile", label: "Automobile" },
  { href: "#why", label: "Why us" },
  { href: "#visit", label: "Visit" },
] as const;
