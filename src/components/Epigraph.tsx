import type { CSSProperties } from "react";
import { EPIGRAPH, PLATES } from "@/data/content";
import { Plate } from "./Plate";
import { Reveal } from "./Reveal";

/**
 * The epigraph: the second and last use of statement type on the page, set
 * between two plates like the frontispiece of an almanac. On first view the
 * line rises word by word — the almanac's one theatrical moment.
 */
export function Epigraph() {
  const words = EPIGRAPH.quote.split(" ");

  return (
    <section aria-labelledby="epigraph-heading" className="section scroll-mt-4 pt-0 md:pt-0">
      <h2 id="epigraph-heading" className="sr-only">
        Epigraph
      </h2>
      <div className="shell">
        <div className="g12 items-center">
          <Reveal className="order-2 col-span-2 md:order-none md:col-span-3">
            <Plate
              plate={PLATES.drip}
              aspect="aspect-[3/4]"
              sizes="(max-width: 767px) 100vw, 22vw"
              caption={false}
              decorative
              zoom
            />
          </Reveal>

          <Reveal delay={80} className="order-1 col-span-4 md:order-none md:col-span-6">
            <figure className="px-0 py-4 text-center md:px-8">
              <blockquote className="epigraph text-ink">
                {words.map((word, index) => (
                  <span
                    key={word + index}
                    className="word-rise"
                    style={{ "--wd": `${index * 45}ms` } as CSSProperties}
                  >
                    <span>
                      {index === 0 ? "“" : ""}
                      {word}
                      {index === words.length - 1 ? "”" : ""}{" "}
                    </span>
                  </span>
                ))}
              </blockquote>
              <figcaption className="label mt-8">{EPIGRAPH.attribution}</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={160} className="order-3 col-span-2 md:order-none md:col-span-3">
            <Plate
              plate={PLATES.sprinkler}
              aspect="aspect-[3/4]"
              sizes="(max-width: 767px) 100vw, 22vw"
              caption={false}
              decorative
              zoom
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
