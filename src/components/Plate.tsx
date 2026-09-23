import Image from "next/image";
import type { ReactNode } from "react";

export interface PlateSource {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

interface PlateProps {
  plate: PlateSource;
  /** Tailwind aspect-ratio class for the frame. */
  aspect?: string;
  /** Required — every image on the page gets a truthful `sizes`. */
  sizes: string;
  priority?: boolean;
  /** Decorative plates are rendered with alt="" and no caption number. */
  decorative?: boolean;
  className?: string;
  imgClassName?: string;
  /** Overlay content, e.g. a caption set inside the frame over a scrim. */
  children?: ReactNode;
  /** Print the `PLATE nn — caption` line beneath the frame. Default: true. */
  caption?: boolean;
  /** Settle the photograph from 1.06 → 1 the first time it is reached. */
  zoom?: boolean;
}

/**
 * One photograph, framed and graded like a plate in a printed almanac.
 * The grade lives in `.plate` (globals.css) so all eight photographs read as
 * a single shoot.
 */
export function Plate({
  plate,
  aspect = "aspect-[16/10]",
  sizes,
  priority = false,
  decorative = false,
  className = "",
  imgClassName = "",
  children,
  caption = true,
  zoom = false,
}: PlateProps) {
  const alt = decorative ? "" : plate.alt;

  return (
    <figure className={className}>
      <div className={`plate ${aspect} ${zoom ? "plate-zoom" : ""}`}>
        <Image
          src={plate.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className={`object-cover ${imgClassName}`}
        />
        {children}
      </div>
      {caption ? (
        <figcaption className="label mt-3 flex flex-wrap items-baseline gap-x-2">
          <span className="text-ink">Plate {plate.id}</span>
          <span aria-hidden="true" className="text-ink-faint">
            —
          </span>
          <span>{plate.caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
