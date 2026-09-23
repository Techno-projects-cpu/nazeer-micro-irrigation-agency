import Image from "next/image";
import { SITE, STATS } from "@/data/content";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Story() {
  return (
    <section id="story" className="section scroll-mt-24">
      <div className="shell">
        <SectionHeading
          index="01"
          label="Our story"
          title="Two decades of trust, grown one field at a time."
          lead="What began as a small shop under Nazeer's care is now a name farmers across the region rely on. Twenty years in the field means we know the soil, the water and the crops — and the exact system your farm deserves."
        />

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <p className="max-w-[34rem] text-[1.0625rem] leading-relaxed text-ink-soft">
              We are more than a shop. Every recommendation starts with a walk through your field and
              ends with a system that pays for itself in saved water and better yields.
            </p>
            <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-relaxed text-ink-soft">
              From a single drip line to a full polyhouse, we design it, supply it and stand behind
              it — the same way we have since {SITE.since}.
            </p>
            <a href="#contact" className="tap mt-8 text-[0.9375rem] font-medium text-moss">
              <span className="link-quiet">Talk to Nazeer about your field</span>
            </a>
          </Reveal>

          <Reveal delay={90}>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/field-aerial.jpg"
                  alt="Aerial view of patchwork farmland and irrigation channels in the Godavari delta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="label mt-4">
                The delta we work in · Serving farms since {SITE.since}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-24 lg:grid-cols-4 lg:gap-x-10">
          {STATS.map((stat, index) => (
            <Reveal as="li" key={stat.label} delay={index * 80} className="hairline-t pt-5">
              <p className="numeral text-ink">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="label mt-3">{stat.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
