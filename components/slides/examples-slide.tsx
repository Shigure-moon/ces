'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Car, Droplets, Factory } from 'lucide-react'
import { Eyebrow, Reveal, SlideShell, easeOut } from './_shared'

type Solution = { tag: string; title: string; detail: string; recommended?: boolean }

const cases = [
  {
    id: 'water',
    icon: Droplets,
    name: '水质系统',
    en: 'Water Quality',
    signals: [
      { k: '浊度', v: '8.2 NTU', bad: true },
      { k: 'pH', v: '6.3', bad: true },
      { k: '余氯', v: '0.15 mg/L', bad: true },
    ],
    diagnosis: '絮凝不足 + 加药量偏低，出水浊度超标风险上升。',
    solutions: [
      { tag: '方案 A', title: '提高 PAC 加药量 12%', detail: '优先调节絮凝，预计 30 分钟见效', recommended: true },
      { tag: '方案 B', title: '投加助凝剂 PAM', detail: '适用于持续高浊场景' },
      { tag: '方案 C', title: '降低进水负荷', detail: '短期缓解，需人工确认' },
    ] as Solution[],
  },
  {
    id: 'auto',
    icon: Car,
    name: '汽车维修',
    en: 'Auto Repair',
    signals: [
      { k: '故障码', v: 'P0301', bad: true },
      { k: '缸压', v: '9.1 bar', bad: true },
      { k: '点火能量', v: '−18%', bad: true },
    ],
    diagnosis: '1 缸失火，点火系统能量衰减，疑似点火线圈老化。',
    solutions: [
      { tag: '方案 A', title: '更换 1 缸点火线圈', detail: '匹配 12 起同款案例，成功率高', recommended: true },
      { tag: '方案 B', title: '检查火花塞间隙', detail: '低成本先行排查' },
      { tag: '方案 C', title: '喷油嘴清洗', detail: '排除混合气异常' },
    ] as Solution[],
  },
  {
    id: 'equipment',
    icon: Factory,
    name: '设备维护',
    en: 'Equipment Maintenance',
    signals: [
      { k: '轴承振动', v: '4.6 mm/s', bad: true },
      { k: '温度', v: '78 °C', bad: true },
      { k: '电流谐波', v: '偏高', bad: true },
    ],
    diagnosis: '轴承早期磨损 + 对中偏差，建议进入预测性维护流程。',
    solutions: [
      { tag: '方案 A', title: '安排轴承更换窗口', detail: '结合停机计划，避免非计划停产', recommended: true },
      { tag: '方案 B', title: '激光对中校正', detail: '消除对中偏差来源' },
      { tag: '方案 C', title: '加密监测频率', detail: '持续跟踪趋势变化' },
    ] as Solution[],
  },
]

export function ExamplesSlide() {
  const [active, setActive] = useState(0)
  const current = cases[active]

  return (
    <SlideShell>
      <Eyebrow>Field Cases</Eyebrow>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          三个真实场景的 <span className="text-primary">决策示例</span>
        </h2>
      </Reveal>

      {/* tabs */}
      <Reveal delay={0.12} className="mt-7">
        <div className="flex flex-wrap gap-2">
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-base font-medium transition ${
                active === i
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-secondary-foreground hover:border-primary/40'
              }`}
            >
              <c.icon className="h-5 w-5" />
              {c.name}
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: easeOut }}
          className="mt-7 grid gap-5 lg:grid-cols-[1fr_1.4fr]"
        >
          {/* Sensor + diagnosis */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Sensor Readout · {current.en}
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {current.signals.map((s) => (
                <div key={s.k} className="rounded-xl border border-border bg-secondary/40 p-4">
                  <p className="text-sm text-muted-foreground">{s.k}</p>
                  <p className="mt-1.5 font-mono text-lg font-semibold text-foreground">{s.v}</p>
                  <span className="mt-1.5 inline-flex items-center gap-1 text-xs text-destructive">
                    <span className="h-1.5 w-1.5 rounded-full bg-destructive" /> 超阈值
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-primary/5 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                AI Diagnosis
              </p>
              <p className="mt-2 text-base leading-relaxed text-foreground">{current.diagnosis}</p>
            </div>
          </div>

          {/* Solutions A/B/C */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Recommended Solutions
            </p>
            <div className="mt-5 space-y-3">
              {current.solutions.map((sol, i) => (
                <motion.div
                  key={sol.tag}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: easeOut, delay: 0.1 + i * 0.1 }}
                  className={`flex items-start justify-between gap-4 rounded-xl border p-5 ${
                    sol.recommended
                      ? 'border-primary/50 bg-primary/5'
                      : 'border-border bg-secondary/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-semibold text-primary">
                        {sol.tag}
                      </span>
                      {sol.recommended && (
                        <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                          推荐
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-base font-semibold">{sol.title}</p>
                    <p className="text-sm text-muted-foreground">{sol.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </SlideShell>
  )
}
