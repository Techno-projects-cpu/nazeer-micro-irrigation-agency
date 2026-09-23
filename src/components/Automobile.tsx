import Image from "next/image";
import { AUTOMOBILE_POINTS, SITE } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Automobile() {
  return (
    <section id="automobile" className="section scroll-mt-24">
      <div className="shell">
        <SectionHeading
          index="07"
          label="Also at the shop"
          title="Nazeer Automobile Agency."
          lead="A farmer's motorbike is more than transport — it is how you reach the field, carry your produce and meet your market. So we stock genuine spares at fair prices, with the same honesty that built our irrigation name."
        />

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <Reveal>
            <ol className="hairline-b">
              {AUTOMOBILE_POINTS.map((point, index) => (
                <li
                  key={point.title}
                  className="hairline-t grid gap-x-8 gap-y-3 py-6 md:grid-cols-[3.5rem_1fr] md:py-7"
                >
                  <span className="label pt-1.5">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[0.9375rem] font-medium text-ink">{point.title}</h3>
                    <p className="mt-2 max-w-[30rem] text-[0.9375rem] leading-relaxed text-ink-soft">
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <a href={SITE.phoneHref} className="tap mt-8 text-[0.9375rem] font-medium text-moss">
              <span className="link-quiet">Call to check part availability</span>
            </a>
          </Reveal>

          <Reveal delay={90}>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/automobile.jpg"
                  alt="Motorbike spare parts on shelves — chains, sprockets and boxed components"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="label mt-4">
                Spares counter · under the same roof as the irrigation shop
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
