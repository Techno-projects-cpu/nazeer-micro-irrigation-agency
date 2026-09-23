"use client";

import { useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CROPS = [
  { id: "vegetables", label: "Vegetables", floodPerAcre: 3200 },
  { id: "chilli", label: "Chilli", floodPerAcre: 3000 },
  { id: "orchard", label: "Orchard", floodPerAcre: 3600 },
  { id: "sugarcane", label: "Sugarcane", floodPerAcre: 4800 },
  { id: "paddy", label: "Paddy", floodPerAcre: 5200 },
] as const;

const DRIP_RATIO = 0.4; // drip uses roughly 40% of flood water
const POWER_PER_M3 = 2.5; // rupees per cubic metre of pumped water (indicative)

const inr = (value: number) => `₹${Math.round(value).toLocaleString("en-IN")}`;
const volume = (value: number) => Math.round(value).toLocaleString("en-IN");

const BENEFITS = ["20–30% more yield potential", "Far less weed growth", "Ready for fertigation"];

export function Savings() {
  const [acres, setAcres] = useState(2);
  const [cropId, setCropId] = useState<(typeof CROPS)[number]["id"]>("vegetables");

  const result = useMemo(() => {
    const crop = CROPS.find((item) => item.id === cropId) ?? CROPS[0];
    const flood = crop.floodPerAcre * acres;
    const drip = flood * DRIP_RATIO;
    return {
      flood,
      drip,
      saved: flood - drip,
      money: (flood - drip) * POWER_PER_M3,
      savedPct: Math.round((1 - DRIP_RATIO) * 100),
    };
  }, [acres, cropId]);

  const rows = [
    { label: "Flood water / season", value: volume(result.flood), unit: "m³" },
    { label: "With drip / season", value: volume(result.drip), unit: "m³" },
    { label: "Water saved", value: volume(result.saved), unit: `m³ · ${result.savedPct}%` },
    { label: "Pumping saved", value: inr(result.money), unit: "per season" },
  ];

  return (
    <section id="savings" className="section scroll-mt-24">
      <div className="shell">
        <SectionHeading
          index="06"
          label="Savings"
          title="See what drip could save you."
          lead="Set your field size and crop for an indicative season of savings. Your free design visit turns these into exact numbers."
        />

        <Reveal delay={80} className="mt-14 md:mt-20">
          <div className="hairline-t hairline-b grid lg:grid-cols-2">
            {/* Controls */}
            <div className="py-8 lg:border-r lg:border-hairline lg:pr-14 lg:py-10">
              <div className="flex items-baseline justify-between gap-6">
                <label htmlFor="acres" className="label label-ink">
                  Field size
                </label>
                <p className="font-display text-[1.75rem] leading-none font-medium tracking-[-0.02em] text-ink">
                  {acres}
                  <span className="ml-1.5 text-[0.875rem] font-normal text-ink-soft">
                    acre{acres > 1 ? "s" : ""}
                  </span>
                </p>
              </div>
              <input
                id="acres"
                type="range"
                min={0.5}
                max={20}
                step={0.5}
                value={acres}
                onChange={(event) => setAcres(Number(event.target.value))}
                className="mt-5 h-11 w-full accent-moss"
              />
              <div className="label flex justify-between">
                <span>0.5</span>
                <span>20</span>
              </div>

              <fieldset className="mt-10">
                <legend className="label label-ink">Crop</legend>
                <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
                  {CROPS.map((crop) => {
                    const active = crop.id === cropId;
                    return (
                      <button
                        key={crop.id}
                        type="button"
                        onClick={() => setCropId(crop.id)}
                        aria-pressed={active}
                        className="tap"
                      >
                        <span
                          data-active={active}
                          className={`label link-quiet ${active ? "label-ink" : ""}`}
                        >
                          {crop.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <p className="mt-10 max-w-[26rem] text-[0.8125rem] leading-relaxed text-ink-faint">
                Assumes drip uses about {Math.round(DRIP_RATIO * 100)}% of the water a flooded field
                needs, pumped at roughly {inr(POWER_PER_M3)} per m³. Indicative only.
              </p>
            </div>

            {/* Results */}
            <dl className="grid grid-cols-2 border-t border-hairline lg:border-t-0">
              {rows.map((row, index) => (
                <div
                  key={row.label}
                  className={`border-hairline px-5 py-7 sm:px-8 sm:py-9 ${
                    index % 2 === 0 ? "border-r" : ""
                  } ${index < 2 ? "border-b" : ""}`}
                >
                  <dt className="label">{row.label}</dt>
                  <dd className="font-display mt-3 text-[1.5rem] leading-none font-medium tracking-[-0.02em] text-ink tabular-nums sm:text-[2rem]">
                    {row.value}
                    <span className="ml-1.5 font-sans text-[0.75rem] font-normal text-ink-soft">
                      {row.unit}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="label">
                {benefit}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
