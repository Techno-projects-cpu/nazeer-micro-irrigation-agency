import Image from "next/image";
import { SITE } from "@/data/content";
import { Icon } from "./icons";
import { LineMask } from "./LineMask";

const FACTS = [
  { label: `Since ${SITE.since}`, body: "Two decades of hands-on work in the Godavari delta." },
  { label: "ISI-certified", body: "Only genuine, tested materials reach our shelves." },
  { label: "Free design visit", body: "Six days a week — Monday to Saturday, 9 to 7." },
];

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24">
      <div className="shell pt-32 pb-16 md:pt-44 md:pb-24">
        <p className="label label-moss">Micro irrigation · Since {SITE.since}</p>

        <h1 className="display-1 mt-7 max-w-[40rem]">
          <LineMask
            lines={[
              <>Every drop,</>,
              <>
                placed <em className="text-moss italic">exactly</em>
              </>,
              <>where the root</>,
              <>needs it.</>,
            ]}
          />
        </h1>

        <p className="lead mt-8 max-w-[33rem]">
          Genuine, ISI-certified drip and sprinkler systems — with every layout drawn personally for
          your field by Nazeer.
        </p>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-10">
          <a href="#range" className="btn btn-ink w-full sm:w-auto">
            Explore the range
            <Icon name="arrow-right" className="h-4 w-4" strokeWidth={1.6} />
          </a>
          <a href="#contact" className="tap text-[0.9375rem] font-medium text-ink">
            <span className="link-quiet">Book a free design visit</span>
          </a>
        </div>
      </div>

      <div className="shell">
        <ul className="hairline-t hairline-b grid gap-6 py-7 sm:grid-cols-3 sm:gap-10">
          {FACTS.map((fact) => (
            <li key={fact.label}>
              <p className="label label-ink">{fact.label}</p>
              <p className="mt-2.5 max-w-[22rem] text-[0.9375rem] leading-relaxed text-ink-soft">
                {fact.body}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <figure className="mt-14 md:mt-20">
        <div className="relative aspect-[16/11] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src="/images/hero-field.jpg"
            alt="Rows of drip-irrigated crops running to the horizon at golden hour in the Godavari delta"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="shell mt-4 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <span className="label">Drip lines at work · Godavari delta</span>
          <span className="label">10,000+ farmers served</span>
        </figcaption>
      </figure>
    </section>
  );
}
