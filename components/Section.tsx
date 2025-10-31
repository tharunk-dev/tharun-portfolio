
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`container ${className}`}
    >
      {children}
    </motion.section>
  );
}
