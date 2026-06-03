"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.6, 0.35, 1],
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.6, 0.35, 1] },
  },
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }: Props) {
  return (
    <motion.div className={className} variants={childVariants}>
      {children}
    </motion.div>
  );
}
