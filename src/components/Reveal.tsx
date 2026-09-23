"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const TAGS = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  span: motion.span,
  figure: motion.figure,
} as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof TAGS;
  y?: number;
}

/** Scroll-triggered spring reveal, powered by framer-motion (motiondivision/motion, MIT). */
export function Reveal({ children, delay = 0, className = "", as = "div", y = 26 }: RevealProps) {
  const Tag = TAGS[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.2, 0.6, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}
