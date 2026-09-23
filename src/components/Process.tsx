"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROCESS } from "@/data/content";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="design" className="bg-paper-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            tone="light"
            kicker="Design expertise"
            title={<>Your farm, drawn into a system that pays for itself.</>}
            lead={
              <>
                What sets us apart is not just what we sell — it is the
                expertise behind every recommendation. Nazeer personally
                visits, studies and designs each system for your terrain,
                water source and crop.
              </>
            }
          />
          <Reveal delay={150} className="mt-10">
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              <Image
                src="/images/design-desk.jpg"
                alt="Hands drawing a farm irrigation layout on a field map beside a calculator and compass"
                width={1100}
                height={800}
                className="aspect-[4/3] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
              <div className="absolute right-4 bottom-4 rounded-2xl border border-paper-50/15 bg-pine-950/70 px-5 py-3.5 backdrop-blur-md">
                <p className="font-display text-base font-semibold text-paper-50">
                  Designed by Nazeer
                </p>
                <p className="text-xs text-paper-300">trusted by thousands of farms</p>
              </div>
            </div>
          </Reveal>
        </div>

        <ol className="relative space-y-6">
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.6, ease: [0.2, 0.6, 0.2, 1] }}
            className="absolute top-8 bottom-8 left-[27px] hidden w-px origin-top border-l-2 border-dashed border-pine-900/15 sm:block"
          />
          {PROCESS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 110} className="relative">
              <div className="group flex gap-5 rounded-3xl border border-pine-900/8 bg-paper-50 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-leaf-600/30 sm:p-7">
                <div className="relative hidden sm:block">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-pine-900 text-leaf-300">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-[0.24em] text-leaf-600 uppercase">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-semibold text-pine-900 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-pine-700 sm:text-[15px]">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal as="li" delay={440}>
            <div className="flex flex-wrap items-center gap-4 rounded-3xl bg-leaf-600 p-7 text-paper-50 shadow-lift sm:p-8">
              <div className="min-w-0 flex-1">
                <p className="font-display text-xl font-semibold sm:text-2xl">
                  Ready for a free field visit?
                </p>
                <p className="mt-1 text-sm text-leaf-100">
                  One call and the design process starts at your gate.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-paper-50 px-6 py-3 text-sm font-semibold text-pine-950 transition hover:bg-paper-200"
              >
                Book a visit
                <Icon name="arrow-right" className="h-4 w-4" strokeWidth={2.2} />
              </a>
            </div>
          </Reveal>
        </ol>
      </div>
    </section>
  );
}
