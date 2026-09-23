"use client";

import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "@/data/content";

/**
 * The running index: numbers 01–10 printed in the left gutter from 1280px up.
 *
 * It is the detail that makes the page feel authored — a reader always knows
 * where they are in the document. The active entry is marked by a hairline rule
 * that eases out to full width; the rail is hidden below 1280px, where there is
 * no gutter to print into.
 */
export function IndexRail() {
  const [active, setActive] = useState<string>("");
  const visible = useRef<Set<string>>(new Set());

  useEffect(() => {
    const targets = SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (node): node is HTMLElement => node !== null,
    );
    if (targets.length === 0) return;

    if (typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.current.add(entry.target.id);
          else visible.current.delete(entry.target.id);
        }
        // Whichever indexed section currently crosses the middle of the
        // viewport wins; ties are impossible with a zero-height band.
        const current = SECTIONS.find((section) => visible.current.has(section.id));
        if (current) setActive(current.id);
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    targets.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Section index" className="rail">
      <ol>
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              aria-current={active === section.id ? "true" : undefined}
              data-active={active === section.id}
              className="rail-item"
            >
              <span className="rail-rule" aria-hidden="true" />
              <span className="rail-num" aria-hidden="true">
                {section.index}
              </span>
              <span className="sr-only">
                {section.index} — {section.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
