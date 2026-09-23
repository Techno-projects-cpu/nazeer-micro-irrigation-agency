"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { QUALITY } from "@/data/content";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const BARS = [
  { label: "Flood irrigation", width: "100%", tone: "bg-paper-400/70" },
  { label: "Sprinklers", width: "68%", tone: "bg-water-400" },
  { label: "Drip (our systems)", width: "40%", tone: "bg-leaf-400" },
];

export function Quality() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-leaf-600/15 blur-[120px]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="Uncompromising quality"
            title={<>Only the finest materials touch your fields.</>}
            lead="Quality is not a promise here — it is our identity. Every product is hand-picked for durability, efficiency and season-after-season performance."
          />
          <Reveal delay={150}>
            <p className="inline-flex items-center gap-2 rounded-full border border-leaf-500/30 bg-leaf-500/10 px-5 py-2.5 text-sm font-semibold text-leaf-300">
              <Icon name="badge" className="h-4 w-4" />
              100% genuine stock
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {/* Water comparison feature card */}
          <Reveal className="md:col-span-2 xl:row-span-2" >
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-paper-100/10 bg-pine-900">
              <div className="relative">
                <Image
                  src="/images/drip-closeup.jpg"
                  alt="Close-up of a drip emitter releasing a single water droplet"
                  width={1200}
                  height={700}
                  className="aspect-[16/9] w-full object-cover md:aspect-[16/7] xl:aspect-auto xl:h-64"
                  sizes="(max-width: 1280px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-900 via-pine-900/20 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-paper-50">
                  Water is your money. We stop wasting both.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-300 sm:text-[15px]">
                  Relative water use per season for the same crop. A properly
                  designed drip system delivers moisture to the root zone —
                  not to the weeds between rows.
                </p>
                <div className="mt-7 space-y-5">
                  {BARS.map((b, i) => (
                    <div key={b.label}>
                      <div className="mb-2 flex items-baseline justify-between text-xs">
                        <span className="font-medium text-paper-200">{b.label}</span>
                        <span className="font-mono text-paper-400">{b.width}</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-pine-800">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, margin: "-10% 0px" }}
                          transition={{ duration: 1.1, delay: 0.2 + i * 0.18, ease: [0.2, 0.7, 0.2, 1] }}
                          className={`h-full origin-left rounded-full ${b.tone}`}
                          style={{ width: b.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-auto pt-7 text-xs text-paper-400">
                  Indicative comparison — your exact savings depend on crop, soil and system design.
                </p>
              </div>
            </div>
          </Reveal>

          {QUALITY.map((q, i) => (
            <Reveal key={q.title} delay={i * 90} className={i >= 2 ? "md:col-span-2 xl:col-span-1" : ""}>
              <div className="group h-full rounded-3xl border border-paper-100/10 bg-pine-900/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-leaf-500/40 hover:bg-pine-850">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-500/12 text-leaf-300 transition group-hover:bg-leaf-500/20">
                  <Icon name={q.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-xl font-semibold text-paper-50">{q.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-paper-300">{q.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
