import Image from "next/image";
import { SITE, STATS } from "@/data/content";
import { CountUp } from "./CountUp";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Story() {
  return (
    <section id="story" className="bg-paper-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            tone="light"
            kicker="Our legacy"
            title={
              <>
                Two decades of trust, grown one field at a time.
              </>
            }
            lead={
              <>
                What began as a small shop under Nazeer&apos;s care is now a
                name farmers across the region rely on. Twenty years in the
                field means we know the soil, the water and the crops — and the
                exact system your farm deserves.
              </>
            }
          />

          <Reveal delay={120} className="mt-10 space-y-5 text-[15px] leading-relaxed text-pine-700 sm:text-base">
            <p>
              We are more than a shop — we are partners in your growth. Every
              recommendation starts with a walk through your field and ends with
              a system that pays for itself in saved water and better yields.
            </p>
            <p className="flex items-start gap-3 font-medium text-pine-900">
              <Icon name="droplet" className="mt-0.5 h-5 w-5 shrink-0 text-leaf-600" />
              From a single drip line to a full polyhouse — we design it,
              supply it and stand behind it.
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-semibold tracking-tight text-pine-900 sm:text-[2.6rem]">
                  <CountUp end={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-sm text-pine-700/80">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={150} className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/images/field-aerial.jpg"
              alt="Aerial view of patchwork farmland and water channels in the Godavari delta"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-paper-50/15 bg-pine-950/65 px-5 py-4 backdrop-blur-md">
              <p className="font-mono text-[10px] tracking-[0.24em] text-leaf-300 uppercase">
                Godavari delta
              </p>
              <p className="font-display mt-1 text-lg font-semibold text-paper-50">
                Fields we have watered since {SITE.since}
              </p>
            </div>
          </div>
          <div className="absolute -top-6 -right-4 hidden rotate-3 rounded-2xl bg-leaf-500 px-5 py-4 shadow-lift sm:block">
            <p className="font-display text-3xl font-semibold text-pine-950">20+</p>
            <p className="text-xs font-semibold text-pine-900/80">years of service</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
