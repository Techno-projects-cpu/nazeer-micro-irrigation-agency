import { SITE } from "@/data/content";
import { Icon } from "./icons";

/**
 * Thumb-reach action bar for phones: call, WhatsApp, directions.
 * Opaque canvas with hairline seams — no blur, no shadow. A tapped cell
 * fills bright moss with canvas type, so the press is unmistakable.
 */
export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="hairline-t fixed inset-x-0 bottom-0 z-50 bg-canvas pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="grid grid-cols-3">
        <li>
          <a href={SITE.phoneHref} className="flex min-h-14 flex-col items-center justify-center gap-1.5 group transition-colors duration-200 hover:bg-moss-bright active:bg-moss-bright">
            <Icon name="phone" className="h-[1.125rem] w-[1.125rem] text-moss transition-colors duration-200 group-hover:text-canvas group-active:text-canvas" strokeWidth={1.8} />
            <span className="label label-moss transition-colors duration-200 group-hover:text-canvas group-active:text-canvas">Call</span>
          </a>
        </li>
        <li className="border-x border-hairline">
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-14 flex-col items-center justify-center gap-1.5 group transition-colors duration-200 hover:bg-moss-bright active:bg-moss-bright"
          >
            <Icon name="message" className="h-[1.125rem] w-[1.125rem] text-ink transition-colors duration-200 group-hover:text-canvas group-active:text-canvas" strokeWidth={1.8} />
            <span className="label label-ink transition-colors duration-200 group-hover:text-canvas group-active:text-canvas">WhatsApp</span>
          </a>
        </li>
        <li>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-14 flex-col items-center justify-center gap-1.5 group transition-colors duration-200 hover:bg-moss-bright active:bg-moss-bright"
          >
            <Icon name="navigate" className="h-[1.125rem] w-[1.125rem] text-ink transition-colors duration-200 group-hover:text-canvas group-active:text-canvas" strokeWidth={1.6} />
            <span className="label label-ink transition-colors duration-200 group-hover:text-canvas group-active:text-canvas">Directions</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
