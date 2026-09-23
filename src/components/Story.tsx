import { PLATES, SITE, STATS } from "@/data/content";
import { CountUp } from "./CountUp";
import { Plate } from "./Plate";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** 01 — a tight text column against one wide plate. */
export function Story() {
  return (
    <section id="story" className="section scroll-mt-4">
      <div className="shell">
        <SectionHeading
          index="01"
          label="Our story"
          title="Two decades of trust, grown one field at a time."
          lead="What began as a small shop under Nazeer's care is now a name farmers across the region rely on. Twenty years in the field means we know the soil, the water and the crops — and the exact system your farm deserves."
        />

        <div className="g12 mt-14 md:mt-20">
          <Reveal className="md:col-span-5">
            <p className="body-copy max-w-[34rem]">
              We are more than a shop. Every recommendation starts with a walk through your field
              and ends with a system that pays for itself in saved water and better yields.
            </p>
            <p className="body-copy mt-6 max-w-[34rem]">
              From a single drip line to a full polyhouse, we design it, supply it and stand behind
              it — the same way we have since {SITE.since}.
            </p>
            <a href="#visit" className="tap mt-8 text-[0.9375rem] font-medium text-ink">
              <span className="link-quiet">Talk to Nazeer about your field</span>
            </a>
          </Reveal>

          <Reveal delay={90} className="md:col-span-6 md:col-start-7">
            <Plate
              plate={PLATES.aerial}
              aspect="aspect-[4/3]"
              sizes="(max-width: 767px) 100vw, 45vw"
              zoom
            />
            <p className="fine mt-6 max-w-[28rem]">
              The delta we work in. Every layout we draw starts with the water you already have and
              the crop you intend to grow.
            </p>
          </Reveal>
        </div>

        {/* The measured figures, printed across the foot of the section. */}
        <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-24 lg:grid-cols-4 lg:gap-x-10">
          {STATS.map((stat, index) => (
            <Reveal as="li" key={stat.label} delay={index * 70} className="hairline-t pt-5">
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
