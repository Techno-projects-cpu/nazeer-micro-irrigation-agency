import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  /** Section number, printed like a page number: "01", "02", … */
  index: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Extra content under the lead — a link, a plate credit, a note. */
  aside?: ReactNode;
  className?: string;
}

/**
 * Every numbered section opens the same way — a hairline rule, a tiny mono
 * label, the section number in moss, then the editorial headline with its lead
 * set to one side. Same marks, different measures from section to section.
 */
export function SectionHeading({
  index,
  label,
  title,
  lead,
  aside,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <div className="rule-draw pt-5">
        <div className="flex items-baseline justify-between gap-6">
          <p className="label label-ink">{label}</p>
          <p className="label label-moss">{index}</p>
        </div>

        <div className="mt-7 grid gap-x-8 gap-y-6 md:grid-cols-12">
          <h2 className="display-2 md:col-span-7 lg:col-span-7">{title}</h2>
          {lead || aside ? (
            <div className="md:col-span-5 md:pt-2 lg:col-span-5">
              {lead ? <p className="lead max-w-[34rem]">{lead}</p> : null}
              {aside}
            </div>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
