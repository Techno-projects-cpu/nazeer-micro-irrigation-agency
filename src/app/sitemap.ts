import type { MetadataRoute } from "next";
import { SITE } from "@/data/content";
import { LANGUAGE_LINKS } from "@/data/locales";

/** The English site plus the five regional sub-sites, each listing the others. */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    LANGUAGE_LINKS.map((link) => [link.code, `${SITE.url}${link.href}`]),
  );
  return LANGUAGE_LINKS.map((link) => ({
    url: `${SITE.url}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: link.code === "en" ? 1 : 0.8,
    alternates: { languages },
  }));
}
