import { PLATES, PROCESS, SITE } from "@/data/content";
import { Icon } from "./icons";
import { Plate } from "./Plate";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** 05 — a 4/8 split: the drawing on the left, the method ruled out on the right. */
export function Process() {
  return (
    <section id="design" className="section scroll-mt-4">
      <div className="shell">
        <SectionHeading
          index="05"
          label="Design expertise"
          title="Your farm, drawn into a system that pays for itself."
          lead="What sets us apart is not only what we sell — it is the expertise behind every recommendation. Nazeer personally studies your terrain, water source and crop before anything is quoted."
        />

        <div className="g12 mt-14 md:mt-20">
          <Reveal className="md:col-span-4">
            <Plate
              plate={PLATES.desk}
              aspect="aspect-[4/3]"
              sizes="(max-width: 767px) 100vw, 30vw"
              zoom
            />
            <div className="hairline-t mt-8 pt-6">
              <p className="body-copy max-w-[24rem]">
                One call and the design process starts at your gate. The visit is free, and so is
                the drawing.
              </p>
              <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
                <a href="#visit" className="btn btn-ink w-full sm:w-auto">
                  Book a free field visit
                  <Icon name="arrow-right" className="h-4 w-4" strokeWidth={1.6} />
                </a>
                <a href={SITE.phoneHref} className="tap text-[0.9375rem] font-medium text-ink">
                  <span className="link-quiet">{SITE.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6">
            <ol>
              {PROCESS.map((step, index) => (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={index * 60}
                  className="hairline-t grid gap-x-8 gap-y-3 py-7 md:grid-cols-[5.5rem_1fr] md:py-9"
                >
                  <span className="label row-num pt-1.5">Step {String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="display-3">{step.title}</h3>
                    <p className="mt-3 max-w-[32rem] text-[0.9375rem] leading-relaxed text-ink-soft">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
