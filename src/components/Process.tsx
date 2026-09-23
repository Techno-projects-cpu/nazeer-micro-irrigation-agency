import Image from "next/image";
import { PROCESS, SITE } from "@/data/content";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="design" className="section scroll-mt-24">
      <div className="shell">
        <SectionHeading
          index="05"
          label="Design expertise"
          title="Your farm, drawn into a system that pays for itself."
          lead="What sets us apart is not only what we sell — it is the expertise behind every recommendation. Nazeer personally studies your terrain, water source and crop before anything is quoted."
        />

        <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <ol className="hairline-b">
            {PROCESS.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 60}
                className="hairline-t grid gap-x-8 gap-y-3 py-7 md:grid-cols-[6rem_1fr] md:py-9"
              >
                <span className="label pt-1.5">Step {String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="display-3">{step.title}</h3>
                  <p className="mt-3 max-w-[32rem] text-[0.9375rem] leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/design-desk.jpg"
                  alt="Hands drawing a farm irrigation layout on a field map beside a compass and calculator"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="label mt-4">Every layout drawn by hand, for your field</figcaption>
            </figure>

            <div className="hairline-t mt-8 pt-6">
              <p className="text-[1.0625rem] leading-relaxed text-ink-soft">
                One call and the design process starts at your gate.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href="#contact" className="btn btn-ink">
                  Book a free field visit
                  <Icon name="arrow-right" className="h-4 w-4" strokeWidth={1.6} />
                </a>
                <a href={SITE.phoneHref} className="tap text-[0.9375rem] font-medium text-ink">
                  <span className="link-quiet">{SITE.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
