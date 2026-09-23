"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE, FADE_UP_DURATION } from "@/lib/motion";

const TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  span: motion.span,
  figure: motion.figure,
} as const;

interface RevealProps {
  children: ReactNode;
  /** Stagger in milliseconds. Kept small — nothing should feel choreographed. */
  delay?: number;
  className?: string;
  as?: keyof typeof TAGS;
  /** Travel distance in px. 12–18px is the whole vocabulary. */
  y?: number;
}

/**
 * A gentle fade-up on first view. Honours `prefers-reduced-motion`
 * by rendering the final state with no transition at all.
 */
export function Reveal({ children, delay = 0, className, as = "div", y = 14 }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = TAGS[as];

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: FADE_UP_DURATION, delay: delay / 1000, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
