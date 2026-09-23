"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PRODUCT_FILTERS, PRODUCTS, SITE, type ProductTag } from "@/data/content";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Products() {
  const [filter, setFilter] = useState<"all" | ProductTag>("all");

  const visible = useMemo(
    () => (filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  return (
    <section id="products" className="bg-pine-900/40 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Our range"
          title={<>Everything your farm needs, under one roof.</>}
          lead="From drip tapes to polyhouse frames — a comprehensive range from leading manufacturers, checked by us before it reaches your field."
        />

        <Reveal delay={100} className="no-scrollbar -mx-4 mt-8 flex gap-2.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pt-2">
          {PRODUCT_FILTERS.map((f) => (
            <motion.button
              key={f.id}
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                filter === f.id
                  ? "bg-leaf-500 text-pine-950 shadow-card"
                  : "border border-paper-100/15 text-paper-200 hover:border-leaf-500/50 hover:text-leaf-300"
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </Reveal>

        <p className="mt-4 flex items-center gap-2 text-xs text-paper-400 md:hidden">
          <Icon name="arrow-right" className="h-3.5 w-3.5" />
          Swipe to browse
        </p>

        <motion.ul
          layout
          className="no-scrollbar -mx-4 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pt-2 pb-6 sm:gap-5 md:mx-0 md:mt-10 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.li
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.92, y: 26 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
                className="w-[82%] shrink-0 snap-center sm:w-[52%] md:w-auto md:shrink"
              >
                <article className="group flex h-full flex-col rounded-3xl border border-paper-100/10 bg-pine-900 p-6 transition duration-300 hover:border-water-500/40 hover:shadow-lift sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-water-500/12 text-water-300 transition group-hover:scale-105 group-hover:bg-water-500/20">
                      <Icon name={p.icon} className="h-5.5 w-5.5" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-paper-400 uppercase">
                      {String(PRODUCTS.indexOf(p) + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-xl font-semibold text-paper-50">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper-300">{p.blurb}</p>
                  <ul className="mt-5 space-y-2 border-t border-paper-100/8 pt-5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[13px] text-paper-200">
                        <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-leaf-400" strokeWidth={2.6} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-semibold text-leaf-300 transition hover:text-leaf-200"
                  >
                    Ask for today&apos;s price
                    <Icon name="arrow-right" className="h-4 w-4" strokeWidth={2.2} />
                  </a>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <Reveal delay={120} className="mt-10 md:mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-paper-100/10">
            <Image
              src="/images/shop-shelves.jpg"
              alt="Organised shelves of pipes, filters and fittings inside the Nazeer shop"
              width={1600}
              height={520}
              className="h-64 w-full object-cover sm:h-64"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pine-950/90 via-pine-950/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center gap-3 p-6 sm:p-10">
              <p className="font-mono text-[11px] tracking-[0.26em] text-leaf-300 uppercase">
                Walk the aisles
              </p>
              <h3 className="font-display max-w-md text-2xl font-semibold text-paper-50 sm:text-3xl">
                100+ categories on the shelves right now.
              </h3>
              <motion.a
                whileTap={{ scale: 0.97 }}
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-paper-50 px-6 py-3 text-sm font-semibold text-pine-950 transition hover:bg-paper-200"
              >
                <Icon name="pin" className="h-4 w-4" />
                Get directions to the shop
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
