import type { IconName } from "@/components/icons";

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
  icon: IconName;
  title: string;
  body: string;
}

export const QUALITY: QualityPoint[] = [
  {
    icon: "badge",
    title: "ISI Certified",
    body: "Every product we stock meets the highest industry standards with proper ISI certification and quality marks.",
  },
  {
    icon: "shield",
    title: "Premium Grade Materials",
    body: "We source from top manufacturers to ensure UV-stabilised, durable and long-lasting irrigation components.",
  },
  {
    icon: "gauge",
    title: "Tested & Verified",
    body: "Each product undergoes rigorous testing for pressure tolerance, flow consistency and weather resistance.",
  },
  {
    icon: "leaf",
    title: "Eco-Friendly Solutions",
    body: "Micro irrigation conserves up to 60% of the water used by traditional methods — better yields, lighter bills.",
  },
];

export type ProductTag = "irrigation" | "water" | "structure" | "tools";

export interface Product {
  icon: IconName;
  title: string;
  blurb: string;
  items: string[];
  tags: ProductTag[];
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
    icon: "droplet",
    title: "Drip Systems",
    blurb:
      "Complete inline and online drip irrigation systems for row crops, orchards and greenhouses.",
    items: ["Inline & online drippers", "Pressure-compensating emitters", "Micro-tubes, jets & bubblers"],
    tags: ["irrigation"],
  },
  {
    icon: "sprinkler",
    title: "Sprinkler Systems",
    blurb:
      "Mini and micro sprinklers for uniform water distribution across every terrain type.",
    items: ["Micro & mini sprinklers", "Rain guns for open fields", "Risers, adapters & stakes"],
    tags: ["irrigation"],
  },
  {
    icon: "waves",
    title: "Drip Tapes & Laterals",
    blurb:
      "High-quality flat and round drip tapes with precise emitter spacing for maximum efficiency.",
    items: ["Flat drip tape, 0.15–0.6 mm", "Round laterals 12–20 mm", "Custom emitter spacing"],
    tags: ["irrigation"],
  },
  {
    icon: "funnel",
    title: "Filters & Fertigation",
    blurb:
      "Sand, disc and screen filters along with venturi-based fertigation equipment.",
    items: ["Screen, disc & sand filters", "Venturi injectors & dosing", "Hydro-cyclone desanders"],
    tags: ["water"],
  },
  {
    icon: "package",
    title: "Pipes & Fittings",
    blurb:
      "HDPE and PVC pipes with a full range of connectors, valves and end caps.",
    items: ["HDPE & PVC pipes, all sizes", "Ball, air & flush valves", "Couplers, elbows & end caps"],
    tags: ["water"],
  },
  {
    icon: "wrench",
    title: "Accessories & Tools",
    blurb:
      "Punch tools, grommet take-offs, end plugs, pressure gauges — everything you need.",
    items: ["Punch tools & take-offs", "Pressure gauges & meters", "End plugs, clamps & seals"],
    tags: ["tools"],
  },
  {
    icon: "layers",
    title: "Mulch Films & Crop Covers",
    blurb:
      "Premium mulch films for weed control and moisture retention, plus crop covers for season extension.",
    items: ["Silver-black mulch film", "Insect & shade nets", "Crop covers & row covers"],
    tags: ["structure"],
  },
  {
    icon: "greenhouse",
    title: "Polyhouses & Greenhouses",
    blurb:
      "Complete polyhouse and greenhouse structures with cladding, ventilation and climate control.",
    items: ["GI & bamboo frame structures", "UV-stabilised cladding films", "Ventilation & fan-pad cooling"],
    tags: ["structure"],
  },
  {
    icon: "tag",
    title: "Special Offers",
    blurb:
      "Seasonal deals, combo packs and bulk pricing on popular irrigation products — great value for every farmer.",
    items: ["Seasonal combo packs", "Bulk & group discounts", "Subsidy-scheme guidance"],
    tags: ["tools"],
  },
];

export interface ProcessStep {
  icon: IconName;
  title: string;
  body: string;
}

export const PROCESS: ProcessStep[] = [
  {
    icon: "pin",
    title: "Site Assessment",
    body: "Thorough analysis of your land topography, soil type, water source and crop layout before we design anything.",
  },
  {
    icon: "pencil",
    title: "Custom System Design",
    body: "A tailored irrigation plan drawn from scratch for your field dimensions, crop type and water availability.",
  },
  {
    icon: "gauge",
    title: "Precision Layout",
    body: "Exact lateral spacing, emitter placement and mainline routing, calculated for maximum water-use efficiency.",
  },
  {
    icon: "sprout",
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

export const AUTOMOBILE_POINTS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "badge",
    title: "Genuine Spare Parts",
    body: "Original and OEM-grade parts for all major motorbike brands — perfect fitment, long life.",
  },
  {
    icon: "tag",
    title: "Reasonable Pricing",
    body: "Every part is priced fairly, so vehicle repairs never become a financial burden.",
  },
  {
    icon: "package",
    title: "Wide Range of Parts",
    body: "Brake shoes, clutch plates, chains, sprockets, filters and electricals — one roof.",
  },
  {
    icon: "users",
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
  { href: "#contact", label: "Contact" },
] as const;
