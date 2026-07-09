'use client'

import { motion } from 'motion/react'
import { ArrowRight, BookOpen, BrainCircuit, ClipboardCheck } from 'lucide-react'
import { Eyebrow, Reveal, SlideShell, easeOut } from './_shared'

const stages = [
  {
    icon: BookOpen,
    step: '01',
    title: '现场经验',
    subtitle: 'Experience Collection',
    desc: '老师傅经验、现场案例、标准流程被系统化采集和结构化存储，不再随人员流动而流失。',
    tags: ['经验采集', '案例归档', '流程标准化'],
  },
  {
    icon: BrainCircuit,
    step: '02',
    title: '智能理解',
    subtitle: 'Intelligent Understanding',
    desc: 'AI 理解经验背后的决策逻辑，自动关联相似场景并生成参考方案，让新人也能调用十年老师傅的判断力。',
    tags: ['场景关联', '决策推理', '方案生成'],
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: '辅助决策',
    subtitle: 'Decision Support',
    desc: '为一线工程师提供方案 A / B / C，让每一次现场处置都更加高效、标准、安全。',
    tags: ['方案推荐', '标准执行', '安全合规'],
  },
]

export function PipelineSlide() {
  return (
    <SlideShell>
      <Eyebrow>The Core Loop</Eyebrow>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          经验如何变成 <span className="text-primary">可复用的智能决策</span>
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          每一次现场处理，都会被系统理解、归档并转化为下一次可以自动调用的能力。
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {stages.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.2 + i * 0.15 }}
            className="relative"
          >
            <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:border-primary/40 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-mono text-sm text-muted-foreground">{s.step}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {s.subtitle}
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary px-2.5 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {i < stages.length - 1 && (
              <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-primary shadow-sm"
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SlideShell>
  )
}
