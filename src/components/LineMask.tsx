import type { CSSProperties, ReactNode } from "react";

interface LineMaskProps {
  /** One entry per headline line. Each line rises out of its own mask. */
  lines: ReactNode[];
  /** Base delay before the first line rises, in ms. */
  baseDelay?: number;
  className?: string;
}

/**
 * The single masked title reveal of the site — used on the hero headline only.
 * Pure CSS animation (see `.line-mask` in globals.css), so the headline is
 * fully rendered and visible even before hydration, and lands instantly for
 * `prefers-reduced-motion: reduce`.
 */
export function LineMask({ lines, baseDelay = 80, className }: LineMaskProps) {
  return (
    <span className={className} style={{ "--line-base": `${baseDelay}ms` } as CSSProperties}>
      {lines.map((line, index) => (
        <span key={index} className="line-mask">
          <span>{line}</span>
        </span>
      ))}
    </span>
  );
}
