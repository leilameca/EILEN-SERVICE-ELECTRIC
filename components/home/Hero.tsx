'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import HeroCarousel from './HeroCarousel'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background carousel */}
      <HeroCarousel />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-sky/10 blur-3xl pointer-events-none z-[3]" />
      <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none z-[3]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 md:pt-32 pb-24">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Iluminamos el futuro
          <br />
          <span className="text-gold">con energía solar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lgray text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-2"
        >
          Soluciones fotovoltaicas, instalaciones eléctricas y sistemas de
          refrigeración diseñados para tu hogar y empresa en Santiago, RD.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/cotizacion"
            className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base px-7 sm:px-8 py-4"
          >
            Solicitar Cotización Gratis
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </Link>
          <Link
            href="/servicios"
            className="btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base px-7 sm:px-8 py-4"
          >
            Ver Servicios
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-6"
        >
          {['Mas de 150 proyectos', 'Garantia 10 anos paneles', 'Servicio 24/7'].map((t) => (
            <span key={t} className="text-white/50 text-xs sm:text-sm">{t}</span>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
