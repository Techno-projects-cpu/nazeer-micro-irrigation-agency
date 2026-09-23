"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { PLATES } from "@/data/content";

/**
 * Flood against drip: a draggable wipe between two plates of the delta.
 *
 * The control is a real `<input type="range">` laid invisibly over the frame —
 * so dragging, tapping and arrow keys all work without a line of custom
 * keyboard handling, and the seam is drawn as a plain hairline.
 */
export function WaterWipe() {
  const [position, setPosition] = useState(50);
  const id = useId();

  return (
    <div className="plate relative aspect-[16/10] w-full select-none md:aspect-[16/8]">
      {/* Right-hand side: drip, properly designed. */}
      <Image
        src={PLATES.hero.src}
        alt={PLATES.hero.alt}
        fill
        sizes="(max-width: 767px) 100vw, 66rem"
        className="object-cover"
      />

      {/* Left-hand side: furrow and flood. */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      >
        <Image
          src={PLATES.aerial.src}
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 66rem"
          className="object-cover"
        />
      </div>

      {/* Legibility strip + the two readings. */}
      <div
        className="scrim-plate pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6"
        aria-hidden="true"
      >
        <p className="label text-canvas">Flood · furrow</p>
        <p className="label text-canvas">Drip · designed</p>
      </div>

      {/* The seam and its handle. */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-canvas/75"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-canvas/70 bg-night/45 text-canvas">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
            <path
              d="M9 6 4 12l5 6M15 6l5 6-5 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <label htmlFor={id} className="sr-only">
        Compare a flood-irrigated field with a drip-irrigated field
      </label>
      <input
        id={id}
        type="range"
        min={12}
        max={88}
        step={1}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-valuetext={`${position}% flood irrigation, ${100 - position}% drip irrigation`}
        className="peer absolute inset-0 h-full w-full cursor-col-resize appearance-none touch-pan-y bg-transparent opacity-0"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border-2 border-moss opacity-0 peer-focus-visible:opacity-100"
      />
    </div>
  );
}
