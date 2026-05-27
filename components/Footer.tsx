import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const services = [
  'Solar Fotovoltaico',
  'Instalaciones Eléctricas',
  'Aire Acondicionado',
  'Baterías de Litio',
]

const pages = [
  { href: '/',           label: 'Inicio' },
  { href: '/servicios',  label: 'Servicios' },
  { href: '/nosotros',   label: 'Nosotros' },
  { href: '/proyectos',  label: 'Proyectos' },
  { href: '/cotizacion', label: 'Cotización' },
  { href: '/contacto',   label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="divider-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <img
                src={`${BASE}/images/logo.png`}
                alt="EILEN Electric Service"
                className="h-20 w-auto group-hover:scale-105 transition-transform duration-200"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(245,168,0,0.2))' }}
              />
              <div className="leading-tight">
                <span className="block text-white font-extrabold text-xl tracking-wide">EILEN</span>
                <span className="block text-gold text-[10px] tracking-[0.2em] uppercase font-semibold">Electric Service</span>
              </div>
            </Link>
            <p className="text-lgray text-sm leading-relaxed mb-5">
              Líderes en energía solar, servicios eléctricos y soluciones de refrigeración en Santiago, República Dominicana.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/eilenelectricservice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/18097136272"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-gold mb-5 uppercase tracking-wider text-sm">Servicios</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/servicios"
                    className="text-lgray text-sm hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold inline-block flex-shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-gold mb-5 uppercase tracking-wider text-sm">Empresa</h4>
            <ul className="space-y-2">
              {pages.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-lgray text-sm hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold inline-block flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gold mb-5 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-lgray text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>La Canela, Santiago de los Caballeros, República Dominicana</span>
              </li>
              <li>
                <a
                  href="tel:+18097136272"
                  className="flex items-center gap-3 text-lgray text-sm hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  (809) 713-6272
                </a>
              </li>
              <li>
                <a
                  href="mailto:wilmerenergi@gmail.com"
                  className="flex items-center gap-3 text-lgray text-sm hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  wilmerenergi@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-lgray text-xs">RNC: 132-97802-1</p>
              <p className="text-lgray text-xs mt-1">CEO: Wilmer Collado</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-lgray text-xs text-center sm:text-left">
            © {new Date().getFullYear()} EILEN Electric Service. Todos los derechos reservados.
          </p>
          <p className="text-lgray text-xs">
            Santiago, RD
          </p>
        </div>
      </div>
    </footer>
  )
}
