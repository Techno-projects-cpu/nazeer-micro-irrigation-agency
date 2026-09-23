import { FAQS, SITE } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="section scroll-mt-24">
      <div className="shell">
        <SectionHeading
          index="09"
          label="Questions"
          title="Asked across our counter, answered here."
        />

        <div className="mt-14 lg:grid lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 md:mt-20">
          <Reveal className="hidden lg:block">
            <p className="max-w-[20rem] text-[0.9375rem] leading-relaxed text-ink-soft">
              Anything else on your mind? Call the shop on{" "}
              <a href={SITE.phoneHref} className="link-quiet font-medium text-ink">
                {SITE.phoneDisplay}
              </a>{" "}
              — or send your question on WhatsApp and we will reply the same day.
            </p>
          </Reveal>

          <Reveal delay={80} className="hairline-b">
            {FAQS.map((faq) => (
              <details key={faq.q} className="acc hairline-t">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="display-3 max-w-[34rem]">{faq.q}</h3>
                  <span aria-hidden="true" className="label mt-1.5 shrink-0">
                    <span data-marker="closed">+</span>
                    <span data-marker="open">–</span>
                  </span>
                </summary>
                <p className="max-w-[40rem] pb-7 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {faq.a}
                </p>
              </details>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
