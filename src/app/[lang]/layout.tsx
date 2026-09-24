import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces/soft.css";
/* Each script's faces are split by unicode-range, so a page only downloads
   the script it actually sets (the language buttons use system fonts). */
import "@fontsource-variable/noto-sans-telugu";
import "@fontsource-variable/noto-serif-telugu";
import "@fontsource-variable/noto-sans-devanagari";
import "@fontsource-variable/noto-serif-devanagari";
import "@fontsource-variable/noto-sans-tamil";
import "@fontsource-variable/noto-serif-tamil";
import "@fontsource-variable/noto-sans-kannada";
import "@fontsource-variable/noto-serif-kannada";
import "@fontsource-variable/noto-nastaliq-urdu";
import "../globals.css";
import { SITE } from "@/data/content";
import { LANGUAGE_ALTERNATES, LOCALE_SLUGS, getLocale } from "@/data/locales";
import { RevealFallback } from "@/components/RevealFallback";

/** Only the five regional pages exist under /[lang]; anything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALE_SLUGS.map((lang) => ({ lang }));
}

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const locale = getLocale((await params).lang);
  if (!locale) return {};
  return {
    metadataBase: new URL(SITE.url),
    title: locale.meta.title,
    description: locale.meta.description,
    alternates: { canonical: `/${locale.slug}`, languages: LANGUAGE_ALTERNATES },
    openGraph: {
      type: "website",
      url: `${SITE.url}/${locale.slug}`,
      siteName: SITE.name,
      locale: `${locale.code}_IN`,
      title: locale.meta.title,
      description: locale.meta.description,
      images: [{ url: "/images/hero-field.jpg", width: 1584, height: 672 }],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#fbf9f4",
  colorScheme: "light",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) {
  const locale = getLocale((await params).lang);

  return (
    <html lang={locale?.code ?? "en"} dir={locale?.dir ?? "ltr"}>
      <body>
        <RevealFallback />
        {children}
      </body>
    </html>
  );
}
