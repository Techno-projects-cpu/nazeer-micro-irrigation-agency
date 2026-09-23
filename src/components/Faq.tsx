"use client";

import { useState } from "react";
import { FAQS } from "@/data/content";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          kicker="Good questions"
          title={<>Asked across our counter, answered here.</>}
        />

        <div className="mt-12 space-y-3.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-leaf-500/40 bg-pine-900"
                      : "border-paper-100/10 bg-pine-900/50 hover:border-paper-100/25"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-paper-50 sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                        isOpen
                          ? "rotate-45 border-leaf-400 text-leaf-300"
                          : "border-paper-100/20 text-paper-300"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-paper-300 sm:text-[15px]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <p className="text-sm text-paper-300">
            Something else on your mind?{" "}
            <a href="#contact" className="font-semibold text-leaf-300 underline-offset-4 hover:underline">
              Ask us directly
            </a>{" "}
            <Icon name="arrow-down" className="inline h-3.5 w-3.5" />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
