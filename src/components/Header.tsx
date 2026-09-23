"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/data/content";
import { lockScroll } from "@/lib/scroll";
import { Icon } from "./icons";

export function Wordmark({ sub = true }: { sub?: boolean }) {
  return (
    <span className="flex flex-col">
      <span className="font-display text-[1.05rem] leading-none font-semibold tracking-[-0.015em] text-ink">
        Nazeer
      </span>
      {sub ? (
        <span className="label mt-1.5 text-[0.5625rem] tracking-[0.24em]">
          Micro Irrigation Agency
        </span>
      ) : null}
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    lockScroll(open);
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => () => lockScroll(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "hairline-b bg-canvas" : "bg-transparent"
      }`}
    >
      <div className="shell">
        <div className="flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
          <a href="#top" aria-label={`${SITE.name} — back to top`} className="py-2">
            <Wordmark />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="tap leading-none transition-colors hover:text-ink"
              >
                <span className="label link-quiet">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={SITE.phoneHref}
              className="tap hidden transition-colors hover:text-moss md:inline-flex"
            >
              <span className="label label-ink link-quiet">{SITE.phoneDisplay}</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="hairline-t fixed inset-x-0 top-16 bottom-0 bg-canvas md:top-[4.5rem] lg:hidden">
          <nav aria-label="Mobile" className="shell flex h-full flex-col overflow-y-auto pt-2 pb-10">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="hairline-b">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="display-3 block py-5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 pt-10">
              <a href={SITE.phoneHref} className="btn btn-ink w-full" onClick={() => setOpen(false)}>
                <Icon name="phone" className="h-4 w-4" strokeWidth={1.8} />
                {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn btn-line w-full"
                onClick={() => setOpen(false)}
              >
                <Icon name="message" className="h-4 w-4" strokeWidth={1.8} />
                Message on WhatsApp
              </a>
              <p className="label mt-2">{SITE.hours}</p>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
