import Image from "next/image";
import { AUTOMOBILE_POINTS, SITE } from "@/data/content";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";

export function Automobile() {
  return (
    <section id="automobile" className="bg-pine-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-sun-500/20 bg-gradient-to-br from-pine-900 via-pine-900 to-[#1d1608] shadow-lift">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="relative min-h-[320px]">
                <Image
                  src="/images/automobile.jpg"
                  alt="Motorbike spare parts shop with shelves of chains, sprockets and boxed components"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/70 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-pine-900" />
                <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-sun-400 px-4 py-2 font-mono text-[10px] font-semibold tracking-[0.2em] text-pine-950 uppercase">
                  <Icon name="bike" className="h-4 w-4" strokeWidth={2.2} />
                  New venture
                </span>
              </div>

              <div className="p-8 sm:p-12">
                <p className="font-mono text-[11px] tracking-[0.28em] text-sun-300 uppercase">
                  Nazeer Automobile Agency
                </p>
                <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-paper-50 text-balance sm:text-4xl">
                  Keeping farmers on the move.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-paper-300">
                  A farmer&apos;s motorbike is more than transport — it is how you
                  reach your field, carry your produce and meet your market. So
                  we now stock genuine motorbike spares at fair prices, with the
                  same honesty that built our irrigation name.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {AUTOMOBILE_POINTS.map((p) => (
                    <div
                      key={p.title}
                      className="rounded-2xl border border-paper-100/10 bg-pine-950/40 p-5 transition hover:border-sun-400/40"
                    >
                      <Icon name={p.icon} className="h-5 w-5 text-sun-300" />
                      <h3 className="mt-3 text-[15px] font-semibold text-paper-50">{p.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-paper-300">{p.body}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={SITE.phoneHref}
                  className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-sun-400 px-6 py-3 text-sm font-semibold text-pine-950 transition hover:bg-sun-300"
                >
                  <Icon name="phone" className="h-4 w-4" strokeWidth={2.2} />
                  Check part availability
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
