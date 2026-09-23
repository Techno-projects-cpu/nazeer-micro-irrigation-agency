"use client";

import { useMemo, useState } from "react";
import { SITE } from "@/data/content";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "./icons";
import { CountUp } from "./CountUp";
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

const BENEFITS = ["20–30% more yield potential", "Far less weed growth", "Ready for fertigation"];

/** 07 — the ledger: a printed statement of account, figures right-aligned. */
export function Savings() {
  const [acres, setAcres] = useState(2);
  const [cropId, setCropId] = useState<(typeof CROPS)[number]["id"]>("vegetables");

  const crop = CROPS.find((item) => item.id === cropId) ?? CROPS[0];

  const result = useMemo(() => {
    const flood = crop.floodPerAcre * acres;
    const drip = flood * DRIP_RATIO;
    return {
      flood,
      drip,
      saved: flood - drip,
      money: (flood - drip) * POWER_PER_M3,
      savedPct: Math.round((1 - DRIP_RATIO) * 100),
    };
  }, [acres, crop]);

  const message = `Hello Nazeer Micro Irrigation! I have ${acres} acre${
    acres > 1 ? "s" : ""
  } of ${crop.label.toLowerCase()}. Please send an estimate for a drip system and confirm the saving.`;

  return (
    <section id="savings" className="section scroll-mt-4">
      <div className="shell">
        <SectionHeading
          index="07"
          label="Savings"
          title="See what drip could save you."
          lead="Set your field size and crop for an indicative season of savings. Your free design visit turns these into exact numbers."
        />

        <div className="g12 mt-14 md:mt-20">
          <Reveal className="md:col-span-5">
            <div>
              <div className="flex items-baseline justify-between gap-6">
                <label htmlFor="acres" className="label label-ink">
                  Field size
                </label>
                <p className="numeral text-[1.75rem] text-ink md:text-[2rem]">
                  {acres}
                  <span className="ml-1.5 font-sans text-[0.8125rem] font-normal text-ink-soft">
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
              <div className="label mt-1 flex justify-between">
                <span>0.5</span>
                <span>20</span>
              </div>

              <fieldset className="mt-12">
                <legend className="label label-ink">Crop</legend>
                <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2">
                  {CROPS.map((option) => {
                    const isActive = option.id === cropId;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setCropId(option.id)}
                        aria-pressed={isActive}
                        className="tap"
                      >
                        <span
                          data-active={isActive}
                          className={`label link-quiet ${isActive ? "text-ink" : ""}`}
                        >
                          {option.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <p className="fine mt-12 max-w-[26rem]">
                Assumes drip uses about {Math.round(DRIP_RATIO * 100)}% of the water a flooded field
                needs, pumped at roughly ₹{POWER_PER_M3.toFixed(2)} per m³. Indicative only — real
                figures depend on your soil, source and crop stage.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90} className="md:col-span-6 md:col-start-7">
            <table className="ledger">
              <caption className="sr-only">
                Indicative water and pumping savings for {acres} acre{acres > 1 ? "s" : ""} of{" "}
                {crop.label.toLowerCase()}, one season
              </caption>
              <thead>
                <tr>
                  <th scope="col">Particulars</th>
                  <th scope="col" className="col-unit">
                    Unit
                  </th>
                  <th scope="col" className="col-figure text-right">
                    Season
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-left font-normal">
                    Flood water
                  </th>
                  <td className="col-unit">m³</td>
                  <td className="col-figure">
                    <CountUp value={Math.round(result.flood)} />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-left font-normal">
                    With drip
                  </th>
                  <td className="col-unit">m³</td>
                  <td className="col-figure">
                    <CountUp value={Math.round(result.drip)} />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-left font-medium">
                    Water saved
                  </th>
                  <td className="col-unit">m³ · {result.savedPct}%</td>
                  <td className="col-figure font-medium">
                    <CountUp value={Math.round(result.saved)} />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-left font-normal">
                    Pumping cost saved
                  </th>
                  <td className="col-unit">₹ / season</td>
                  <td className="col-figure">
                    <CountUp value={Math.round(result.money)} />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={waLink(message)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ink w-full sm:w-auto"
              >
                Send me this estimate
                <Icon name="arrow-right" className="h-4 w-4" strokeWidth={1.6} />
              </a>
              <a href={SITE.phoneHref} className="tap text-[0.9375rem] font-medium text-ink">
                <span className="link-quiet">Or call {SITE.phoneDisplay}</span>
              </a>
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
      </div>
    </section>
  );
}
