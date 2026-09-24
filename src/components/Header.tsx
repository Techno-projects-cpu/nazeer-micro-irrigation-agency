"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/data/content";
import { LANGUAGE_LINKS } from "@/data/locales";
import { lockScroll } from "@/lib/scroll";
import { Icon } from "./icons";

export function Wordmark({ sub = true, tone = "ink" }: { sub?: boolean; tone?: "ink" | "canvas" }) {
  return (
    <span className="flex flex-col">
      <span
        className={`font-display text-[1.05rem] leading-none font-semibold tracking-[-0.015em] ${
          tone === "canvas" ? "text-canvas" : "text-ink"
        }`}
      >
        Nazeer
      </span>
      {sub ? (
        <span
          className={`label mt-1.5 text-[0.5625rem] tracking-[0.24em] ${
            tone === "canvas" ? "text-canvas/80" : ""
          }`}
        >
          Micro Irrigation Agency
        </span>
      ) : null}
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Reading progress: a 1px ink hairline that tracks the page, like the
     ribbon in a printed annual report. Transform-only, rAF-throttled. */
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
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

  // The cover is a dark plate, so the bar is reversed out of it until it docks.
  const overCover = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-300 ${
        overCover ? "bg-transparent text-canvas" : "hairline-b bg-canvas text-ink"
      }`}
    >
      <span
        aria-hidden="true"
        className="progress-rule"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div className="shell">
        <div className="flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
          <a href="#top" aria-label={`${SITE.name} — back to top`} className="py-2">
            <Wordmark tone={overCover ? "canvas" : "ink"} />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="tap leading-none">
                <span className={`label link-quiet ${overCover ? "text-canvas/85" : ""}`}>
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={SITE.phoneHref}
              className={`tap hidden transition-colors md:inline-flex ${
                overCover ? "text-canvas" : "hover:text-moss"
              }`}
            >
              <span className={`label link-quiet ${overCover ? "text-canvas" : "text-ink"}`}>
                {SITE.phoneDisplay}
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`inline-flex h-11 w-11 items-center justify-center lg:hidden ${
                overCover ? "text-canvas" : "text-ink"
              }`}
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="hairline-t fixed inset-x-0 bottom-0 top-[calc(4rem+env(safe-area-inset-top))] bg-canvas pb-[calc(3.5rem+1px+env(safe-area-inset-bottom))] md:top-[calc(4.5rem+env(safe-area-inset-top))] md:pb-0 lg:hidden"
        >
          <nav aria-label="Mobile" className="shell flex h-full flex-col overflow-y-auto pt-2 pb-6">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)} className="display-3 block py-5 transition-colors duration-200 hover:text-moss active:text-moss">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul aria-label="Languages" className="mt-6 flex flex-wrap gap-x-5">
              {LANGUAGE_LINKS.filter((link) => link.code !== "en").map((link) => (
                <li key={link.code}>
                  <a
                    href={link.href}
                    hrefLang={link.code}
                    lang={link.code}
                    dir={link.dir}
                    className="tap text-[1.0625rem] text-ink-soft transition-colors duration-200 hover:text-moss active:text-moss"
                  >
                    {link.name}
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
