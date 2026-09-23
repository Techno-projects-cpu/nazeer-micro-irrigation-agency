"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PRODUCT_FILTERS, PRODUCTS, SITE, type ProductTag } from "@/data/content";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Products() {
  const [filter, setFilter] = useState<"all" | ProductTag>("all");

  const visible = useMemo(
    () => (filter === "all" ? PRODUCTS : PRODUCTS.filter((product) => product.tags.includes(filter))),
    [filter],
  );

  return (
    <section id="range" className="section scroll-mt-24">
      <div className="shell">
        <SectionHeading
          index="03"
          label="The range"
          title="Everything your farm needs, under one roof."
          lead="From drip tape and filters to polyhouse frames and mulch film — a full range from manufacturers we have worked with for years."
        />

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 md:mt-14">
          {PRODUCT_FILTERS.map((option) => {
            const active = filter === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setFilter(option.id)}
                aria-pressed={active}
                className="tap"
              >
                <span
                  data-active={active}
                  className={`label link-quiet ${active ? "label-ink" : ""}`}
                >
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>

        <ul className="hairline-b mt-8 md:mt-12">
          {visible.map((product) => {
            const number = PRODUCTS.indexOf(product) + 1;
            return (
              <li key={product.title} className="hairline-t">
                <Reveal className="grid gap-x-8 gap-y-5 py-8 md:grid-cols-[3.5rem_1fr_1fr] md:py-10">
                  <span className="label pt-1.5">{String(number).padStart(2, "0")}</span>

                  <div>
                    <h3 className="display-3">{product.title}</h3>
                    <p className="mt-3 max-w-[26rem] text-[0.9375rem] leading-relaxed text-ink-soft">
                      {product.blurb}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-2">
                      {product.items.map((item) => (
                        <li
                          key={item}
                          className="font-mono text-[0.75rem] leading-relaxed text-ink-soft"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="tap mt-4 gap-2 text-[0.875rem] font-medium text-moss"
                    >
                      <span className="link-quiet inline-flex items-center gap-2">
                        Ask for today&apos;s price
                        <Icon name="arrow-right" className="h-3.5 w-3.5" strokeWidth={1.6} />
                      </span>
                    </a>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal delay={80} className="mt-16 md:mt-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/shop-shelves.jpg"
                  alt="Organised shelves of pipes, filters and fittings inside the Nazeer shop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="label mt-4">
                {SITE.name} · Godavari region
              </figcaption>
            </figure>

            <div>
              <p className="label label-moss">Walk the aisles</p>
              <h3 className="display-2 mt-5 max-w-[24rem]">
                A hundred categories, on the shelves right now.
              </h3>
              <p className="lead mt-5 max-w-[30rem]">
                Come in with your field measurements — or a photo of your plot — and leave with a
                plan and a price in the same visit.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="tap gap-2 text-[0.9375rem] font-medium text-ink"
                >
                  <span className="link-quiet inline-flex items-center gap-2">
                    <Icon name="pin" className="h-4 w-4" strokeWidth={1.6} />
                    Get directions to the shop
                  </span>
                </a>
                <a href={SITE.phoneHref} className="tap text-[0.9375rem] font-medium text-ink">
                  <span className="link-quiet">{SITE.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
