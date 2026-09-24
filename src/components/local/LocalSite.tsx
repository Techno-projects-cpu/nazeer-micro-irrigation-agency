import Image from "next/image";
import { PLATES, SITE } from "@/data/content";
import type { LocalePage } from "@/data/locales";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "../icons";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { MobileActionBar } from "../MobileActionBar";
import { Plate } from "../Plate";
import { PressFeedback } from "../PressFeedback";
import { Reveal } from "../Reveal";

/**
 * A regional sub-site: one short page, written natively rather than
 * translated. Cover promise → a line about water → the numbers → four
 * promises → the range → how to reach us → the other languages.
 *
 * Direction-aware throughout (Urdu is right-to-left): logical spacing only,
 * arrows mirror under rtl:, and Latin numbers are isolated with dir="ltr" so
 * "10,000+" never reorders inside Urdu text.
 */
export function LocalSite({ locale: l }: { locale: LocalePage }) {
  const book = waLink(l.whatsappMessage);
  const arrow = "h-4 w-4 rtl:-scale-x-100";
  const phone = <span dir="ltr">{SITE.phoneDisplay}</span>;

  return (
    <div className="local">
      <PressFeedback />

      {/* Cover */}
      <section id="top" className="relative isolate flex min-h-[88svh] flex-col overflow-hidden text-canvas">
        <div className="plate absolute inset-0 -z-20">
          <Image src={PLATES.hero.src} alt={PLATES.hero.alt} fill priority sizes="100vw" className="object-cover" />
        </div>
        <div aria-hidden="true" className="scrim-bottom absolute inset-0 -z-10" />
        <div aria-hidden="true" className="scrim-top absolute inset-x-0 top-0 -z-10 h-44" />

        <div className="shell flex items-center justify-between gap-6 pt-[calc(1rem+env(safe-area-inset-top))]">
          <a href={`/${l.slug}`} className="flex flex-col py-2">
            <span className="local-display text-[1.5rem] leading-tight">{l.brand.name}</span>
            <span className="text-[0.8125rem] leading-snug text-canvas/80">{l.brand.sub}</span>
          </a>
          <a href="/" hrefLang="en" lang="en" className="tap text-[0.9375rem] font-medium text-canvas">
            <span className="link-quiet">English</span>
          </a>
        </div>

        <div className="shell mt-auto pt-24 pb-14 md:pb-20">
          <p className="local-kicker text-canvas/85">{l.hero.kicker}</p>
          <h1 className="local-display mt-4 max-w-[18ch] text-[clamp(2.4rem,9vw,5rem)]">{l.hero.title}</h1>
          <p className="mt-5 max-w-[34rem] text-[1.0625rem] text-canvas/85">{l.hero.lead}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a href={book} target="_blank" rel="noreferrer" className="btn btn-canvas w-full sm:w-auto">
              {l.hero.primary}
              <Icon name="arrow-right" className={arrow} strokeWidth={1.6} />
            </a>
            <a href={SITE.phoneHref} className="tap justify-center font-medium text-canvas sm:justify-start">
              <span className="link-quiet">
                {l.hero.call} · {phone}
              </span>
            </a>
          </div>
        </div>
      </section>

      <main id="main" tabIndex={-1}>
        {/* A line about water, set large */}
        <section className="shell section text-center">
          <Reveal>
            <blockquote className="local-display mx-auto max-w-[24ch] text-[clamp(1.75rem,6vw,3.25rem)] text-ink">
              {l.saying.text}
            </blockquote>
            <p className="mt-6 text-[0.9375rem] text-ink-faint">— {l.saying.source}</p>
          </Reveal>
        </section>

        {/* The numbers */}
        <section className="band band-panel section">
          <ul className="shell grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {l.stats.map((stat, index) => (
              <Reveal as="li" key={stat.label} delay={index * 70}>
                <p className="font-display text-[clamp(2.25rem,8vw,3.75rem)] leading-none font-medium tracking-[-0.02em] text-ink">
                  <span dir="ltr">{stat.value}</span>
                </p>
                <p className="mt-3 text-[0.9375rem] text-ink-soft">{stat.label}</p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Four promises */}
        <section className="section">
          <div className="shell">
            <p className="local-kicker">{l.promises.kicker}</p>
            <h2 className="local-display mt-3 max-w-[22ch] text-[clamp(1.75rem,5vw,2.75rem)]">
              {l.promises.title}
            </h2>
            <ol className="mt-10 grid gap-x-14 gap-y-10 md:grid-cols-2">
              {l.promises.items.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 60} className="flex gap-5">
                  <span dir="ltr" className="font-display text-[1.75rem] leading-none font-medium text-moss">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="local-display text-[1.25rem]">{item.title}</h3>
                    <p className="mt-2 text-[1rem] text-ink-soft">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <a href={book} target="_blank" rel="noreferrer" className="btn btn-ink mt-12 w-full sm:w-auto">
              {l.hero.primary}
              <Icon name="arrow-right" className={arrow} strokeWidth={1.6} />
            </a>
          </div>
        </section>

        {/* The range */}
        <section className="band band-night section">
          <div className="shell grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Plate
              plate={PLATES.shelves}
              aspect="aspect-[4/3]"
              sizes="(max-width: 767px) 100vw, 50vw"
              caption={false}
              zoom
            />
            <div>
              <p className="local-kicker">{l.range.kicker}</p>
              <h2 className="local-display mt-3 text-[clamp(1.75rem,5vw,2.75rem)]">{l.range.title}</h2>
              <ul className="mt-7 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {l.range.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 text-[1rem] text-ink">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 translate-y-[-0.2em] bg-moss" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[1rem] text-ink-soft">{l.range.note}</p>
              <p className="mt-6 text-[0.9375rem] text-ink-faint">{l.spares}</p>
            </div>
          </div>
        </section>

        {/* How to reach us */}
        <section id="visit" className="band band-moss section">
          <div className="shell">
            <p className="local-kicker text-ink-soft">{l.visit.kicker}</p>
            <h2 className="local-display mt-3 max-w-[24ch] text-[clamp(1.9rem,5.5vw,3.25rem)]">
              {l.visit.title}
            </h2>
            <p className="mt-5 max-w-[36rem] text-[1.0625rem] text-ink-soft">{l.visit.body}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={SITE.phoneHref} className="btn btn-canvas w-full sm:w-auto">
                <Icon name="phone" className="h-4 w-4" strokeWidth={1.8} />
                {l.visit.call} · {phone}
              </a>
              <a href={book} target="_blank" rel="noreferrer" className="btn btn-line w-full sm:w-auto">
                <Icon name="message" className="h-4 w-4" strokeWidth={1.8} />
                {l.visit.whatsapp}
              </a>
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-line w-full sm:w-auto">
                <Icon name="navigate" className="h-4 w-4" strokeWidth={1.6} />
                {l.visit.directions}
              </a>
            </div>
            <p className="mt-7 text-[0.9375rem] text-ink-soft">{l.visit.hours}</p>
          </div>
        </section>

        {/* The other languages */}
        <section aria-labelledby="languages-heading" className="shell section">
          <h2 id="languages-heading" className="local-kicker">
            {l.languagesTitle}
          </h2>
          <LanguageSwitcher current={l.code} className="mt-5" />
        </section>
      </main>

      <footer className="shell pb-28 md:pb-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <p lang="en" className="text-[0.875rem] text-ink-faint">
            © {new Date().getFullYear()} {SITE.name} · {SITE.since}
          </p>
          <a href="/" hrefLang="en" className="tap text-[0.9375rem] font-medium text-ink">
            <span className="link-quiet">{l.englishLink}</span>
          </a>
        </div>
      </footer>

      <MobileActionBar labels={l.actionBar} whatsappHref={book} script />
    </div>
  );
}
