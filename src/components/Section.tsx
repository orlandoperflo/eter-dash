'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section className={`mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 max-w-3xl"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.38em] text-signal/80">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-porcelain sm:text-5xl">{title}</h2>
        <p className="mt-4 text-base leading-7 text-mist sm:text-lg">{description}</p>
      </motion.div>
      {children}
    </section>
  );
}
