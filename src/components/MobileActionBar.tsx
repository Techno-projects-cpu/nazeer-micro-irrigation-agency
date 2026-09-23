"use client";

import { motion } from "framer-motion";
import { SITE } from "@/data/content";
import { Icon } from "./icons";

/** Sticky thumb-reach action bar for phones: call, WhatsApp, directions. */
export function MobileActionBar() {
  return (
    <motion.nav
      aria-label="Quick contact"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 26 }}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-paper-100/10 bg-pine-950/92 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
    >
      <div className="grid grid-cols-3">
        <a
          href={SITE.phoneHref}
          className="flex min-h-14 flex-col items-center justify-center gap-1 text-leaf-300 active:bg-leaf-500/10"
        >
          <Icon name="phone" className="h-5 w-5" strokeWidth={2} />
          <span className="text-[11px] font-semibold">Call now</span>
        </a>
        <a
          href={SITE.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-14 flex-col items-center justify-center gap-1 border-x border-paper-100/10 text-water-300 active:bg-water-500/10"
        >
          <Icon name="users" className="h-5 w-5" strokeWidth={2} />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-14 flex-col items-center justify-center gap-1 text-sun-300 active:bg-sun-500/10"
        >
          <Icon name="pin" className="h-5 w-5" strokeWidth={2} />
          <span className="text-[11px] font-semibold">Directions</span>
        </a>
      </div>
    </motion.nav>
  );
}
