import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces/soft.css";
import "@fontsource-variable/fraunces/soft-italic.css";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { SITE } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://nazeer-irrigation.example"),
  title: {
    default: "Nazeer Micro Irrigation Agency — Premium Irrigation Solutions",
    template: "%s · Nazeer Micro Irrigation",
  },
  description:
    "Trusted for 20+ years: genuine ISI-certified drip & sprinkler systems, polyhouses, filters and expert farm irrigation design by Nazeer himself. Godavari region.",
  keywords: [
    "micro irrigation",
    "drip irrigation",
    "sprinkler systems",
    "polyhouse",
    "drip tape",
    "Godavari",
    "Nazeer",
  ],
  openGraph: {
    type: "website",
    title: "Nazeer Micro Irrigation Agency",
    description:
      "Premium micro irrigation solutions and personal system design for your farm — trusted by 10,000+ farmers for over two decades.",
    images: [{ url: "/images/hero-field.jpg", width: 1600, height: 760, alt: "Drip-irrigated field at sunset" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazeer Micro Irrigation Agency",
    description: "Premium micro irrigation solutions, designed around your farm.",
    images: ["/images/hero-field.jpg"],
  },
};

export const viewport = {
  themeColor: "#07110C",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  telephone: "+919849306820",
  email: SITE.email,
  description:
    "Micro irrigation supplies and custom irrigation system design for farms; motorbike spare parts via Nazeer Automobile Agency.",
  openingHours: "Mo-Sa 09:00-19:00",
  image: "/images/hero-field.jpg",
  areaServed: "Godavari region, Andhra Pradesh, India",
  founder: { "@type": "Person", name: "Nazeer" },
  foundingDate: String(SITE.since),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">
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
