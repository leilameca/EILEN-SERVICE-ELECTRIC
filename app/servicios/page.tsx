import type { Metadata } from 'next'
import { Sun, Zap, Wind, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import FinalCTA from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Servicios de energía solar fotovoltaica, instalaciones eléctricas y aire acondicionado en Santiago, República Dominicana.',
}

const services = [
  {
    id: 'solar',
    icon: Sun,
    title: 'Solar Fotovoltaico',
    subtitle: 'On-Grid · Off-Grid · Híbrido',
    description:
      'Diseñamos e instalamos sistemas fotovoltaicos completos adaptados a tu consumo y presupuesto. Utilizamos paneles monocristalinos de alta eficiencia, inversores de última generación y baterías de litio con gestión inteligente de energía.',
    benefits: [
      'Reducción de hasta 90% en la factura eléctrica',
      'Sistemas conectados a la red (On-Grid) con medición bidireccional',
      'Sistemas autónomos (Off-Grid) para zonas sin cobertura eléctrica',
      'Sistemas híbridos con respaldo de batería ante apagones',
      'Monitoreo en tiempo real desde tu smartphone',
      'Garantía de 25 años en paneles y 10 en inversores',
    ],
    systems: [
      { name: 'On-Grid',  desc: 'Conectado a la red eléctrica. Ideal para reducir factura.' },
      { name: 'Off-Grid', desc: 'Totalmente autónomo. Para fincas y zonas remotas.' },
      { name: 'Híbrido',  desc: 'Lo mejor de ambos mundos: red + batería de respaldo.' },
    ],
    colorFrom: 'from-amber-400',
    colorTo: 'to-orange-500',
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'electrico',
    icon: Zap,
    title: 'Instalaciones Eléctricas',
    subtitle: 'Residencial · Comercial · Industrial',
    description:
      'Realizamos todo tipo de trabajos eléctricos, desde remodelaciones de tableros hasta instalaciones completas para proyectos de construcción. Nuestros técnicos están certificados y trabajan bajo las normas del MEER y el código NEC.',
    benefits: [
      'Instalación y actualización de tableros eléctricos',
      'Cableado estructurado para hogares y oficinas',
      'Instalación de plantas eléctricas y transferencias automáticas',
      'Iluminación LED eficiente para comercios y hogares',
      'Mantenimiento preventivo y correctivo',
      'Certificación y puesta en servicio de instalaciones',
    ],
    systems: [
      { name: 'Residencial', desc: 'Casas, villas y apartamentos.' },
      { name: 'Comercial',   desc: 'Locales, oficinas y centros comerciales.' },
      { name: 'Industrial',  desc: 'Fábricas, almacenes y plantas de producción.' },
    ],
    colorFrom: 'from-sky-400',
    colorTo: 'to-blue-600',
    iconColor: 'text-sky',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'ac',
    icon: Wind,
    title: 'Aire Acondicionado & Refrigeración',
    subtitle: 'Split · Central · VRF · Cámaras Frías',
    description:
      'Instalamos y mantenemos sistemas de climatización de todas las marcas y capacidades. Desde un split residencial hasta un sistema VRF para un hotel, contamos con el personal y los equipos para hacerlo correctamente.',
    benefits: [
      'Instalación de minisplit inverter de alta eficiencia',
      'Sistemas centrales para proyectos comerciales y hoteleros',
      'Sistemas VRF multi-zona con control independiente',
      'Mantenimiento preventivo semestral y anual',
      'Carga de gas refrigerante y limpieza profunda',
      'Cámaras frías para supermercados, restaurantes y farmacias',
    ],
    systems: [
      { name: 'Minisplit',   desc: 'Para habitaciones y áreas pequeñas.' },
      { name: 'Central',     desc: 'Para edificios y proyectos grandes.' },
      { name: 'VRF',         desc: 'Control por zona, máxima eficiencia.' },
    ],
    colorFrom: 'from-cyan-400',
    colorTo: 'to-teal-600',
    iconColor: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #F5A800 0, #F5A800 1px, transparent 0, transparent 40px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Lo que ofrecemos</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Nuestros Servicios</h1>
            <p className="text-lgray text-lg max-w-2xl mx-auto">
              Soluciones energéticas integrales con la calidad y garantía que tu proyecto merece.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services detail */}
      <div className="bg-white">
        {services.map((s, idx) => (
          <section
            key={s.id}
            id={s.id}
            className={`py-20 ${idx % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-14 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Text */}
                <AnimatedSection direction={idx % 2 === 0 ? 'right' : 'left'}>
                  <div className={`inline-flex w-14 h-14 rounded-xl ${s.bgColor} ${s.iconColor} items-center justify-center mb-5`}>
                    <s.icon className="w-7 h-7" />
                  </div>
                  <span className="text-gray-400 text-sm font-medium">{s.subtitle}</span>
                  <h2 className="text-3xl font-bold text-navy mt-1 mb-4">{s.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-7">{s.description}</p>

                  <ul className="space-y-2.5 mb-8">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link href="/cotizacion" className="btn-gold inline-flex items-center gap-2">
                    Solicitar Cotización <ArrowRight className="w-4 h-4" />
                  </Link>
                </AnimatedSection>

                {/* Systems cards */}
                <AnimatedSection direction={idx % 2 === 0 ? 'left' : 'right'} delay={0.15}>
                  <div className={`rounded-3xl bg-gradient-to-br ${s.colorFrom} ${s.colorTo} p-8 text-white`}>
                    <h3 className="text-xl font-bold mb-6 opacity-90">Tipos de sistemas</h3>
                    <div className="space-y-4">
                      {s.systems.map((sys) => (
                        <div key={sys.name} className="bg-white/15 backdrop-blur-sm rounded-xl p-4">
                          <div className="font-bold mb-0.5">{sys.name}</div>
                          <div className="text-white/80 text-sm">{sys.desc}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/20">
                      <p className="text-white/70 text-sm">
                        ¿No sabes cuál necesitas? Nuestros técnicos hacen una visita gratuita para recomendarte la mejor opción.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        ))}
      </div>

      <FinalCTA />
    </>
  )
}
