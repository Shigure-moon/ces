'use client'

import { motion } from 'motion/react'
import { ChevronDown, TrendingUp, Shield, Zap, RefreshCw } from 'lucide-react'
import { easeOut } from './_shared'

const badges = [
  { icon: TrendingUp, label: '经验数字化' },
  { icon: Shield, label: '知识资产化' },
  { icon: Zap, label: '智能决策' },
  { icon: RefreshCw, label: '持续成长' },
]

export function HeroSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden grid-bg">
      {/* soft accent glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-5 py-2 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          企业知识资产智能平台
        </motion.div>

        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          {['根基智能', 'AI 现场工程师', '让经验成为可持续智能'].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.1 + i * 0.1 }}
              className="block"
            >
              {i === 2 ? <span className="text-primary">{line}</span> : line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
          className="mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          以人工智能赋能<span className="text-foreground font-semibold"> 新质生产力</span>，
          将企业几十年沉淀的现场经验{' '}
          <span className="text-foreground">→</span> 可持续成长的智能能力
          <br className="hidden sm:block" />
          为运维人员提供全天候辅助决策，让每一次现场处置更高效、更标准、更安全。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm"
            >
              <Icon className="h-4 w-4 text-primary" />
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex flex-col items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          Scroll to explore
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-5 w-5 text-primary" />
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}
