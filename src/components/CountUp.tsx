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
 * The ticking digits are hidden from assistive tech; the final value is
 * exposed instead, and reduced-motion users see it immediately.
 */
export function CountUp({ value, suffix = "", duration = 1400, className, format }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [shown, setShown] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setShown(value);
      return;
    }

    const run = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setShown(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
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
    return () => io.disconnect();
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
