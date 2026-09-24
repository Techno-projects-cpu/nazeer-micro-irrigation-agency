import { LANGUAGE_LINKS } from "@/data/locales";

interface LanguageSwitcherProps {
  /** Language code of the page this sits on; its own button is left out. */
  current: string;
  className?: string;
}

/**
 * One button per language, each written in its own script: the language's
 * name, and "click me to translate" in that language. The page's own
 * language is left out, so there are always five buttons.
 */
export function LanguageSwitcher({ current, className = "" }: LanguageSwitcherProps) {
  const links = LANGUAGE_LINKS.filter((link) => link.code !== current);

  return (
    <ul className={`grid grid-cols-2 gap-3 md:grid-cols-5 ${className}`}>
      {links.map((link) => (
        <li key={link.code} className="last:col-span-2 md:last:col-span-1">
          <a
            href={link.href}
            hrefLang={link.code}
            lang={link.code}
            dir={link.dir}
            className="btn btn-line lang-btn h-full w-full"
          >
            <span className="lang-btn-name">{link.name}</span>
            <span className="lang-btn-cta">{link.cta}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
