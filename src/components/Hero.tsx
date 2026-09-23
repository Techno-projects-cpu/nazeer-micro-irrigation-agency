"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/data/content";
import { Icon } from "./icons";

const EASE = [0.2, 0.6, 0.2, 1] as const;

const HEADLINE: { text: string; italic?: boolean }[] = [
  { text: "Every" },
  { text: "drop," },
  { text: "delivered" },
  { text: "exactly", italic: true },
  { text: "where" },
  { text: "the" },
  { text: "root" },
  { text: "needs" },
  { text: "it." },
];

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Parallax backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div style={reduce ? undefined : { y: bgY, scale: bgScale }} className="absolute inset-0">
          <Image
            src="/images/hero-field.jpg"
            alt="Lush green field in the Godavari delta watered by neat rows of drip irrigation at sunset"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-pine-950/80 via-pine-950/35 to-pine-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-950/70 via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
        <motion.div style={reduce ? undefined : { opacity: fade }} className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-paper-100/20 bg-pine-950/40 px-4 py-2 font-mono text-[10px] tracking-[0.22em] text-leaf-200 uppercase backdrop-blur-sm sm:text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-leaf-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf-400" />
            </span>
            Trusted since {SITE.since} · Godavari region
          </motion.p>

          <h1
            aria-label="Every drop, delivered exactly where the root needs it."
            className="font-display mt-6 text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-paper-50 sm:mt-7 sm:text-6xl lg:text-[4.4rem]"
          >
            {HEADLINE.map((w, i) => (
              <span key={`${w.text}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className={`inline-block ${w.italic ? "text-leaf-300 italic" : ""}`}
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.12 + i * 0.06, ease: EASE }}
                >
                  {w.text}
                  {"\u00A0"}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
            className="mt-5 max-w-xl text-base leading-relaxed text-paper-200 sm:mt-6 sm:text-lg"
          >
            {SITE.name} is your partner for premium micro irrigation — genuine
            materials, honest prices, and system designs drawn personally for
            your farm by Nazeer himself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="#products"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-leaf-500 px-7 py-3.5 text-base font-semibold text-pine-950 shadow-lift transition hover:bg-leaf-400"
            >
              Explore products
              <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2.4} />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="#design"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-paper-100/25 bg-pine-950/30 px-7 py-3.5 text-base font-semibold text-paper-100 backdrop-blur-sm transition hover:border-paper-100/50 hover:bg-pine-950/50"
            >
              <Icon name="pencil" className="h-4 w-4 text-water-300" />
              Free farm design
            </motion.a>
          </motion.div>

          {/* Mobile stat chips */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
            className="mt-7 flex flex-wrap gap-2.5 md:hidden"
          >
            {["60% less water", "20+ years", "10,000+ farmers"].map((t) => (
              <li
                key={t}
                className="rounded-full border border-paper-100/20 bg-pine-950/45 px-3.5 py-1.5 text-xs font-medium text-paper-100 backdrop-blur-sm"
              >
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Floating card (desktop only; chips replace it on mobile) */}
        <div className="pointer-events-none absolute right-6 bottom-28 left-4 sm:left-6 lg:right-8 lg:left-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
            className="pointer-events-auto ml-auto hidden w-64 rounded-2xl border border-paper-100/12 bg-pine-950/60 p-5 backdrop-blur-md md:block"
            style={reduce ? undefined : {}}
          >
            <div className="flex animate-float items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-water-500/15 text-water-300">
                <Icon name="droplet" className="h-5 w-5" />
                <span className="absolute -bottom-0.5 left-1/2 h-1.5 w-1 -translate-x-1/2 animate-drip rounded-full bg-water-300" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold text-paper-50">60%</p>
                <p className="text-xs text-paper-300">less water than flood irrigation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom meta bar (hidden on phones — the sticky action bar covers it) */}
      <div className="relative hidden border-t border-paper-100/10 bg-pine-950/55 backdrop-blur-md sm:block">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-4 text-sm text-paper-200 sm:px-6 lg:px-8">
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 transition hover:text-leaf-300">
            <Icon name="phone" className="h-4 w-4 text-leaf-400" />
            {SITE.phoneDisplay}
          </a>
          <span className="hidden items-center gap-2 sm:inline-flex">
            <Icon name="clock" className="h-4 w-4 text-leaf-400" />
            {SITE.hours}
          </span>
          <span className="hidden items-center gap-2 md:inline-flex">
            <Icon name="badge" className="h-4 w-4 text-leaf-400" />
            ISI-certified stock only
          </span>
          <a href="#story" className="group inline-flex items-center gap-2 font-medium text-paper-100">
            Our story
            <Icon name="arrow-down" className="h-4 w-4 animate-bounce text-leaf-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
