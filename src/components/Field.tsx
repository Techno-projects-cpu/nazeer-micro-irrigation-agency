import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SHOTS = [
  {
    src: "/images/sprinkler.jpg",
    alt: "Micro sprinkler throwing a fine backlit mist over a vegetable crop",
    label: "Uniform coverage",
    caption: "Micro-sprinklers in a vegetable field.",
  },
  {
    src: "/images/polyhouse.jpg",
    alt: "White polyhouse with rows of crops growing on raised beds inside",
    label: "Protected cultivation",
    caption: "Polyhouses, framed and clad by our team.",
  },
  {
    src: "/images/drip-closeup.jpg",
    alt: "Close-up of a drip emitter releasing a single droplet at the root zone",
    label: "Precise delivery",
    caption: "One emitter, one plant, season after season.",
  },
];

export function Field() {
  return (
    <section id="field" className="section scroll-mt-24">
      <div className="shell">
        <SectionHeading
          index="04"
          label="In the field"
          title="Systems you can see working."
          lead="A few of the installations our materials are running in today — sprinklers, polyhouses and drip lines across the delta."
        />

        <ul className="mt-14 grid gap-12 md:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SHOTS.map((shot, index) => (
            <Reveal as="li" key={shot.src} delay={index * 80}>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4">
                  <span className="label label-moss">{shot.label}</span>
                  <span className="mt-2 block text-[0.9375rem] text-ink-soft">{shot.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
