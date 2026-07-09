'use client'

import { motion } from 'motion/react'
import { Cpu, FileText, MonitorUp } from 'lucide-react'
import { Eyebrow, Reveal, SlideShell, easeOut } from './_shared'

const drivers = [
  {
    icon: Cpu,
    title: '新质生产力',
    subtitle: 'AI 赋能工业现场',
    desc: '国家战略推动人工智能与实体经济深度融合，AI 现场工程师正是工业新质生产力的典型落地形态。',
  },
  {
    icon: FileText,
    title: '数据资产入表',
    subtitle: '经验可计量',
    desc: '财政部推动数据资产化，企业几十年沉淀的现场经验从此可以显性化、结构化，成为可计量的数字资产。',
  },
  {
    icon: MonitorUp,
    title: '大规模设备更新',
    subtitle: '智能运维刚需',
    desc: '设备大规模更新浪潮下，传统运维模式难以为继，智能辅助决策成为保障设备安全运行的必然选择。',
  },
]

export function WhyNowSlide() {
  return (
    <SlideShell>
      <Eyebrow>Why Now</Eyebrow>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          政策红利 + 行业刚需 + 技术成熟{' '}
          <span className="text-primary">= 最佳窗口期</span>
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          三大国家战略交汇，现场工程智能化从"可选项"变为"必选项"。
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {drivers.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.18 + i * 0.12 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:border-primary/40 hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <d.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">{d.title}</h3>
            <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.14em] text-primary">
              {d.subtitle}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{d.desc}</p>
          </motion.div>
        ))}
      </div>

      <Reveal delay={0.7} className="mt-10">
        <p className="text-center font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground">
          窗口期有限 <span className="text-primary">·</span> 先行者优势显著
        </p>
      </Reveal>
    </SlideShell>
  )
}
