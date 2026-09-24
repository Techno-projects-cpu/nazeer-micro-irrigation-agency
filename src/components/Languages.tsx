import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * Straight under the cover, so a farmer who reads Telugu, Hindi, Urdu, Tamil
 * or Kannada finds their own page before scrolling through English.
 */
export function Languages() {
  return (
    <section aria-labelledby="languages-heading" className="shell pt-12 pb-4 md:pt-16">
      <h2 id="languages-heading" className="label label-ink">
        Read in your language
      </h2>
      <LanguageSwitcher current="en" className="mt-6" />
    </section>
  );
}
