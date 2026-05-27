'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const links = [
  { href: '/',           label: 'Inicio' },
  { href: '/servicios',  label: 'Servicios' },
  { href: '/nosotros',   label: 'Nosotros' },
  { href: '/proyectos',  label: 'Proyectos' },
  { href: '/contacto',   label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-navy shadow-lg shadow-black/30'
          : 'bg-navy/90 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-28">

          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <img
              src={`${BASE}/logo.png`}
              alt="EILEN Electric Service"
              className="h-16 md:h-24 w-auto group-hover:scale-105 transition-transform duration-200"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(245,168,0,0.25))' }}
            />
            <div className="leading-tight hidden sm:block">
              <span className="block text-white font-extrabold text-xl md:text-2xl tracking-wide">
                EILEN
              </span>
              <span className="block text-gold text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold">
                Electric Service
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    pathname === href
                      ? 'text-gold bg-white/5'
                      : 'text-white/80 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/cotizacion"
              className="hidden md:inline-flex btn-gold text-sm py-2 px-5 whitespace-nowrap"
            >
              Solicitar Cotización
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-white hover:text-gold transition-colors"
              aria-label="Menú"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet menu */}
        {open && (
          <div className="lg:hidden border-t border-white/10 py-4 space-y-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-gold bg-white/5'
                    : 'text-white/80 hover:text-gold hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Link href="/cotizacion" className="btn-gold block text-center text-sm py-3">
                Solicitar Cotización
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
