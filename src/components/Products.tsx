"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PLATES, PRODUCT_FILTERS, PRODUCTS, SITE, type Product, type ProductTag } from "@/data/content";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "./icons";
import { Plate } from "./Plate";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Every distinct plate the catalogue points at, in first-use order. */
const PLATE_IDS = Array.from(new Set(PRODUCTS.map((product) => product.plate)));

/**
 * 04 — the catalogue as a specimen table.
 *
 * Desktop (1024px+) keeps a fixed plate area beside the rows: pointing at a row
 * crossfades its photograph into that area over 300ms. Touch devices get an
 * inline plate on every row instead. Plates are mounted lazily — a photograph is
 * only added to the stack the first time its row is pointed at.
 */
export function Products() {
  const [filter, setFilter] = useState<"all" | ProductTag>("all");
  const [activeTitle, setActiveTitle] = useState(PRODUCTS[0].title);
  const [seen, setSeen] = useState<string[]>(() => [PRODUCTS[0].plate]);

  const visible = useMemo(
    () => (filter === "all" ? PRODUCTS : PRODUCTS.filter((product) => product.tags.includes(filter))),
    [filter],
  );

  const active = visible.find((product) => product.title === activeTitle) ?? visible[0] ?? PRODUCTS[0];

  const activate = (product: Product) => {
    setActiveTitle(product.title);
    setSeen((previous) =>
      previous.includes(product.plate) ? previous : [...previous, product.plate],
    );
  };

  return (
    <section id="range" className="section scroll-mt-4">
      <div className="shell">
        <SectionHeading
          index="04"
          label="The range"
          title="Everything your farm needs, under one roof."
          lead="From drip tape and filters to polyhouse frames and mulch film — a full range from manufacturers we have worked with for years."
        />

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-7">
            <Reveal className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {PRODUCT_FILTERS.map((option) => {
                const isActive = filter === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFilter(option.id)}
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
            </Reveal>

            <ul className="mt-8">
              {visible.map((product, index) => {
                const plate = PLATES[product.plate];
                // Touch rows repeat a photograph only when it changes, so two
                // rows sharing a plate don't print the same picture twice.
                const showPlate = index === 0 || visible[index - 1].plate !== product.plate;
                const number = String(PRODUCTS.indexOf(product) + 1).padStart(2, "0");
                return (
                  <li
                    key={product.title}
                    className="hairline-t last:border-b last:border-hairline"
                    onPointerEnter={() => activate(product)}
                  >
                    <div className="grid gap-x-6 gap-y-4 py-7 md:grid-cols-[2.5rem_1.05fr_1fr] md:gap-x-8 md:py-8 lg:grid-cols-[2.5rem_1.05fr_1fr_3.25rem]">
                      <div className="flex items-baseline gap-4 md:block">
                        <span className="label row-num block pt-1.5 text-ink">{number}</span>
                        <span className="label md:hidden">Pl. {plate.id}</span>
                      </div>

                      <div>
                        <h3 className="display-3">{product.title}</h3>
                        <p className="mt-2.5 max-w-[24rem] text-[0.9375rem] leading-relaxed text-ink-soft">
                          {product.blurb}
                        </p>
                      </div>

                      <div>
                        <ul className="space-y-1.5">
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
                          href={waLink(
                            `Hello Nazeer Micro Irrigation! I would like to know today's price and availability for: ${product.title}.`,
                          )}
                          target="_blank"
                          rel="noreferrer"
                          onFocus={() => activate(product)}
                          className="tap mt-3 gap-2 text-[0.875rem] font-medium text-ink"
                        >
                          <span className="link-quiet inline-flex items-center gap-2">
                            Ask for today&apos;s price
                            <Icon name="arrow-right" className="h-3.5 w-3.5" strokeWidth={1.6} />
                          </span>
                        </a>
                      </div>

                      <span className="label hidden pt-1.5 text-right lg:block">
                        Pl. {plate.id}
                      </span>
                    </div>

                    {/* Touch: each row carries its plate (unless the row above just showed it). */}
                    {showPlate ? (
                      <div className="pb-7 lg:hidden">
                        <Plate
                          plate={plate}
                          aspect="aspect-[16/9]"
                          sizes="(max-width: 1023px) 100vw, 0vw"
                          caption={false}
                          decorative
                        />
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop: the fixed plate area the rows point into. */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="plate crossfade aspect-[4/3]">
                {PLATE_IDS.filter((id) => seen.includes(id)).map((id) => (
                  <Image
                    key={id}
                    src={PLATES[id].src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 34vw, 0vw"
                    data-on={active.plate === id}
                    className="object-cover"
                  />
                ))}
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <span className="label label-ink">Plate {PLATES[active.plate].id}</span>
                <span className="label text-right">{PLATES[active.plate].caption}</span>
              </div>
            </div>
          </div>
        </div>

        <Reveal delay={80} className="mt-20 md:mt-28">
          <div className="hairline-t pt-5">
            <div className="grid gap-x-8 gap-y-8 md:grid-cols-12 md:pt-5">
              <div className="md:col-span-7">
                <Plate
                  plate={PLATES.shelves}
                  aspect="aspect-[16/10]"
                  sizes="(max-width: 767px) 100vw, 55vw"
                  zoom
                />
              </div>
              <div className="md:col-span-5">
                <p className="label label-moss">Walk the aisles</p>
                <h3 className="display-2 mt-5 max-w-[22rem]">
                  A hundred categories, on the shelves right now.
                </h3>
                <p className="lead mt-5 max-w-[28rem]">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
