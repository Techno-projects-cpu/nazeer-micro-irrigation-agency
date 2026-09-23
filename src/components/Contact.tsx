"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/data/content";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const DETAILS = [
  {
    label: "Visit",
    value: `${SITE.name}, Godavari region`,
    note: "Free consultation at the counter, six days a week.",
    href: SITE.mapsUrl,
    external: true,
  },
  { label: "Call", value: SITE.phoneDisplay, href: SITE.phoneHref },
  { label: "WhatsApp", value: SITE.phoneDisplay, note: "Send field photos and measurements.", href: SITE.whatsappHref, external: true },
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Hours", value: SITE.hours, note: "Sunday: closed." },
];

const NEEDS = [
  "Drip system for my field",
  "Sprinkler system",
  "Polyhouse / greenhouse",
  "Filters, pipes & fittings",
  "Mulch film / crop cover",
  "Motorbike spare parts",
  "Subsidy guidance",
  "Something else",
];

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState(NEEDS[0]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const message = `Hello Nazeer Micro Irrigation! I am ${name || "a farmer"}${
      phone ? ` (${phone})` : ""
    }. I need: ${need}.`;
    window.open(`${SITE.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  };

  return (
    <section id="contact" className="section scroll-mt-24">
      <div className="shell">
        <SectionHeading
          index="10"
          label="Contact"
          title="Tell us your field. We'll handle the water."
          lead="Send your requirement on WhatsApp with a photo of your plot, or call the shop — you will get a straight answer and a price the same day."
        />

        <div className="mt-14 grid gap-16 md:mt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <dl className="hairline-b">
              {DETAILS.map((detail) => (
                <div
                  key={detail.label}
                  className="hairline-t grid grid-cols-[5.5rem_1fr] gap-x-4 py-5 md:grid-cols-[7rem_1fr] md:gap-x-8"
                >
                  <dt className="label pt-0.5">{detail.label}</dt>
                  <dd className="text-[0.9375rem] leading-relaxed text-ink">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.external ? "_blank" : undefined}
                        rel={detail.external ? "noreferrer" : undefined}
                        className="link-quiet"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                    {detail.note ? (
                      <span className="mt-1.5 block text-[0.8125rem] text-ink-faint">
                        {detail.note}
                      </span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={90}>
            <form onSubmit={submit} className="grid gap-6 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="label label-ink">Your name</span>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="e.g. Ravi Kumar"
                  autoComplete="name"
                  className="field mt-3"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="label label-ink">Phone (optional)</span>
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="10-digit number"
                  inputMode="tel"
                  autoComplete="tel"
                  className="field mt-3"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="label label-ink">What do you need?</span>
                <select
                  value={need}
                  onChange={(event) => setNeed(event.target.value)}
                  className="field mt-3"
                >
                  {NEEDS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <div className="sm:col-span-2">
                <button type="submit" className="btn btn-ink w-full sm:w-auto">
                  Send on WhatsApp
                  <Icon name="arrow-right" className="h-4 w-4" strokeWidth={1.6} />
                </button>
                <p className="label mt-4">
                  Opens WhatsApp with your message ready to send
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
