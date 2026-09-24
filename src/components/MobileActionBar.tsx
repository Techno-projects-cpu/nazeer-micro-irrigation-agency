import { SITE } from "@/data/content";
import { Icon } from "./icons";

interface MobileActionBarProps {
  /** Button words; English by default, translated on the regional pages. */
  labels?: { call: string; whatsapp: string; directions: string };
  /** WhatsApp link — the regional pages pre-fill a message in their language. */
  whatsappHref?: string;
  /**
   * Regional scripts: drop the tracked, uppercase mono label (letter-spacing
   * breaks Indic conjuncts and Urdu's joined letters).
   */
  script?: boolean;
}

const CELL =
  "group flex min-h-14 flex-col items-center justify-center gap-1.5 transition-colors duration-200 hover:bg-moss-bright active:bg-moss-bright data-[pressed=true]:bg-moss-bright";
const FLIP =
  "transition-colors duration-200 group-hover:text-canvas group-active:text-canvas group-data-[pressed=true]:text-canvas";

/**
 * Thumb-reach action bar for phones: call, WhatsApp, directions.
 * Opaque canvas with hairline seams — no blur, no shadow. A tapped cell
 * fills bright moss with canvas type, so the press is unmistakable.
 */
export function MobileActionBar({
  labels = { call: "Call", whatsapp: "WhatsApp", directions: "Directions" },
  whatsappHref = SITE.whatsappHref,
  script = false,
}: MobileActionBarProps) {
  const text = script ? "text-[0.8125rem] leading-snug font-medium" : "label";

  return (
    <nav
      aria-label="Quick contact"
      className="hairline-t fixed inset-x-0 bottom-0 z-50 bg-canvas pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="grid grid-cols-3">
        <li>
          <a href={SITE.phoneHref} data-press className={CELL}>
            <Icon name="phone" className={`h-[1.125rem] w-[1.125rem] text-moss ${FLIP}`} strokeWidth={1.8} />
            <span className={`${text} text-moss ${FLIP}`}>{labels.call}</span>
          </a>
        </li>
        <li className="border-x border-hairline">
          <a href={whatsappHref} target="_blank" rel="noreferrer" data-press className={CELL}>
            <Icon name="message" className={`h-[1.125rem] w-[1.125rem] text-ink ${FLIP}`} strokeWidth={1.8} />
            <span className={`${text} text-ink ${FLIP}`}>{labels.whatsapp}</span>
          </a>
        </li>
        <li>
          <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" data-press className={CELL}>
            <Icon name="navigate" className={`h-[1.125rem] w-[1.125rem] text-ink ${FLIP}`} strokeWidth={1.6} />
            <span className={`${text} text-ink ${FLIP}`}>{labels.directions}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
