"use client";

import type Lenis from "lenis";

/**
 * Tiny registry so any component can talk to the single Lenis instance
 * created by <SmoothScroll />, without prop-drilling or context.
 */

/** Height of the sticky header, used as the anchor scroll offset. */
export const HEADER_OFFSET = 72;

let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Smooth-scroll to an in-page anchor, clearing the sticky header. */
export function scrollToSection(hash: string) {
  if (typeof document === "undefined") return;
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;

  const lenis = getLenis();
  if (lenis && !prefersReducedMotion()) {
    lenis.scrollTo(target, { offset: -HEADER_OFFSET, duration: 1.15 });
    return;
  }
  target.scrollIntoView({
    block: "start",
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

/** Freeze page scrolling behind overlays (mobile menu). */
export function lockScroll(locked: boolean) {
  const lenis = getLenis();
  if (locked) lenis?.stop();
  else lenis?.start();
  document.body.style.overflow = locked ? "hidden" : "";
}
