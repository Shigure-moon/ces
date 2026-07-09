'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export const easeOut = [0.22, 1, 0.36, 1] as const

export function SlideShell({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className="h-full w-full overflow-y-auto">
      <div
        className={cn(
          'mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-12',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function Eyebrow({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut, delay }}
      className={cn(
        'inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.22em] text-primary',
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </motion.div>
  )
}

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
