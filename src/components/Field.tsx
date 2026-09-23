import { PLATES } from "@/data/content";
import { Plate } from "./Plate";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** 03 — the one dark band. Plates, ruled and captioned, on night. */
export function Field() {
  return (
    <section id="field" className="band band-night section scroll-mt-4">
      <div className="shell">
        <SectionHeading
          index="03"
          label="In the field"
          title="Systems you can see working."
          lead="A few of the installations our materials are running in today — sprinklers, polyhouses and drip lines across the delta."
        />

        <div className="g12 mt-14 md:mt-20">
          <Reveal className="md:col-span-7">
            <Plate
              plate={PLATES.sprinkler}
              aspect="aspect-[16/10]"
              sizes="(max-width: 767px) 100vw, 55vw"
              caption={false}
              zoom
            >
              <div className="scrim-plate absolute inset-x-0 bottom-0 p-5">
                <p className="label text-canvas">
                  Plate {PLATES.sprinkler.id} — {PLATES.sprinkler.caption}
                </p>
              </div>
            </Plate>
          </Reveal>

          <div className="flex flex-col gap-8 md:col-span-5">
            <Reveal delay={70}>
              <Plate
                plate={PLATES.polyhouse}
                aspect="aspect-[4/3]"
                sizes="(max-width: 767px) 100vw, 40vw"
              zoom
              />
            </Reveal>
            <Reveal delay={140}>
              <Plate
                plate={PLATES.drip}
                aspect="aspect-[4/3]"
                sizes="(max-width: 767px) 100vw, 40vw"
              zoom
              />
            </Reveal>
          </div>
        </div>

        <Reveal delay={60} className="mt-14 md:mt-20">
          <ul className="hairline-t grid gap-x-8 gap-y-6 pt-7 sm:grid-cols-3">
            <li>
              <p className="label text-ink">Designed for your field</p>
              <p className="mt-2.5 max-w-[20rem] text-[0.9375rem] leading-relaxed text-ink-soft">
                Lateral spacing and emitter choice calculated from your crop, soil and water source.
              </p>
            </li>
            <li>
              <p className="label text-ink">Installed by our team</p>
              <p className="mt-2.5 max-w-[20rem] text-[0.9375rem] leading-relaxed text-ink-soft">
                Laid, commissioned and tested before we hand the system over to you.
              </p>
            </li>
            <li>
              <p className="label text-ink">Supported for years</p>
              <p className="mt-2.5 max-w-[20rem] text-[0.9375rem] leading-relaxed text-ink-soft">
                Spares, extensions and maintenance from the same counter you bought it from.
              </p>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
