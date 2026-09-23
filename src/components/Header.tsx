"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/data/content";
import { Icon } from "./icons";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 3C15 12 8 16.5 8 24a12 12 0 0 0 24 0c0-7.5-7-11.5-12-21Z"
        fill="url(#lg)"
      />
      <path
        d="M20 30.5c-4.6-1.6-6.6-5.4-6.2-9.9 4.8 1 8.4 3.6 8.6 8.2.05 1-.9 1.9-2.4 1.7Z"
        fill="#07110C"
        opacity="0.85"
      />
      <defs>
        <linearGradient id="lg" x1="8" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5AC97E" />
          <stop offset="1" stopColor="#18B7C3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-paper-100/8 bg-pine-950/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <motion.a
          whileTap={{ scale: 0.96 }}
          href="#top"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
          <span className="leading-tight">
            <span className="font-display block text-[15px] font-semibold tracking-tight text-paper-50 sm:text-base">
              Nazeer
            </span>
            <span className="block font-mono text-[9.5px] tracking-[0.22em] text-leaf-300 uppercase">
              Micro Irrigation
            </span>
          </span>
        </motion.a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-paper-200 transition hover:bg-paper-100/8 hover:text-paper-50"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            whileTap={{ scale: 0.96 }}
            href={SITE.phoneHref}
            className="group hidden items-center gap-2 rounded-full bg-leaf-500 px-4 py-2.5 text-sm font-semibold text-pine-950 shadow-card transition hover:bg-leaf-400 sm:inline-flex"
          >
            <Icon name="phone" className="h-4 w-4" strokeWidth={2.2} />
            {SITE.phoneDisplay}
          </motion.a>
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper-100/15 text-paper-100 transition hover:bg-paper-100/10 lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" strokeWidth={2} />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-pine-950/95 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile" className="flex h-full flex-col gap-1 overflow-y-auto px-6 pt-4 pb-10">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.06, duration: 0.4, ease: [0.2, 0.6, 0.2, 1] }}
                  className="font-display border-b border-paper-100/8 py-4 text-2xl font-medium text-paper-100 transition hover:text-leaf-300"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-6 flex flex-col gap-3"
              >
                <a
                  href={SITE.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-leaf-500 px-5 py-3.5 text-base font-semibold text-pine-950"
                >
                  <Icon name="phone" className="h-4 w-4" strokeWidth={2.2} />
                  Call {SITE.phoneDisplay}
                </a>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-paper-100/15 px-5 py-3.5 text-base font-semibold text-paper-100"
                >
                  WhatsApp us
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
