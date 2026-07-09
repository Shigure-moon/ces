'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Car, Droplets, Factory, Stethoscope } from 'lucide-react'
import { Eyebrow, Reveal, SlideShell, easeOut } from './_shared'

const industries = [
  {
    icon: Factory,
    title: '设备运维',
    en: 'Equipment O&M',
    desc: '将设备维护经验结构化沉淀，跨产线预测性维护，助力大规模设备更新行动，降低非计划停机。',
    img: '/industry-equipment.png',
  },
  {
    icon: Droplets,
    title: '环保运营',
    en: 'Environmental Ops',
    desc: '水质、废气、固废处理经验数字化，服务双碳目标下的精细化运营，为一线人员提供实时智能辅助。',
    img: '/industry-water.png',
  },
  {
    icon: Car,
    title: '汽车维修',
    en: 'Auto Repair',
    desc: '沉淀资深技师诊断路径，将百万公里维修经验转化为可复用决策图谱，推动服务业数字化转型。',
    img: '/industry-auto.png',
  },
  {
    icon: Stethoscope,
    title: '医院后勤',
    en: 'Hospital Facility',
    desc: '医疗设备全生命周期智能管理，满足智慧医院评审与安全合规要求，保障医疗环境稳定运行。',
    img: '/industry-sensor.png',
  },
]

export function IndustriesSlide() {
  const [active, setActive] = useState(0)

  return (
    <SlideShell>
      <Eyebrow>Modular Capability</Eyebrow>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          同一套 AI 系统，<span className="text-primary">多行业复用</span>
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          垂直能力可插拔扩展 —— 只需接入对应领域的现场经验与行业知识，即可快速落地。
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((item, i) => (
          <motion.button
            key={item.en}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.18 + i * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl border text-left transition-all ${
              active === i
                ? 'border-primary/50 shadow-lg'
                : 'border-border shadow-sm hover:border-primary/30'
            }`}
          >
            <div className="relative h-36 w-full overflow-hidden">
              <img
                src={item.img || '/placeholder.svg'}
                alt={item.title}
                className={`h-full w-full object-cover transition-transform duration-500 ${
                  active === i ? 'scale-105' : 'scale-100 group-hover:scale-105'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-background/90 text-primary shadow-sm backdrop-blur">
                <item.icon className="h-5 w-5" />
              </span>
            </div>
            <div className="bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {item.en}
              </p>
              <h3 className="mt-1.5 text-base font-semibold tracking-tight">{item.title}</h3>
              <motion.p
                initial={false}
                animate={{
                  height: active === i ? 'auto' : 0,
                  opacity: active === i ? 1 : 0,
                }}
                className="overflow-hidden text-sm leading-relaxed text-muted-foreground"
              >
                <span className="block pt-2">{item.desc}</span>
              </motion.p>
            </div>
            {active === i && (
              <motion.span
                layoutId="industry-underline"
                className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"
              />
            )}
          </motion.button>
        ))}
      </div>

      <Reveal delay={0.6} className="mt-10">
        <p className="font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground">
          本质 <span className="text-primary">/</span> One core intelligence, many industries
        </p>
      </Reveal>
    </SlideShell>
  )
}
