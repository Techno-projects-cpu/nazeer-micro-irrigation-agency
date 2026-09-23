import Image from "next/image";
import { PLATES, SITE } from "@/data/content";
import { Icon } from "./icons";
import { LineMask } from "./LineMask";

/**
 * The cover: a full-bleed plate with the headline reversed out of it.
 * Statement type is used here and once more, on the epigraph — nowhere else.
 */
export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="plate plate-settle absolute inset-0">
          <Image
            src={PLATES.hero.src}
            alt={PLATES.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="scrim-bottom absolute inset-0" aria-hidden="true" />
        <div className="scrim-top absolute inset-x-0 top-0 h-40" aria-hidden="true" />

        <div className="shell relative">
          <p className="label text-canvas/85">
            Micro irrigation · Godavari region · Since {SITE.since}
          </p>

          <h1 className="statement mt-6 max-w-[48rem] text-canvas">
            {/* Trailing spaces keep the accessible name readable — the line
                masks are block-level, so they are not rendered as gaps. */}
            <LineMask
              lines={[
                <>Every drop,{" "}</>,
                <>placed exactly{" "}</>,
                <>where the root{" "}</>,
                <>needs it.</>,
              ]}
            />
          </h1>

          <p className="lead mt-8 max-w-[31rem] text-canvas/85">
            Genuine, ISI-certified drip and sprinkler systems — with every layout drawn personally
            for your field by Nazeer.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-9">
            <a href="#visit" className="btn btn-canvas w-full sm:w-auto">
              Book a free field visit
              <Icon name="arrow-right" className="h-4 w-4" strokeWidth={1.6} />
            </a>
            <a
              href={SITE.phoneHref}
              className="tap justify-center text-[0.9375rem] font-medium text-canvas sm:justify-start"
            >
              <span className="link-quiet">
                Call now · {SITE.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Plate caption row — the running head of the almanac. */}
      <div className="rule-draw-once">
        <div className="shell flex flex-wrap items-baseline justify-between gap-x-10 gap-y-2 py-5">
          <p className="label label-ink">
            Plate {PLATES.hero.id} — {PLATES.hero.caption}
          </p>
          <div className="flex flex-wrap items-baseline gap-x-10 gap-y-1">
            <p className="label">{SITE.hours}</p>
            <a href={SITE.phoneHref} className="tap">
              <span className="label label-ink link-quiet">{SITE.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
