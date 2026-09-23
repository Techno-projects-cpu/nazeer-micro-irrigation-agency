"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { prefersReducedMotion, scrollToSection, setLenis } from "@/lib/scroll";

/**
 * Lenis smooth scroll (darkroomengineering/lenis, MIT).
 *
 * Also owns in-page anchor navigation, so every `#hash` link — in the header,
 * the footer or mid-section — scrolls with the same calm easing and clears the
 * sticky header. Lenis is skipped entirely for `prefers-reduced-motion: reduce`;
 * anchors then fall back to native, instant scrolling.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = prefersReducedMotion();

    const lenis = reduce
      ? null
      : new Lenis({ autoRaf: true, lerp: 0.09, wheelMultiplier: 1, touchMultiplier: 1.4 });

    setLenis(lenis);

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const node = event.target as HTMLElement | null;
      const anchor = node && node.closest ? (node.closest('a[href^="#"]') as HTMLAnchorElement | null) : null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      if (anchor.target && anchor.target !== "_self") return;
      // Opt out (e.g. the skip link) so the browser can move focus as well.
      if (anchor.dataset.native === "true") return;
      if (!document.querySelector(hash)) return;

      event.preventDefault();
      scrollToSection(hash);
      // Keep the URL shareable without a second, jumpy scroll.
      window.history.replaceState(null, "", hash);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      setLenis(null);
      lenis?.destroy();
    };
  }, []);

  return null;
}
