"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/data/content";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Faq } from "./Faq";

const DETAILS = [
  {
    label: "Visit",
    value: "Godavari region, Andhra Pradesh",
    note: "Free consultation at the counter, six days a week.",
    href: SITE.mapsUrl,
    external: true,
  },
  { label: "Call", value: SITE.phoneDisplay, href: SITE.phoneHref },
  {
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    note: "Send field photos and measurements.",
    href: SITE.whatsappHref,
    external: true,
  },
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

/** 10 — the counter: how to reach us, an enquiry that opens ready to send. */
export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState(NEEDS[0]);
  const [size, setSize] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const parts = [
      `Hello Nazeer Micro Irrigation!`,
      `I am ${name.trim() || "a farmer"}${phone.trim() ? ` (${phone.trim()})` : ""}.`,
      `I need: ${need}.`,
      size.trim() ? `Field size: ${size.trim()} acres.` : null,
    ].filter(Boolean);

    window.open(waLink(parts.join(" ")), "_blank", "noopener");
  };

  return (
    <section id="visit" className="section scroll-mt-4">
      <div className="shell">
        <SectionHeading
          index="10"
          label="Visit"
          title="Tell us your field. We'll handle the water."
          lead="Send your requirement on WhatsApp with a photo of your plot, or call the shop — you will get a straight answer and a price the same day."
        />

        <div className="g12 mt-14 md:mt-20">
          <Reveal className="md:col-span-5">
            <dl>
              {DETAILS.map((detail) => (
                <div key={detail.label} className="py-5">
                  <dt className="label">{detail.label}</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.external ? "_blank" : undefined}
                        rel={detail.external ? "noreferrer" : undefined}
                        className="tap link-quiet font-medium"
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

          <Reveal delay={90} className="md:col-span-6 md:col-start-7">
            <form onSubmit={submit} className="grid gap-7 sm:grid-cols-2">
              <p className="sm:col-span-2">
                <label htmlFor="enquiry-name" className="label label-ink">
                  Your name
                </label>
                <input
                  id="enquiry-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="e.g. Ravi Kumar"
                  autoComplete="name"
                  className="field mt-3"
                />
              </p>

              <p>
                <label htmlFor="enquiry-phone" className="label label-ink">
                  Phone <span className="normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="enquiry-phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="10-digit number"
                  inputMode="tel"
                  autoComplete="tel"
                  className="field mt-3"
                />
              </p>

              <p>
                <label htmlFor="enquiry-size" className="label label-ink">
                  Field size <span className="normal-case tracking-normal">(acres)</span>
                </label>
                <input
                  id="enquiry-size"
                  value={size}
                  onChange={(event) => setSize(event.target.value)}
                  placeholder="e.g. 3"
                  inputMode="decimal"
                  className="field mt-3"
                />
              </p>

              <p className="sm:col-span-2">
                <label htmlFor="enquiry-need" className="label label-ink">
                  What do you need?
                </label>
                <select
                  id="enquiry-need"
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
              </p>

              <div className="sm:col-span-2">
                <button type="submit" className="btn btn-ink w-full sm:w-auto">
                  Send on WhatsApp
                  <Icon name="arrow-right" className="h-4 w-4" strokeWidth={1.6} />
                </button>
                <p className="label mt-4">Opens WhatsApp with your message ready to send</p>
              </div>
            </form>
          </Reveal>
        </div>

        <Faq />
      </div>
    </section>
  );
}
