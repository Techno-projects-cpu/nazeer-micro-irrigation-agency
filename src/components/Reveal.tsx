"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

const TAGS = {
  div: "div",
  section: "section",
  article: "article",
  li: "li",
  ul: "ul",
  figure: "figure",
  span: "span",
  p: "p",
  header: "header",
} as const;

interface RevealProps {
  children: ReactNode;
  /** Stagger in milliseconds. Kept small — nothing should feel choreographed. */
  delay?: number;
  className?: string;
  as?: keyof typeof TAGS;
  /** Travel distance in px. 12–18px is the whole vocabulary. */
  y?: number;
  id?: string;
}

/**
 * A gentle 14px fade-up, once, the first time the element enters the viewport.
 *
 * Hand-rolled with an IntersectionObserver rather than a motion library: the
 * whole animation is one CSS transition, so the page ships ~45 kB less
 * JavaScript and the transform never touches the main thread. The resting
 * (hidden) state lives behind `[data-reveal]`, which a `<noscript>` rule in the
 * layout disables — nothing is ever invisible without JavaScript, and
 * `prefers-reduced-motion: reduce` paints the final state immediately.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 14,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.inview = "true";
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.dataset.inview = "true";
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = TAGS[as] as ElementType;

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal=""
      className={className}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--reveal-y": `${y}px`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
