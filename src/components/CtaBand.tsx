import { SITE } from "@/data/content";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";

/**
 * The one moss band on the page. It sits directly after the ledger, at the
 * moment a farmer has just seen their own saving.
 */
export function CtaBand() {
  return (
    <section className="band band-moss" aria-labelledby="cta-heading">
      <div className="shell py-16 md:py-24">
        <Reveal>
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="label text-canvas/85">Free, and worth the visit</p>
              <h2 id="cta-heading" className="display-2 mt-5 max-w-[26rem]">
                We walk your field, draw the layout and price it the same day.
              </h2>
            </div>
            <div className="md:col-span-5">
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <a href="#visit" className="btn btn-canvas w-full sm:w-auto">
                  Book a free field visit
                  <Icon name="arrow-right" className="h-4 w-4" strokeWidth={1.6} />
                </a>
                <a href={SITE.phoneHref} className="btn btn-line w-full sm:w-auto">
                  <Icon name="phone" className="h-4 w-4" strokeWidth={1.8} />
                  {SITE.phoneDisplay}
                </a>
              </div>
              <p className="label mt-7">{SITE.hours} · Sunday closed</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
