import { SITE } from "@/data/content";

/**
 * A WhatsApp deep link carrying pre-filled context, so a farmer taps through
 * with the question already written — field size, crop, or the exact product
 * they were reading about.
 */
export function waLink(message: string) {
  return `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`;
}
