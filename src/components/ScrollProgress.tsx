"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin leaf→water gradient bar tracking page scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-leaf-400 via-water-400 to-sun-400"
    />
  );
}
