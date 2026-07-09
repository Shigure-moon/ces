'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, Hexagon } from 'lucide-react'
import { HeroSlide } from '@/components/slides/hero-slide'
import { WhyNowSlide } from '@/components/slides/whynow-slide'
import { PipelineSlide } from '@/components/slides/pipeline-slide'
import { IndustriesSlide } from '@/components/slides/industries-slide'
import { HumanLoopSlide } from '@/components/slides/human-loop-slide'
import { ExamplesSlide } from '@/components/slides/examples-slide'
import { TechSlide } from '@/components/slides/tech-slide'
import { CtaSlide } from '@/components/slides/cta-slide'
import { cn } from '@/lib/utils'

type SlideDef = {
  id: string
  label: string
  Component: React.ComponentType
}

const SLIDES: SlideDef[] = [
  { id: 'intro', label: 'Intro', Component: HeroSlide },
  { id: 'whynow', label: 'Why Now', Component: WhyNowSlide },
  { id: 'pipeline', label: 'Pipeline', Component: PipelineSlide },
  { id: 'industries', label: 'Industries', Component: IndustriesSlide },
  { id: 'human-loop', label: 'Human-in-the-loop', Component: HumanLoopSlide },
  { id: 'examples', label: 'Cases', Component: ExamplesSlide },
  { id: 'stack', label: 'Stack', Component: TechSlide },
  { id: 'start', label: 'Start', Component: CtaSlide },
]

const variants = {
  enter: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? 48 : -48,
  }),
  center: { opacity: 1, y: 0 },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? -48 : 48,
  }),
}

export function Deck() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  const lockRef = useRef(false)

  const goTo = useCallback(
    (next: number) => {
      setState(([current]) => {
        const clamped = Math.max(0, Math.min(SLIDES.length - 1, next))
        if (clamped === current) return [current, 0]
        return [clamped, clamped > current ? 1 : -1]
      })
    },
    [],
  )

  const step = useCallback(
    (delta: number) => {
      if (lockRef.current) return
      lockRef.current = true
      setState(([current]) => {
        const clamped = Math.max(0, Math.min(SLIDES.length - 1, current + delta))
        if (clamped === current) return [current, 0]
        return [clamped, delta]
      })
      window.setTimeout(() => {
        lockRef.current = false
      }, 700)
    },
    [],
  )

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 24) return
      step(e.deltaY > 0 ? 1 : -1)
    }
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault()
        step(1)
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        step(-1)
      } else if (e.key === 'Home') {
        goTo(0)
      } else if (e.key === 'End') {
        goTo(SLIDES.length - 1)
      }
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
    }
  }, [step, goTo])

  const Current = SLIDES[index].Component

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-background text-foreground">
      {/* Top bar */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 sm:px-10">
        <div className="pointer-events-auto flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Hexagon className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <div className="leading-tight">
            <p className="text-base font-semibold tracking-tight">根基智能</p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Engineering Intelligence
            </p>
          </div>
        </div>
        <div className="pointer-events-auto hidden items-center gap-2 font-mono text-xs text-muted-foreground sm:flex">
          <span className="tabular-nums text-foreground">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="h-px w-6 bg-border" />
          <span className="tabular-nums">{String(SLIDES.length).padStart(2, '0')}</span>
        </div>
      </header>

      {/* Progress bar */}
      <div className="absolute inset-x-0 top-0 z-50 h-0.5 bg-transparent">
        <motion.div
          className="h-full bg-primary"
          initial={false}
          animate={{ width: `${((index + 1) / SLIDES.length) * 100}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />
      </div>

      {/* Slides */}
      <AnimatePresence custom={dir} mode="wait">
        <motion.section
          key={SLIDES[index].id}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Current />
        </motion.section>
      </AnimatePresence>

      {/* Right dot nav */}
      <nav className="absolute right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className="group relative flex items-center"
            aria-label={`前往第 ${i + 1} 页：${s.label}`}
          >
            <span className="absolute right-6 whitespace-nowrap rounded-md bg-foreground px-2 py-1 font-mono text-xs uppercase tracking-wider text-background opacity-0 transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
            <span
              className={cn(
                'h-2.5 w-2.5 rounded-full border border-foreground/40 transition-all',
                i === index
                  ? 'scale-110 border-primary bg-primary'
                  : 'bg-transparent group-hover:border-primary',
              )}
            />
          </button>
        ))}
      </nav>

      {/* Bottom controls */}
      <div className="absolute inset-x-0 bottom-0 z-40 flex items-center justify-between px-5 py-5 sm:px-10">
        <p className="hidden font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground sm:block">
          {'方向键'} / {'滚动'} · 切换页面
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => step(-1)}
            disabled={index === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="上一页"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => step(1)}
            disabled={index === SLIDES.length - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-primary text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="下一页"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </main>
  )
}
