import { QUALITY } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const WATER_USE = [
  { label: "Flood irrigation", note: "water lost between the rows", value: 100, tone: "rule-ink" },
  { label: "Drip, properly designed", note: "delivered to the root zone", value: 40, tone: "rule-moss" },
];

export function Standards() {
  return (
    <section id="standards" className="section scroll-mt-24">
      <div className="shell">
        <SectionHeading
          index="02"
          label="Standards"
          title="Genuine materials, checked before they reach your field."
          lead="Everything on our shelves is sourced from manufacturers we trust, and carries the certification to prove it."
        />

        <ol className="hairline-b mt-14 md:mt-20">
          {QUALITY.map((point, index) => (
            <Reveal
              as="li"
              key={point.title}
              delay={index * 60}
              className="hairline-t grid gap-x-8 gap-y-3 py-7 md:grid-cols-[3.5rem_15rem_1fr] md:py-9"
            >
              <span className="label pt-1.5">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="display-3">{point.title}</h3>
              <p className="max-w-[34rem] text-[0.9375rem] leading-relaxed text-ink-soft">
                {point.body}
              </p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="label label-moss">Water use, same crop, same season</p>
            <p className="numeral mt-5 text-ink">60%</p>
            <p className="mt-3 max-w-[30rem] text-[0.9375rem] leading-relaxed text-ink-soft">
              of irrigation water saved when a field moves from flooding to a properly designed drip
              system — water that stays in your soil and your pocket.
            </p>
          </Reveal>

          <Reveal delay={90} className="self-end">
            <dl className="space-y-8">
              {WATER_USE.map((row) => (
                <div key={row.label}>
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="text-[0.9375rem] font-medium text-ink">{row.label}</dt>
                    <dd className="label">{row.value}</dd>
                  </div>
                  <div className={`mt-3 h-[2px] ${row.tone}`} style={{ width: `${row.value}%` }} />
                  <p className="label mt-3">{row.note}</p>
                </div>
              ))}
            </dl>
            <p className="label mt-8">Indicative comparison</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
