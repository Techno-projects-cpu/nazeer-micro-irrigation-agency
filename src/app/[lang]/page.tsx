import { notFound } from "next/navigation";
import { LOCALE_SLUGS, getLocale } from "@/data/locales";
import { LocalSite } from "@/components/local/LocalSite";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALE_SLUGS.map((lang) => ({ lang }));
}

export default async function LocalePage({ params }: { params: Promise<{ lang: string }> }) {
  const locale = getLocale((await params).lang);
  if (!locale) notFound();
  return <LocalSite locale={locale} />;
}
