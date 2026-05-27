import Link from 'next/link'
import { Sun, Zap, Wind, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const services = [
  {
    icon: Sun,
    title: 'Solar Fotovoltaico',
    description:
      'Sistemas On-Grid, Off-Grid e Híbridos con paneles de alta eficiencia y baterías de litio para tu hogar o empresa.',
    color: 'bg-amber-50 text-amber-600',
    href: '/servicios#solar',
  },
  {
    icon: Zap,
    title: 'Eléctrico Residencial & Comercial',
    description:
      'Instalaciones, remodelaciones y mantenimiento eléctrico certificado para proyectos residenciales, comerciales e industriales.',
    color: 'bg-blue-50 text-sky',
    href: '/servicios#electrico',
  },
  {
    icon: Wind,
    title: 'Aire Acondicionado & Refrigeración',
    description:
      'Instalación, mantenimiento y reparación de sistemas split, central, VRF y cámaras frías para el trópico dominicano.',
    color: 'bg-cyan-50 text-cyan-600',
    href: '/servicios#ac',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Lo que hacemos</span>
          <h2 className="section-title mt-2">Nuestros Servicios</h2>
          <p className="section-subtitle mx-auto mt-3">
            Soluciones integrales de energía pensadas para el clima y las necesidades del mercado dominicano.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="group bg-white border border-gray-100 rounded-2xl p-7 card-hover shadow-sm hover:border-gold/30 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-xl ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-navy font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.description}</p>
                <Link
                  href={s.href}
                  className="mt-5 inline-flex items-center gap-1 text-sky text-sm font-semibold hover:gap-2 transition-all"
                >
                  Ver más <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
