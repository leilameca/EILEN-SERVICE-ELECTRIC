'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['Todos', 'Solar', 'Eléctrico', 'A/C']

const projects = [
  {
    id: 1,
    name: 'Residencia Los Prados',
    category: 'Solar',
    kwp: '8.5 kWp',
    type: 'Residencial · On-Grid',
    location: 'Santiago, RD',
    year: '2024',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    id: 2,
    name: 'Supermercado El Buen Precio',
    category: 'Solar',
    kwp: '45 kWp',
    type: 'Comercial · Híbrido',
    location: 'Santiago, RD',
    year: '2024',
    gradient: 'from-sky-400 to-blue-600',
  },
  {
    id: 3,
    name: 'Hotel Boutique Vista Cielo',
    category: 'A/C',
    kwp: '—',
    type: 'Hotelero · VRF Multi-zona',
    location: 'Santiago, RD',
    year: '2023',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    id: 4,
    name: 'Clínica Médica San Felipe',
    category: 'Eléctrico',
    kwp: '—',
    type: 'Comercial · Tablero + UPS',
    location: 'Santiago, RD',
    year: '2023',
    gradient: 'from-pink-400 to-rose-600',
  },
  {
    id: 5,
    name: 'Centro Comercial Premia',
    category: 'Solar',
    kwp: '80 kWp',
    type: 'Comercial · On-Grid',
    location: 'Santiago, RD',
    year: '2022',
    gradient: 'from-gold to-amber-600',
  },
  {
    id: 6,
    name: 'Oficinas Corporativas BHD',
    category: 'Eléctrico',
    kwp: '—',
    type: 'Comercial · Iluminación LED',
    location: 'Santiago, RD',
    year: '2022',
    gradient: 'from-purple-400 to-violet-600',
  },
  {
    id: 7,
    name: 'Empresa Avícola Del Norte',
    category: 'Solar',
    kwp: '35 kWp',
    type: 'Industrial · Híbrido',
    location: 'Santiago, RD',
    year: '2021',
    gradient: 'from-orange-400 to-red-500',
  },
  {
    id: 8,
    name: 'Restaurante La Cúpula',
    category: 'A/C',
    kwp: '—',
    type: 'Gastronómico · Split Inverter',
    location: 'Santiago, RD',
    year: '2021',
    gradient: 'from-teal-400 to-emerald-600',
  },
]

export default function ProjectsFilter() {
  const [active, setActive] = useState('Todos')

  const filtered =
    active === 'Todos' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
              active === cat
                ? 'text-navy'
                : 'text-gray-500 hover:text-navy bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {active === cat && (
              <motion.span
                layoutId="pill"
                className="absolute inset-0 bg-gold rounded-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative">{cat}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className={`h-44 bg-gradient-to-br ${p.gradient} relative flex items-end p-5`}>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                  <span className="bg-black/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.year}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-navy font-bold text-base mb-1">{p.name}</h3>
                <p className="text-gray-400 text-xs mb-3">{p.type}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{p.location}</span>
                  {p.kwp !== '—' && (
                    <span className="text-gold font-bold">{p.kwp}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          No hay proyectos en esta categoría aún.
        </div>
      )}
    </div>
  )
}
