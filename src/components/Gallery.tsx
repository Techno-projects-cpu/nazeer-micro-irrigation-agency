import Image from "next/image";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section aria-label="Systems in the field" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="flex items-center gap-2 text-xs text-paper-400 md:hidden">
            <Icon name="arrow-right" className="h-3.5 w-3.5" />
            Swipe through the fields
          </p>
        </Reveal>
        <div className="no-scrollbar -mx-4 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pt-2 pb-6 md:mx-0 md:mt-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          <Reveal className="w-[82%] shrink-0 snap-center sm:w-[55%] md:w-auto md:shrink">
            <figure className="group relative overflow-hidden rounded-3xl border border-paper-100/10">
              <Image
                src="/images/sprinkler.jpg"
                alt="Micro sprinkler throwing a fine backlit mist over a vegetable crop"
                width={1000}
                height={1200}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 82vw, 33vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-950/90 to-transparent p-5 pt-16 sm:p-6">
                <p className="font-mono text-[10px] tracking-[0.24em] text-water-300 uppercase">
                  Uniform coverage
                </p>
                <p className="font-display mt-1 text-lg font-semibold text-paper-50">
                  Micro-sprinklers at work
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={110} className="w-[82%] shrink-0 snap-center sm:w-[55%] md:w-auto md:shrink">
            <figure className="group relative overflow-hidden rounded-3xl border border-paper-100/10">
              <Image
                src="/images/polyhouse.jpg"
                alt="White polyhouse greenhouse with rows of crops on raised beds inside"
                width={1000}
                height={1200}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 82vw, 33vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-950/90 to-transparent p-5 pt-16 sm:p-6">
                <p className="font-mono text-[10px] tracking-[0.24em] text-leaf-300 uppercase">
                  Protected cultivation
                </p>
                <p className="font-display mt-1 text-lg font-semibold text-paper-50">
                  Polyhouses, built & clad
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={220} className="w-[82%] shrink-0 snap-center sm:w-[55%] md:w-auto md:shrink">
            <div className="flex aspect-[4/5] flex-col justify-between rounded-3xl bg-gradient-to-br from-leaf-600 to-water-600 p-6 shadow-lift sm:p-7">
              <Icon name="droplet" className="h-8 w-8 text-paper-50/90" />
              <div>
                <p className="font-display text-6xl font-semibold text-paper-50">60%</p>
                <p className="mt-2 text-[15px] leading-snug font-medium text-leaf-100">
                  of irrigation water saved when fields move from flooding to
                  drip — water that stays in your pocket and your soil.
                </p>
              </div>
              <a
                href="#design"
                className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-pine-950/25 px-5 py-2.5 text-sm font-semibold text-paper-50 backdrop-blur-sm transition hover:bg-pine-950/40"
              >
                Get your free design
                <Icon name="arrow-right" className="h-4 w-4" strokeWidth={2.2} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
