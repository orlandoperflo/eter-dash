'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function IntelligenceCard({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-panel rounded-[2rem] p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
