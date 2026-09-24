import { FAQS, SITE } from "@/data/content";
import { Reveal } from "./Reveal";

/** Questions, kept on native `<details>` so they work without JavaScript. */
export function Faq() {
  return (
    <Reveal className="mt-20 md:mt-28">
      <div className="pt-5">
        <div className="flex items-baseline justify-between gap-6">
          <p className="label label-ink">Questions</p>
          <p className="label">Asked at the counter</p>
        </div>

        <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-12">
          <p className="body-copy max-w-[20rem] md:col-span-4">
            Anything else on your mind? Call the shop on{" "}
            <a href={SITE.phoneHref} className="link-quiet font-medium text-ink">
              {SITE.phoneDisplay}
            </a>{" "}
            — or send your question on WhatsApp and we will reply the same day.
          </p>

          <div className="md:col-span-7 md:col-start-6">
            {FAQS.map((faq) => (
              <details key={faq.q} className="acc first:pt-0">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="display-3 max-w-[32rem]">{faq.q}</h3>
                  <span aria-hidden="true" className="label mt-1 shrink-0">
                    <span data-marker="closed">+</span>
                    <span data-marker="open">–</span>
                  </span>
                </summary>
                <p className="max-w-[38rem] pb-7 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
