import { TESTIMONIALS, WHY_US } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Reasons() {
  return (
    <section id="why" className="section scroll-mt-24">
      <div className="shell">
        <SectionHeading
          index="08"
          label="Why farmers call us"
          title="The Nazeer difference."
          lead="Deep knowledge of the delta's soil and water, plus an uncompromising stand on quality — this is why farmers make us their last stop."
        />

        <div className="mt-14 grid gap-16 md:mt-20 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <ol className="hairline-b">
              {WHY_US.map((reason, index) => (
                <li
                  key={reason}
                  className="hairline-t grid grid-cols-[3rem_1fr] gap-x-4 py-5 md:grid-cols-[3.5rem_1fr] md:gap-x-8"
                >
                  <span className="label pt-0.5">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[0.9375rem] text-ink">{reason}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={90}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="label label-ink">Word from the fields</p>
              <p className="label">Placeholder</p>
            </div>

            <ol className="hairline-b mt-6">
              {TESTIMONIALS.map((testimonial) => (
                <li key={testimonial.name} className="hairline-t py-7">
                  <blockquote className="font-display max-w-[32rem] text-[1.125rem] leading-snug text-ink italic sm:text-[1.25rem]">
                    {testimonial.quote}
                  </blockquote>
                  <p className="label mt-4">
                    {testimonial.name} · {testimonial.detail}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-6 max-w-[32rem] text-[0.8125rem] leading-relaxed text-ink-faint">
              The three quotes above are sample placeholders for the redesign — real customer words
              go here once collected, with permission.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
