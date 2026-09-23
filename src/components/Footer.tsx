import { NAV_LINKS, PRODUCTS, SITE } from "@/data/content";
import { Icon } from "./icons";
import { LogoMark } from "./Header";

export function Footer() {
  return (
    <footer className="border-t border-paper-100/8 bg-pine-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <span className="leading-tight">
                <span className="font-display block text-lg font-semibold text-paper-50">
                  Nazeer
                </span>
                <span className="block font-mono text-[10px] tracking-[0.22em] text-leaf-300 uppercase">
                  Micro Irrigation
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper-300">
              Premium micro irrigation materials and personally drawn system
              designs — serving the farming community since {SITE.since}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.phoneHref}
                aria-label="Call us"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-100/15 text-paper-200 transition hover:border-leaf-400 hover:text-leaf-300"
              >
                <Icon name="phone" className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email us"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-100/15 text-paper-200 transition hover:border-leaf-400 hover:text-leaf-300"
              >
                <Icon name="mail" className="h-4 w-4" />
              </a>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-100/15 text-paper-200 transition hover:border-leaf-400 hover:text-leaf-300"
              >
                <Icon name="users" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[11px] tracking-[0.24em] text-paper-400 uppercase">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-paper-200 transition hover:text-leaf-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[11px] tracking-[0.24em] text-paper-400 uppercase">Products</p>
            <ul className="mt-4 space-y-2.5">
              {PRODUCTS.slice(0, 6).map((p) => (
                <li key={p.title}>
                  <a href="#products" className="text-sm text-paper-200 transition hover:text-leaf-300">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.24em] text-paper-400 uppercase">Visit</p>
            <ul className="mt-4 space-y-3 text-sm text-paper-200">
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-leaf-400" />
                <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="transition hover:text-leaf-300">
                  Nazeer Micro Irrigation Agency, Godavari region
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-leaf-400" />
                <a href={SITE.phoneHref} className="transition hover:text-leaf-300">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="clock" className="h-4 w-4 shrink-0 text-leaf-400" />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="font-display mt-14 truncate text-center text-[13vw] leading-none font-semibold tracking-tight text-paper-100/4 select-none lg:text-[9rem]"
        >
          Nazeer
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-paper-100/8 pt-7 text-xs text-paper-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-2 font-medium text-paper-200 transition hover:text-leaf-300">
            Back to top
            <Icon name="arrow-up" className="h-3.5 w-3.5" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </footer>
  );
}
