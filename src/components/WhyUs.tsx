"use client";

import { useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import { TESTIMONIALS, WHY_US } from "@/data/content";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Stars() {
  return (
    <div className="flex gap-1 text-sun-500" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, s) => (
        <svg key={s} viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="h-full rounded-3xl border border-pine-900/8 bg-paper-50 p-7 shadow-card sm:p-8">
      <Stars />
      <blockquote className="font-display mt-4 text-lg leading-snug text-pine-900 italic sm:text-xl">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-leaf-600 text-base font-semibold text-paper-50">
          {t.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-pine-900">{t.name}</span>
          <span className="block text-xs text-pine-700/80">{t.detail}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function WhyUs() {
  const [idx, setIdx] = useState(0);
  const n = TESTIMONIALS.length;

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) setIdx((v) => Math.min(v + 1, n - 1));
    else if (info.offset.x > 60) setIdx((v) => Math.max(v - 1, 0));
  };

  return (
    <section className="bg-paper-100 py-20 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            tone="light"
            kicker="Why choose us"
            title={<>The Nazeer difference.</>}
            lead="Deep agricultural knowledge plus an uncompromising stand on quality — here is why thousands of farmers make us their final stop."
          />
          <ul className="mt-9 space-y-3.5 sm:mt-10 sm:space-y-4">
            {WHY_US.map((w, i) => (
              <Reveal as="li" key={w} delay={i * 70}>
                <span className="flex items-start gap-3.5 rounded-2xl border border-pine-900/8 bg-paper-50 px-5 py-4 shadow-card transition hover:border-leaf-600/30">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-600 text-paper-50">
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-medium text-pine-900">{w}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.26em] text-pine-700 uppercase">
              <Icon name="star" className="h-4 w-4 text-sun-500" />
              Word from the fields
            </p>
          </Reveal>

          {/* Mobile: swipeable carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.14}
                onDragEnd={onDragEnd}
                animate={{ x: `${-idx * 100}%` }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              >
                {TESTIMONIALS.map((t) => (
                  <div key={t.name} className="w-full shrink-0 pr-1">
                    <Card t={t} />
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === idx ? "w-7 bg-leaf-600" : "w-2.5 bg-pine-900/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: stacked cards */}
          <div className="hidden flex-col gap-5 md:flex">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 110}>
                <div className="transition duration-300 hover:-translate-y-1">
                  <Card t={t} />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="text-xs text-pine-700/70">
              Sample testimonials shown for the redesign — swap in your customers&apos; real words any time.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
