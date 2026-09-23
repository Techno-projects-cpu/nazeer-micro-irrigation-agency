import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
}

export function SectionHeading({
  kicker,
  title,
  lead,
  tone = "dark",
  align = "left",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`font-mono text-[11px] font-medium tracking-[0.28em] uppercase sm:text-xs ${
          dark ? "text-leaf-400" : "text-leaf-600"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`font-display mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08] ${
          dark ? "text-paper-50" : "text-pine-900"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-base leading-relaxed text-balance sm:text-lg ${
            dark ? "text-paper-300" : "text-pine-700"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
