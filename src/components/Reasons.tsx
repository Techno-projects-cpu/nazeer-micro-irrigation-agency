import { TESTIMONIALS, WHY_US } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** 09 — the reasons, ruled left; the word from the fields, set right. */
export function Reasons() {
  return (
    <section id="why" className="section scroll-mt-4">
      <div className="shell">
        <SectionHeading
          index="09"
          label="Why farmers call us"
          title="The Nazeer difference."
          lead="Deep knowledge of the delta's soil and water, plus an uncompromising stand on quality — this is why farmers make us their last stop."
        />

        <div className="g12 mt-14 md:mt-20">
          <Reveal className="md:col-span-5">
            <ol>
              {WHY_US.map((reason, index) => (
                <li
                  key={reason}
                  className="hairline-t grid grid-cols-[2.5rem_1fr] items-baseline gap-x-5 py-5"
                >
                  <span className="label row-num">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[0.9375rem] leading-relaxed text-ink">{reason}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={80}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="label label-ink">Word from the fields</p>
                <p className="label">Placeholders</p>
              </div>
            </Reveal>

            <ol>
              {TESTIMONIALS.map((testimonial, index) => (
                <Reveal
                  as="li"
                  key={testimonial.name}
                  delay={index * 70}
                  className="hairline-t py-7"
                >
                  <blockquote className="font-display max-w-[32rem] text-[1.0625rem] leading-snug text-ink italic sm:text-[1.1875rem]">
                    {testimonial.quote}
                  </blockquote>
                  <p className="label mt-4">
                    {testimonial.name} · {testimonial.detail}
                  </p>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={220} className="hairline-t pt-6">
              <p className="fine max-w-[32rem]">
                The three quotes above are sample placeholders written for the redesign, not
                customer words. Real testimonials go here once collected, with permission.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
