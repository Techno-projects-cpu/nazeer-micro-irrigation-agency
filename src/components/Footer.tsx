import { NAV_LINKS, PRODUCTS, SITE, STUDIO_CREDIT } from "@/data/content";
import { Wordmark } from "./Header";

export function Footer() {
  return (
    <footer className="pb-24 md:pb-0">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1fr] lg:gap-10">
          <div>
            <Wordmark />
            <p className="mt-6 max-w-[19rem] text-[0.9375rem] leading-relaxed text-ink-soft">
              Micro irrigation materials and personally drawn system designs — serving the farmers of
              the Godavari region since {SITE.since}.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="label label-ink">Contents</p>
            <ul className="mt-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="tap text-[0.9375rem] text-ink-soft">
                    <span className="link-quiet">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label label-ink">The range</p>
            <ul className="mt-4">
              {PRODUCTS.slice(0, 6).map((product) => (
                <li key={product.title}>
                  <a href="#range" className="tap text-[0.9375rem] text-ink-soft">
                    <span className="link-quiet">{product.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label label-ink">Visit</p>
            <ul className="mt-4 text-[0.9375rem] text-ink-soft">
              <li className="flex min-h-11 items-center">Godavari region, Andhra Pradesh</li>
              <li>
                <a href={SITE.phoneHref} className="tap">
                  <span className="link-quiet">{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="tap">
                  <span className="link-quiet">{SITE.email}</span>
                </a>
              </li>
              <li className="flex min-h-11 items-center">{SITE.hours}</li>
              <li>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="tap text-ink"
                >
                  <span className="link-quiet">Get directions</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-14 flex flex-col gap-4 pt-7 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="label">
            © {new Date().getFullYear()} {SITE.name} · Since {SITE.since}
          </p>
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
            {STUDIO_CREDIT.enabled && STUDIO_CREDIT.href ? (
              <a
                href={STUDIO_CREDIT.href}
                target="_blank"
                rel="noreferrer"
                className="tap"
              >
                <span className="label link-quiet">{STUDIO_CREDIT.name}</span>
              </a>
            ) : null}
            <a href="#top" className="tap w-fit">
              <span className="label link-quiet">Back to top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
