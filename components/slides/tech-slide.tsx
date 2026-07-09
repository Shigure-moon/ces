'use client'

import { motion } from 'motion/react'
import { Building2, Rocket, ShieldCheck, TrendingUp } from 'lucide-react'
import { Eyebrow, Reveal, SlideShell, easeOut } from './_shared'

const pillars = [
  {
    icon: TrendingUp,
    title: '价值驱动',
    zh: 'Value',
    desc: '不炫技术，用可量化的效率提升与投入产出说话。每一次辅助决策都创造真实业务价值。',
  },
  {
    icon: Building2,
    title: '行业深耕',
    zh: 'Industry',
    desc: '设备运维、环保运营、汽车维修、医院后勤 — 跨行业复用核心智能，快速适配行业标准。',
  },
  {
    icon: ShieldCheck,
    title: '安全可控',
    zh: 'Security',
    desc: '全链路数据不出域，支持信创环境私有化部署，满足政务、医疗等强监管行业安全合规要求。',
  },
  {
    icon: Rocket,
    title: '持续进化',
    zh: 'Future',
    desc: '老师傅的经验不断沉淀为数字资产，AI 随每一次现场处置持续成长，知识资产持续增值。',
  },
]

export function TechSlide() {
  return (
    <SlideShell>
      <Eyebrow>Strategy</Eyebrow>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          四项 <span className="text-primary">核心优势</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.15 + i * 0.1 }}
            className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:border-primary/40 hover:shadow-md"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <p.icon className="h-6 w-6" />
            </span>
            <div>
              <div className="flex items-baseline gap-3">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <span className="text-sm text-muted-foreground">{p.zh}</span>
              </div>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Reveal delay={0.6} className="mt-10">
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-7 py-3.5 text-sm font-medium text-primary">
          <span>信创兼容</span>
          <span className="text-muted-foreground">·</span>
          <span>数据不出域</span>
          <span className="text-muted-foreground">·</span>
          <span>私有化部署</span>
          <span className="text-muted-foreground">·</span>
          <span>安全合规</span>
        </div>
      </Reveal>
    </SlideShell>
  )
}
