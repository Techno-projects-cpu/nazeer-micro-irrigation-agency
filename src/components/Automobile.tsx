import { AUTOMOBILE_POINTS, PLATES, SITE } from "@/data/content";
import { Plate } from "./Plate";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** 08 — a wide plate against a narrow ruled list. */
export function Automobile() {
  return (
    <section id="automobile" className="section scroll-mt-4">
      <div className="shell">
        <SectionHeading
          index="08"
          label="Also at the shop"
          title="Nazeer Automobile Agency."
          lead="A farmer's motorbike is more than transport — it is how you reach the field, carry your produce and meet your market. So we stock genuine spares at fair prices, with the same honesty that built our irrigation name."
        />

        <div className="g12 mt-14 md:mt-20">
          <Reveal className="md:col-span-7">
            <Plate
              plate={PLATES.automobile}
              aspect="aspect-[16/10]"
              sizes="(max-width: 767px) 100vw, 55vw"
              zoom
            />
          </Reveal>

          <div className="md:col-span-4 md:col-start-9">
            <ol>
              {AUTOMOBILE_POINTS.map((point, index) => (
                <Reveal
                  as="li"
                  key={point.title}
                  delay={index * 50}
                  className="hairline-t py-5 first:pt-0"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="label row-num">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-[0.9375rem] font-medium text-ink">{point.title}</h3>
                      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                        {point.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={220} className="hairline-t pt-6">
              <a
                href={SITE.phoneHref}
                className="tap text-[0.9375rem] font-medium text-ink"
              >
                <span className="link-quiet">Call to check part availability</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
