"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/scroll";

interface CountUpProps {
  value: number;
  suffix?: string;
  /** Slow and soft: nothing should feel like a slot machine. */
  duration?: number;
  className?: string;
  format?: (n: number) => string;
}

/**
 * A soft counter that eases up once, the first time it scrolls into view.
 * Later changes to `value` (the savings slider) ease from the figure already on
 * screen rather than snapping. The ticking digits are hidden from assistive
 * tech; the final value is exposed instead, and reduced-motion users see it
 * immediately.
 */
export function CountUp({
  value,
  suffix = "",
  duration = 1400,
  className,
  format,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  /**
   * Renders the final figure first: the server HTML (and therefore a
   * no-JavaScript reader, or a crawler) shows the real number. The counter
   * arms itself on mount and only then winds back to zero.
   */
  const [shown, setShown] = useState(value);
  const shownRef = useRef(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      started.current = true;
      shownRef.current = value;
      setShown(value);
      return;
    }

    let frame = 0;
    let cancelled = false;

    const animate = (from: number, to: number, ms: number) => {
      const t0 = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const progress = Math.min(1, (now - t0) / ms);
        const eased = 1 - Math.pow(1 - progress, 3);
        const next = Math.round(from + (to - from) * eased);
        shownRef.current = next;
        setShown(next);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    if (!started.current) {
      // Arm: wind back to zero, then wait for the figure to be read.
      shownRef.current = 0;
      setShown(0);

      const run = () => {
        if (started.current) return;
        started.current = true;
        animate(0, value, duration);
      };

      if (typeof IntersectionObserver === "undefined") {
        run();
        return () => {
          cancelled = true;
          cancelAnimationFrame(frame);
        };
      }

      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            run();
            io.disconnect();
          }
        },
        { threshold: 0.5 },
      );
      io.observe(el);

      return () => {
        cancelled = true;
        cancelAnimationFrame(frame);
        io.disconnect();
      };
    }

    animate(shownRef.current, value, 600);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  const fmt = (n: number) => (format ? format(n) : n.toLocaleString("en-IN"));

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {fmt(shown)}
        {suffix}
      </span>
      <span className="sr-only">
        {fmt(value)}
        {suffix}
      </span>
    </span>
  );
}
