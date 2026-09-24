import { QUALITY, SITE } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** 02 — a tonal panel: the house standards, set as a two-column specimen block. */
export function Standards() {
  return (
    <section id="standards" className="band band-panel section scroll-mt-4">
      <div className="shell">
        <SectionHeading
          index="02"
          label="Standards"
          title="Genuine materials, checked before they reach your field."
          lead="Everything on our shelves is sourced from manufacturers we trust, and carries the certification to prove it. If it is not genuine, we do not stock it."
        />

        <Reveal className="mt-14 md:mt-20">
          <ol className="specimen-grid">
            {QUALITY.map((point, index) => (
              <li key={point.title} className="grid grid-cols-[2.5rem_1fr] gap-x-5">
                <span className="label row-num pt-1.5">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="display-3">{point.title}</h3>
                  <p className="mt-3 max-w-[28rem] text-[0.9375rem] leading-relaxed text-ink-soft">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={80} className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-3">
          <p className="label">Checked at the counter, batch by batch</p>
          <a href={SITE.phoneHref} className="tap text-[0.9375rem] font-medium text-ink">
            <span className="link-quiet">Ask what is in stock today</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
