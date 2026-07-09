'use client'

import { motion } from 'motion/react'
import { ArrowUpRight, Hexagon } from 'lucide-react'
import { easeOut } from './_shared'

const stats = [
  { v: '4+', l: '行业垂直复用' },
  { v: '97%', l: '方案可靠度' },
  { v: '38×', l: '经验复用倍数' },
]

export function CtaSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden dot-bg">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg"
        >
          <Hexagon className="h-7 w-7" strokeWidth={2.5} />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          className="mt-8 text-balance text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl"
        >
          让企业经验，<span className="text-primary">成为可传承的数字资产</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          在新质生产力与数据资产化的双重驱动下，根基智能助力企业将几十年现场经验
          转化为可持续增值的智能能力。现已开放行业共建与演示预约。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition hover:opacity-90">
            预约演示
            <ArrowUpRight className="h-5 w-5" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition hover:bg-secondary">
            方案咨询
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.6 }}
          className="mt-16 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-border pt-10"
        >
          {stats.map((s) => (
            <div key={s.l}>
              <p className="font-mono text-3xl font-semibold tabular-nums text-primary sm:text-4xl">
                {s.v}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
