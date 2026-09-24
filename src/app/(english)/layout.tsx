import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces/soft.css";
import "@fontsource-variable/fraunces/soft-italic.css";
import "@fontsource-variable/jetbrains-mono";
import "../globals.css";
import { SITE } from "@/data/content";
import { LANGUAGE_ALTERNATES } from "@/data/locales";
import { RevealFallback } from "@/components/RevealFallback";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Nazeer Micro Irrigation Agency — Drip, Sprinkler & Polyhouse Systems",
    template: "%s · Nazeer Micro Irrigation",
  },
  description:
    "Genuine, ISI-certified drip and sprinkler systems, filters, mulch film and polyhouses — with every irrigation layout drawn personally for your field. Serving the Godavari region since 2004.",
  keywords: [
    "micro irrigation",
    "drip irrigation",
    "sprinkler systems",
    "polyhouse",
    "drip tape",
    "Godavari",
    "Andhra Pradesh",
    "Nazeer Micro Irrigation Agency",
  ],
  alternates: { canonical: "/", languages: LANGUAGE_ALTERNATES },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: "Nazeer Micro Irrigation Agency",
    description:
      "Micro irrigation materials and personally drawn system designs for farms in the Godavari region.",
    images: [
      {
        url: "/images/hero-field.jpg",
        width: 1584,
        height: 672,
        alt: "Drip-irrigated field at golden hour in the Godavari delta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazeer Micro Irrigation Agency",
    description: "Micro irrigation materials and system designs, drawn around your farm.",
    images: ["/images/hero-field.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f4",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  name: SITE.name,
  url: SITE.url,
  telephone: "+919849306820",
  email: SITE.email,
  description:
    "Micro irrigation supplies — drip and sprinkler systems, filters, pipes, mulch film and polyhouses — with custom irrigation system design for farms. Motorbike spare parts via Nazeer Automobile Agency.",
  openingHours: "Mo-Sa 09:00-19:00",
  image: `${SITE.url}/images/hero-field.jpg`,
  areaServed: "Godavari region, Andhra Pradesh, India",
  founder: { "@type": "Person", name: "Nazeer" },
  foundingDate: String(SITE.since),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RevealFallback />
        <a
          href="#main"
          data-native="true"
          className="label sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-canvas"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
