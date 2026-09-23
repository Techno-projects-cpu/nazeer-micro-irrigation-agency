"use client";

import { useMemo, useState } from "react";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CROPS = [
  { id: "vegetables", label: "Vegetables", floodPerAcre: 3200 },
  { id: "chilli", label: "Chilli", floodPerAcre: 3000 },
  { id: "orchard", label: "Orchard / fruit trees", floodPerAcre: 3600 },
  { id: "sugarcane", label: "Sugarcane", floodPerAcre: 4800 },
  { id: "paddy", label: "Paddy", floodPerAcre: 5200 },
] as const;

const DRIP_RATIO = 0.4; // drip uses ~40% of flood water
const POWER_PER_M3 = 2.5; // ₹ per m³ of pumped water (indicative)

const inr = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN");

export function Calculator() {
  const [acres, setAcres] = useState(3);
  const [cropId, setCropId] = useState<(typeof CROPS)[number]["id"]>("vegetables");

  const r = useMemo(() => {
    const crop = CROPS.find((c) => c.id === cropId) ?? CROPS[0];
    const flood = crop.floodPerAcre * acres;
    const drip = flood * DRIP_RATIO;
    const saved = flood - drip;
    const money = saved * POWER_PER_M3;
    return { flood, drip, saved, money, savedPct: Math.round((1 - DRIP_RATIO) * 100) };
  }, [acres, cropId]);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -bottom-52 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-water-600/12 blur-[130px]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          kicker="Do the math"
          title={<>See what drip irrigation could save you.</>}
          lead="Slide to your field size, pick your crop, and watch a season of wasted water turn into savings. Indicative estimates — your free design visit makes them exact."
        />

        <Reveal delay={120} className="mx-auto mt-14 max-w-5xl">
          <div className="grid overflow-hidden rounded-3xl border border-paper-100/10 bg-pine-900 shadow-lift lg:grid-cols-[1fr_1.1fr]">
            {/* Controls */}
            <div className="border-b border-paper-100/10 p-8 sm:p-10 lg:border-r lg:border-b-0">
              <label htmlFor="acres" className="flex items-baseline justify-between text-sm font-medium text-paper-200">
                Field size
                <span className="font-display text-3xl font-semibold text-paper-50">
                  {acres} <span className="text-base font-normal text-paper-300">acre{acres > 1 ? "s" : ""}</span>
                </span>
              </label>
              <input
                id="acres"
                type="range"
                min={0.5}
                max={20}
                step={0.5}
                value={acres}
                onChange={(e) => setAcres(Number(e.target.value))}
                className="mt-5 w-full accent-leaf-400"
              />
              <div className="mt-2 flex justify-between font-mono text-[10px] text-paper-400">
                <span>0.5</span>
                <span>20</span>
              </div>

              <p className="mt-9 mb-3 text-sm font-medium text-paper-200">Crop</p>
              <div className="flex flex-wrap gap-2">
                {CROPS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCropId(c.id)}
                    aria-pressed={cropId === c.id}
                    className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                      cropId === c.id
                        ? "bg-water-500 text-pine-950"
                        : "border border-paper-100/15 text-paper-200 hover:border-water-400/60 hover:text-water-300"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <p className="mt-8 flex items-start gap-2.5 text-xs leading-relaxed text-paper-400">
                <Icon name="droplet" className="mt-0.5 h-4 w-4 shrink-0 text-water-400" />
                Assumes drip uses ~{Math.round(DRIP_RATIO * 100)}% of flood-irrigation
                water and pumping at ~{inr(POWER_PER_M3)} per m³.
              </p>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 gap-px bg-paper-100/10">
              <div className="bg-pine-900 p-7 sm:p-9">
                <p className="text-xs font-medium tracking-wide text-paper-400 uppercase">Flood water / season</p>
                <p className="font-display mt-2 text-[1.55rem] leading-tight font-semibold text-paper-300 sm:text-4xl">
                  {Math.round(r.flood).toLocaleString("en-IN")}
                  <span className="ml-1 text-sm font-normal text-paper-400">m³</span>
                </p>
              </div>
              <div className="bg-pine-900 p-7 sm:p-9">
                <p className="text-xs font-medium tracking-wide text-paper-400 uppercase">With drip / season</p>
                <p className="font-display mt-2 text-[1.55rem] leading-tight font-semibold text-water-300 sm:text-4xl">
                  {Math.round(r.drip).toLocaleString("en-IN")}
                  <span className="ml-1 text-sm font-normal text-paper-400">m³</span>
                </p>
              </div>
              <div className="bg-pine-900 p-7 sm:p-9">
                <p className="text-xs font-medium tracking-wide text-paper-400 uppercase">Water saved</p>
                <p className="font-display mt-2 text-[1.55rem] leading-tight font-semibold text-leaf-300 sm:text-4xl">
                  {Math.round(r.saved).toLocaleString("en-IN")}
                  <span className="ml-1 text-sm font-normal text-paper-400">m³ · {r.savedPct}%</span>
                </p>
              </div>
              <div className="bg-pine-900 p-7 sm:p-9">
                <p className="text-xs font-medium tracking-wide text-paper-400 uppercase">Pumping savings</p>
                <p className="font-display mt-2 text-[1.55rem] leading-tight font-semibold text-sun-300 sm:text-4xl">
                  {inr(r.money)}
                  <span className="ml-1 text-sm font-normal text-paper-400">/ season</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-center">
            {["+20–30% yield potential", "Less weed growth", "Fertigation-ready"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-paper-100/12 bg-pine-900/70 px-4 py-2 text-xs font-medium text-paper-200"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
