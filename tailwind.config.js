const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, 'app/**/*.{js,ts,jsx,tsx,mdx}'),
    path.join(__dirname, 'components/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  // Clases generadas dinámicamente (en variables/arrays) que el JIT no detecta solo
  safelist: [
    // Colores custom usados via interpolación
    'bg-navy','bg-panel','bg-sky','bg-slate','bg-gold','bg-lgray',
    'text-navy','text-panel','text-sky','text-slate','text-gold','text-lgray',
    'border-navy','border-panel','border-sky','border-slate','border-gold',
    // Gradientes de tarjetas de proyectos
    'from-amber-400','to-orange-500',
    'from-sky-400','to-blue-600',
    'from-emerald-400','to-teal-600',
    'from-cyan-400','to-blue-500',
    'from-pink-400','to-rose-600',
    'from-gold','to-amber-600',
    'from-purple-400','to-violet-600',
    'from-orange-400','to-red-500',
    'from-teal-400','to-emerald-600',
    'bg-gradient-to-br',
    // Colores de avatares dinámicos
    'bg-emerald-500','bg-purple-500',
    // Estados hover con colores custom
    'hover:bg-gold','hover:text-navy',
  ],
  theme: {
    extend: {
      colors: {
        navy:  '#0A2A4A',
        gold:  '#F5A800',
        sky:   '#4AACDC',
        panel: '#1B4F72',
        slate: '#3A6B8A',
        lgray: '#B0BEC5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
