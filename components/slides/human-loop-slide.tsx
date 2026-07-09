'use client'

import { motion } from 'motion/react'
import { CheckCircle2, FileText, RefreshCw, User } from 'lucide-react'
import { Eyebrow, Reveal, SlideShell, easeOut } from './_shared'

const engineerLogs = [
  { icon: User, label: '老师傅现场经验', meta: '诊断路径 · 处置方案 · 调整技巧' },
  { icon: FileText, label: '案例自动归档', meta: '每一次处理都沉淀为标准可复用案例' },
  { icon: RefreshCw, label: '经验持续进化', meta: '新人也能调用十年老师傅的判断力' },
]

const timeline = [
  { t: 'T0', label: '现场处置' },
  { t: 'T1', label: '经验采集' },
  { t: 'T2', label: '智能归档' },
  { t: 'T3', label: '知识沉淀' },
]

export function HumanLoopSlide() {
  return (
    <SlideShell>
      <Eyebrow>Experience Loop</Eyebrow>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          从老师傅经验到 <span className="text-primary">企业数字资产</span>
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          企业最大的资产不只是设备，更是几十年沉淀下来的经验 —— 根基智能让经验不再随人员流失。
        </p>
      </Reveal>

      <div className="relative mt-12 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr]">
        {/* Left: engineer records */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Experience Input
          </p>
          <div className="mt-5 space-y-4">
            {engineerLogs.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.35 + i * 0.12 }}
                className="flex items-center gap-4 rounded-xl border border-border bg-secondary/50 p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <l.icon className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-base font-medium">{l.label}</p>
                  <p className="font-mono text-xs text-muted-foreground">{l.meta}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Center: timeline + particle absorption */}
        <div className="relative flex min-w-[160px] items-center justify-center py-2">
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {[0, 1, 2, 3, 4].map((p) => (
              <motion.span
                key={p}
                className="absolute top-1/2 h-2 w-2 rounded-full bg-primary"
                initial={{ left: '0%', opacity: 0 }}
                animate={{
                  left: ['0%', '100%'],
                  opacity: [0, 1, 1, 0],
                  y: [(p - 2) * 14, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  delay: p * 0.35,
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center gap-0">
            {timeline.map((node, i) => (
              <motion.div
                key={node.t}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: easeOut, delay: 0.5 + i * 0.18 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-primary bg-background" />
                  <span className="font-mono text-xs text-muted-foreground">{node.t}</span>
                  <span className="text-sm font-medium">{node.label}</span>
                </div>
                {i < timeline.length - 1 && (
                  <motion.span
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.4, ease: easeOut, delay: 0.6 + i * 0.18 }}
                    className="my-1 h-7 w-px origin-top bg-gradient-to-b from-primary to-accent"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: knowledge asset card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 1.1 }}
          className="relative overflow-hidden rounded-2xl border border-primary/40 bg-card p-6 shadow-lg"
        >
          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Knowledge Asset
            </p>
            <CheckCircle2 className="h-5 w-5 text-primary" />
          </div>
          <h3 className="mt-5 text-xl font-semibold tracking-tight">案例 X 已沉淀</h3>
          <p className="text-base text-muted-foreground">巡检策略 · 自动生成</p>

          <div className="mt-6 space-y-5">
            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">方案可靠度</span>
                <span className="font-mono font-semibold text-primary">97%</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '97%' }}
                  transition={{ duration: 1, ease: easeOut, delay: 1.4 }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-secondary/50 p-4">
              <p className="font-mono text-3xl font-semibold tabular-nums text-foreground">38</p>
              <p className="text-sm text-muted-foreground">
                相似场景可复用次数
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  )
}
