import type { CSSProperties } from "react";
import { PLATES } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WaterWipe } from "./WaterWipe";

const ROWS = [
  {
    label: "Flood irrigation",
    note: "Water spread across the whole field. Most of it never reaches a root.",
    value: 100,
    bar: "bar-ink",
  },
  {
    label: "Drip, properly designed",
    note: "Water delivered to the root zone, in the quantity the crop uses.",
    value: 40,
    bar: "bar-moss",
  },
];

/** 06 — the argument of the whole page, given a full spread. */
export function Water() {
  return (
    <section id="water" className="section scroll-mt-4">
      <div className="shell">
        <SectionHeading
          index="06"
          label="The water"
          title="Flood the field, or feed the crop."
          lead="Drag the seam. Both sides are the same delta, the same season and the same crop — the only difference is where the water lands."
        />

        <Reveal className="mt-14 md:mt-20">
          <figure>
            <WaterWipe />
            <figcaption className="hairline-t mt-4 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pt-4">
              <span className="label">
                Indicative illustration · Plate {PLATES.aerial.id} against plate {PLATES.hero.id}
              </span>
              <span className="label">Drag the seam · arrow keys on desktop</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={60} className="mt-16 md:mt-24">
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {ROWS.map((row, index) => (
              <div key={row.label}>
                <div className="flex items-baseline justify-between gap-6">
                  <p className="text-[0.9375rem] font-medium text-ink">{row.label}</p>
                  <p className="numeral text-[1.75rem] text-ink">
                    {row.value}
                    <span className="label ml-3">index</span>
                  </p>
                </div>
                <div className="mt-4 h-[2px] w-full bg-hairline">
                  <div
                    className={`bar h-full ${row.bar}`}
                    style={
                      {
                        "--bar-width": `${row.value}%`,
                        "--bar-delay": `${index * 140}ms`,
                      } as CSSProperties
                    }
                  />
                </div>
                <p className="label mt-4 max-w-[24rem] normal-case tracking-[0.06em]">
                  {row.note}
                </p>
              </div>
            ))}
          </div>

          <p className="label mt-8">Indexed to flood irrigation = 100</p>

          {/* The single most important figure on the page. */}
          <div className="hairline-t mt-14 flex flex-wrap items-end justify-between gap-x-12 gap-y-8 pt-8 md:mt-20">
            <div>
              <p className="label label-moss">Water saved, same crop, same season</p>
              <p className="numeral mt-5 text-moss">60%</p>
            </div>
            <p className="fine max-w-[28rem]">
              A properly designed drip system uses roughly 40% of the water a flooded field needs.
              The figure above is indicative, drawn from typical delta conditions — your free design
              visit turns it into an exact number for your own field.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
