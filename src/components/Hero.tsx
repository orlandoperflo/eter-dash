'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden px-6 py-6 sm:px-8 lg:px-10">
      <div className="operator-grid absolute inset-0 opacity-70" />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
      />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border border-signal/40 bg-gradient-to-br from-white/20 to-signal/20 shadow-glass" />
          <span className="text-sm font-semibold tracking-[0.28em] text-porcelain">ETERNITY</span>
        </div>
        <div className="hidden items-center gap-7 text-xs uppercase tracking-[0.24em] text-mist md:flex">
          <a href="#intake" className="transition hover:text-porcelain">Intake</a>
          <a href="#orchestration" className="transition hover:text-porcelain">Orchestration</a>
          <a href="#workspace" className="transition hover:text-porcelain">Workspace</a>
        </div>
        <a href="#workspace" className="rounded-full bg-porcelain px-4 py-2 text-sm font-medium text-ink transition hover:bg-white">Enter workspace</a>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pt-36">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mb-7 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.28em] text-signal/90">
            Internal operator workspace · MVP
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.065em] text-porcelain sm:text-7xl lg:text-8xl">
            The future operating system for organizational intelligence.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-mist sm:text-xl">
            Eternity converts company context into operational maps, agent ecosystems, workflows, memory systems, deployment architecture, and client repository scaffolds.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#intake" className="rounded-full bg-signal px-6 py-3 text-center text-sm font-semibold text-ink shadow-ambient transition hover:bg-[#d9b67c]">Begin company intake</a>
            <a href="#generated" className="rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-center text-sm font-semibold text-porcelain transition hover:bg-white/[0.08]">View generated intelligence</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="glass-panel relative overflow-hidden rounded-[2.5rem] p-5">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-signal/70 to-transparent" />
          <div className="rounded-[2rem] border border-white/10 bg-ink/60 p-5">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.28em] text-mist">Live compilation</p>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">Operator ready</span>
            </div>
            {['Company brain uploaded', 'Operational graph inferred', 'Agents composed', 'Serverless repo scaffolded'].map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + index * 0.22 }} className="mb-3 flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/15 text-sm text-signal">0{index + 1}</div>
                <div>
                  <p className="font-medium text-porcelain">{item}</p>
                  <p className="text-sm text-mist">Validated by Eternity Core orchestration layer</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
