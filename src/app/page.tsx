'use client';

import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { IntelligenceCard } from '@/components/IntelligenceCard';
import { Section } from '@/components/Section';
import { agents, dashboardMetrics, intakeSignals, orchestrationStages, repositoryTree, workflows } from '@/lib/intelligence';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <Section
        eyebrow="01 · Client onboarding"
        title="A first-touch intake that feels like handing the company brain to an operating system."
        description="Operators can collect founder context, documents, transcripts, CRM data, SOPs, and operational constraints without exposing technical complexity."
        className="pt-8"
      >
        <div id="intake" className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <IntelligenceCard>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-mist">Client profile</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.04em]">Northstar Health Group</h3>
              </div>
              <span className="rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-signal">Draft</span>
            </div>
            <div className="space-y-3">
              {['Company stage: 120 employees', 'Primary goal: reduce operational drag', 'Critical systems: HubSpot, Slack, Notion, Zendesk', 'Executive constraint: no technical lift for team'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 text-sm text-porcelain/90">{item}</div>
              ))}
            </div>
            <textarea
              aria-label="Operational problems"
              defaultValue="Our sales and onboarding teams repeat the same context in every handoff. Support escalations depend on tribal knowledge. Leadership cannot see where execution slows down until it becomes a customer problem."
              className="mt-5 min-h-36 w-full resize-none rounded-3xl border border-white/10 bg-black/20 p-5 text-sm leading-6 text-mist outline-none ring-signal/30 transition focus:ring-4"
            />
          </IntelligenceCard>

          <IntelligenceCard delay={0.08}>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-mist">Upload interface</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.04em]">Operational evidence layer</h3>
              </div>
              <button className="rounded-full bg-porcelain px-4 py-2 text-sm font-semibold text-ink">Upload</button>
            </div>
            <div className="rounded-[1.7rem] border border-dashed border-white/[0.18] bg-white/[0.03] p-8 text-center">
              <p className="text-lg font-medium text-porcelain">Drop transcripts, SOPs, PDFs, CRM exports, voice notes, Loom summaries, or screenshots.</p>
              <p className="mt-3 text-sm text-mist">Eternity normalizes every artifact into company memory primitives before orchestration begins.</p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {intakeSignals.map((signal) => (
                <div key={signal.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-porcelain">{signal.label}</p>
                    <span className="text-xs text-signal">{signal.volume}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-mist">{signal.detail}</p>
                </div>
              ))}
            </div>
          </IntelligenceCard>
        </div>
      </Section>

      <Section
        eyebrow="02 · Cinematic orchestration"
        title="Analysis is presented as a calm sequence of operational synthesis, not a loading spinner."
        description="Operators see exactly how Eternity compiles company information into maps, agents, memory, workflows, dashboards, and deployable infrastructure."
      >
        <div id="orchestration" className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <IntelligenceCard className="relative overflow-hidden">
            <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cobalt/10 blur-3xl" />
            <div className="relative">
              {orchestrationStages.map((stage, index) => (
                <div key={stage.stage} className="grid gap-4 border-b border-white/[0.08] py-5 last:border-b-0 sm:grid-cols-[8rem_1fr_4rem] sm:items-center">
                  <div className="text-xs uppercase tracking-[0.28em] text-signal">{stage.stage}</div>
                  <div>
                    <p className="text-sm text-mist">{stage.copy}</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${stage.progress}%` }} viewport={{ once: true }} transition={{ delay: index * 0.12, duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="h-full rounded-full bg-gradient-to-r from-signal to-cobalt" />
                    </div>
                  </div>
                  <div className="text-right text-sm text-porcelain">{stage.progress}%</div>
                </div>
              ))}
            </div>
          </IntelligenceCard>

          <IntelligenceCard delay={0.08}>
            <p className="text-xs uppercase tracking-[0.32em] text-mist">System inference</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">Detected operating model</h3>
            <div className="mt-6 space-y-4">
              {['Revenue depends on founder-led context transfer.', 'Onboarding quality varies by individual project lead.', 'Support escalations lack searchable institutional memory.', 'Executive reporting is reactive rather than operationally predictive.'].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.035] p-4 text-sm text-mist">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-signal" />
                  {item}
                </div>
              ))}
            </div>
          </IntelligenceCard>
        </div>
      </Section>

      <Section
        eyebrow="03 · Generated architecture"
        title="The workspace turns company context into a visible agent and workflow ecosystem."
        description="Every generated agent has a role, memory boundary, KPI, and operating purpose. Every workflow has triggers, owners, fallback logic, and measurable outcomes."
      >
        <div id="workspace" className="grid gap-5 xl:grid-cols-[1fr_1fr]">
          <IntelligenceCard>
            <div className="mb-6 flex items-end justify-between gap-5">
              <div>
                <p className="text-sm text-mist">Agent ecosystem</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.04em]">Specialized operational agents</h3>
              </div>
              <div className="text-right text-sm text-signal">5 active nodes</div>
            </div>
            <div className="grid gap-3">
              {agents.map((agent, index) => (
                <motion.div key={agent.name} whileHover={{ x: 4 }} className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-signal/12 text-sm text-signal">{index + 1}</div>
                      <div>
                        <p className="font-medium text-porcelain">{agent.name}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-mist">{agent.domain}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-mist">{agent.kpi}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-mist">{agent.objective}</p>
                  <p className="mt-2 text-xs text-signal/80">Memory access: {agent.access}</p>
                </motion.div>
              ))}
            </div>
          </IntelligenceCard>

          <IntelligenceCard delay={0.08}>
            <div className="mb-6 flex items-end justify-between gap-5">
              <div>
                <p className="text-sm text-mist">Workflow architecture</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.04em]">Execution pathways</h3>
              </div>
              <div className="text-right text-sm text-signal">4 generated</div>
            </div>
            <div className="space-y-4">
              {workflows.map((workflow) => (
                <div key={workflow.title} className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.035] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="font-medium text-porcelain">{workflow.title}</h4>
                    <span className="rounded-full border border-cobalt/25 bg-cobalt/10 px-3 py-1 text-xs text-cobalt">{workflow.trigger}</span>
                  </div>
                  <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
                  <p className="text-sm leading-6 text-mist">{workflow.result}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-signal/80">Agents · {workflow.agents.join(' + ')}</p>
                </div>
              ))}
            </div>
          </IntelligenceCard>
        </div>
      </Section>

      <Section
        eyebrow="04 · Intelligence dashboard"
        title="Executive-grade output for decisions, deployment, and client repository generation."
        description="The MVP simulates the deployment-ready repo scaffold, Vercel serverless topology, and an intelligence dashboard operators can hand to client leadership."
      >
        <div id="generated" className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <IntelligenceCard>
            <p className="text-sm text-mist">Repository generation</p>
            <h3 className="mt-1 text-2xl font-semibold tracking-[-0.04em]">Deployment-ready scaffold</h3>
            <pre className="calm-scrollbar mt-6 overflow-x-auto rounded-[1.5rem] border border-white/[0.08] bg-black/35 p-5 text-sm leading-7 text-porcelain/85">
              {repositoryTree.join('\n')}
            </pre>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {['Vercel serverless functions', 'Environment contract', 'Agent runtime adapters', 'Memory schema seeds'].map((item) => (
                <div key={item} className="rounded-2xl bg-white/[0.035] p-4 text-sm text-mist">{item}</div>
              ))}
            </div>
          </IntelligenceCard>

          <IntelligenceCard delay={0.08}>
            <p className="text-sm text-mist">Generated intelligence</p>
            <h3 className="mt-1 text-2xl font-semibold tracking-[-0.04em]">Operational dashboard</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {dashboardMetrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-5">
                  <p className="text-sm text-mist">{metric.label}</p>
                  <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-porcelain">{metric.value}</p>
                  <p className="mt-3 text-sm leading-6 text-mist">{metric.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[1.5rem] border border-signal/20 bg-signal/10 p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-signal">Executive summary</p>
              <p className="mt-3 text-lg leading-8 text-porcelain/90">
                Eternity recommends stabilizing memory capture and handoff intelligence first, then deploying revenue and onboarding agents before expanding into support triage and weekly leadership synthesis.
              </p>
            </div>
          </IntelligenceCard>
        </div>
      </Section>

      <footer className="mx-auto max-w-7xl px-6 pb-12 pt-4 text-sm text-mist sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p>ETERNITY · Operational intelligence orchestrator</p>
          <p>Company-to-system compilation for internal operators</p>
        </div>
      </footer>
    </main>
  );
}
