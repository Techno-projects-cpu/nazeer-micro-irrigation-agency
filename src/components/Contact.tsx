"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/data/content";
import { Icon, type IconName } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CARDS: { icon: IconName; title: string; lines: string[]; href?: string; cta?: string }[] = [
  {
    icon: "pin",
    title: "Visit the shop",
    lines: ["Nazeer Micro Irrigation Agency", "Godavari region, Andhra Pradesh"],
    href: SITE.mapsUrl,
    cta: "Get directions",
  },
  { icon: "phone", title: "Call us", lines: [SITE.phoneDisplay], href: SITE.phoneHref, cta: "Call now" },
  { icon: "mail", title: "Email", lines: [SITE.email], href: `mailto:${SITE.email}`, cta: "Write to us" },
  { icon: "clock", title: "Working hours", lines: [SITE.hours, "Sunday: closed"] },
];

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("Drip system for my field");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hello Nazeer Micro Irrigation! I am ${name || "a farmer"}${
      phone ? ` (${phone})` : ""
    }. I need: ${need}.`;
    window.open(`${SITE.whatsappHref}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  return (
    <section id="contact" className="bg-paper-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          align="center"
          kicker="Get in touch"
          title={<>We are here to help.</>}
          lead="Drop by for a free consultation, or send your requirement — we will help you design the perfect system for your farm."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-3xl border border-pine-900/8 bg-paper-50 p-7 shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-600/10 text-leaf-700">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold text-pine-900">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm break-all text-pine-700">
                    {l}
                  </p>
                ))}
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-leaf-700 hover:text-leaf-600"
                  >
                    {c.cta}
                    <Icon name="arrow-right" className="h-4 w-4" strokeWidth={2.2} />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-14">
          <div className="grid overflow-hidden rounded-[2rem] bg-pine-900 shadow-lift lg:grid-cols-[1fr_1.1fr]">
            <div className="relative flex flex-col justify-between gap-10 bg-gradient-to-br from-leaf-600 to-water-600 p-9 sm:p-12">
              <div>
                <p className="font-mono text-[11px] tracking-[0.26em] text-leaf-100 uppercase">
                  Ready to upgrade?
                </p>
                <h3 className="font-display mt-4 text-3xl font-semibold text-paper-50 text-balance sm:text-4xl">
                  Tell us your field. We&apos;ll handle the water.
                </h3>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-leaf-100">
                  Send your requirement on WhatsApp and get a same-day response
                  with prices and a free design-visit slot.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-paper-50 px-6 py-3 text-sm font-semibold text-pine-950 transition hover:bg-paper-200"
                >
                  <Icon name="phone" className="h-4 w-4" strokeWidth={2.2} />
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>

            <form onSubmit={submit} className="grid gap-5 p-9 sm:grid-cols-2 sm:p-12">
              <label className="block sm:col-span-1">
                <span className="text-sm font-medium text-paper-200">Your name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ravi Kumar"
                  className="mt-2 w-full rounded-xl border border-paper-100/15 bg-pine-950/60 px-4 py-3.5 text-base text-paper-50 placeholder:text-paper-400/60 focus:border-leaf-400 focus:outline-none"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="text-sm font-medium text-paper-200">Phone (optional)</span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit number"
                  inputMode="tel"
                  className="mt-2 w-full rounded-xl border border-paper-100/15 bg-pine-950/60 px-4 py-3.5 text-base text-paper-50 placeholder:text-paper-400/60 focus:border-leaf-400 focus:outline-none"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-paper-200">What do you need?</span>
                <select
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-paper-100/15 bg-pine-950/60 px-4 py-3.5 text-base text-paper-50 focus:border-leaf-400 focus:outline-none"
                >
                  {[
                    "Drip system for my field",
                    "Sprinkler system",
                    "Polyhouse / greenhouse",
                    "Filters, pipes & fittings",
                    "Mulch film / crop cover",
                    "Motorbike spare parts",
                    "Subsidy guidance",
                    "Something else",
                  ].map((o) => (
                    <option key={o} value={o} className="bg-pine-900">
                      {o}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-leaf-500 px-7 py-3.5 text-base font-semibold text-pine-950 transition hover:bg-leaf-400 sm:col-span-2"
              >
                Send on WhatsApp
                <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2.4} />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
