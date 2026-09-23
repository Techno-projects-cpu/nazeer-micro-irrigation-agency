import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  /** Section number, printed like a page number: "01", "02", … */
  index: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}

/**
 * Every section opens the same way: a hairline rule, a tiny mono label with
 * the section number on the right, then the editorial headline.
 */
export function SectionHeading({ index, label, title, lead, className = "" }: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <div className="hairline-t pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="label label-ink">{label}</p>
          <p className="label label-moss">{index}</p>
        </div>
        <h2 className="display-2 mt-6 max-w-[44rem]">{title}</h2>
        {lead ? <p className="lead mt-5 max-w-[34rem]">{lead}</p> : null}
      </div>
    </Reveal>
  );
}
