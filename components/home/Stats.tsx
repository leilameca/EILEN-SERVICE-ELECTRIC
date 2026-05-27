'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { end: 150, suffix: '+', label: 'Proyectos Completados' },
  { end: 850, suffix: '+', label: 'kWp Instalados'        },
  { end: 8,   suffix: '+', label: 'Años de Experiencia'   },
  { end: 200, suffix: '+', label: 'Clientes Satisfechos'  },
]

/* ── Hook de contador animado ── */
function useCounter(end: number, duration: number, inView: boolean, delay: number) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let raf: number
    let timeout: ReturnType<typeof setTimeout>

    timeout = setTimeout(() => {
      let startTime: number | null = null

      const tick = (now: number) => {
        if (!startTime) startTime = now
        const elapsed  = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // ease-out cubic: arranca rápido y frena al final
        const eased    = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(end * eased))
        if (progress < 1) raf = requestAnimationFrame(tick)
        else setCount(end)
      }

      raf = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [inView, end, duration, delay])

  return count
}

/* ── Tarjeta individual ── */
function StatCard({
  end, suffix, label, index,
}: {
  end: number; suffix: string; label: string; index: number
}) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count  = useCounter(end, 2000, inView, index * 150)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="text-center px-4 py-8 sm:px-6"
    >
      <div className="text-4xl sm:text-5xl font-extrabold text-gold mb-2 tabular-nums">
        {count}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="text-lgray text-xs sm:text-sm font-medium uppercase tracking-widest leading-tight">
        {label}
      </div>
    </motion.div>
  )
}

/* ── Sección ── */
export default function Stats() {
  return (
    <section className="bg-panel py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 divide-y lg:divide-y-0">
          {stats.map((s, i) => (
            <StatCard
              key={s.label}
              end={s.end}
              suffix={s.suffix}
              label={s.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
