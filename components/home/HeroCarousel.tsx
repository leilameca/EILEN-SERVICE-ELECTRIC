'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: '/hero-1.jpg',
    alt: 'Instalación de paneles solares residencial - EILEN Electric Service',
    gradient: 'linear-gradient(135deg, #0A2A4A 0%, #1B4F72 50%, #0A2A4A 100%)',
  },
  {
    src: '/hero-2.jpg',
    alt: 'Sistema fotovoltaico comercial - EILEN Electric Service',
    gradient: 'linear-gradient(135deg, #1B4F72 0%, #3A6B8A 50%, #0A2A4A 100%)',
  },
  {
    src: '/hero-3.jpg',
    alt: 'Equipo técnico EILEN en instalación solar',
    gradient: 'linear-gradient(135deg, #0A2A4A 0%, #3A6B8A 40%, #1B4F72 100%)',
  },
]

export default function HeroCarousel() {
  const [current,  setCurrent]  = useState(0)
  const [paused,   setPaused]   = useState(false)
  const [imgError, setImgError] = useState([false, false, false])

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  const handleError = (i: number) =>
    setImgError((prev) => { const n = [...prev]; n[i] = true; return n })

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, paused])

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slides ── */}
      <AnimatePresence>
        {slides.map((slide, i) =>
          i === current ? (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
              {/* Gradiente base — siempre visible */}
              <div className="absolute inset-0" style={{ background: slide.gradient }} />

              {/* Foto real — oculta si falla la carga */}
              {!imgError[i] && (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  onError={() => handleError(i)}
                />
              )}

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-navy/60" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* ── Patrón de líneas ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[2] opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg,#4AACDC 0,#4AACDC 1px,transparent 0,transparent 50px),' +
            'repeating-linear-gradient(180deg,#4AACDC 0,#4AACDC 1px,transparent 0,transparent 50px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* ── Flechas ── */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-gold hover:text-navy text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={next}
        aria-label="Slide siguiente"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-gold hover:text-navy text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* ── Dots ── */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2.5 bg-gold'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
