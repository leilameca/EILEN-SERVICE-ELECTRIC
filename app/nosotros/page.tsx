import type { Metadata } from 'next'
import { Target, Eye, Heart, Lightbulb, Leaf, Shield, Users } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import FinalCTA from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conoce la historia, misión, visión y equipo de EILEN Electric Service, empresa líder en energía solar en Santiago, República Dominicana.',
}

const team = [
  {
    name: 'Wilmer Collado',
    role: 'CEO & Fundador',
    desc: 'Ingeniero eléctrico con más de 8 años de experiencia en sistemas fotovoltaicos e instalaciones eléctricas. Certificado por fabricantes líderes como SMA, Growatt y LG Energy.',
    initials: 'WC',
    color: 'bg-navy',
  },
  {
    name: 'Roberto Méndez',
    role: 'Jefe de Proyectos Solares',
    desc: 'Especialista en diseño e instalación de sistemas fotovoltaicos On-Grid y Off-Grid. Más de 6 años ejecutando proyectos residenciales y comerciales.',
    initials: 'RM',
    color: 'bg-panel',
  },
  {
    name: 'Laura Castillo',
    role: 'Técnica Eléctrica Senior',
    desc: 'Certificada en instalaciones eléctricas NEC. Responsable de proyectos de electrificación comercial e industrial en todo el Cibao.',
    initials: 'LC',
    color: 'bg-sky',
  },
  {
    name: 'Pedro Jiménez',
    role: 'Técnico de A/C & Refrigeración',
    desc: 'Especialista en climatización con certificación ASHRAE. Experiencia en sistemas VRF, centrales y minisplit de todas las marcas del mercado.',
    initials: 'PJ',
    color: 'bg-slate',
  },
]

const values = [
  { icon: Target,    title: 'Excelencia',        desc: 'Entregamos proyectos de la más alta calidad, sin atajos ni compromisos.' },
  { icon: Heart,     title: 'Compromiso',         desc: 'Nos comprometemos con los plazos, los precios y los resultados acordados.' },
  { icon: Lightbulb, title: 'Innovación',         desc: 'Adoptamos las últimas tecnologías para ofrecer soluciones más eficientes.' },
  { icon: Leaf,      title: 'Sostenibilidad',     desc: 'Contribuimos activamente a un futuro más verde para República Dominicana.' },
  { icon: Shield,    title: 'Integridad',         desc: 'Actuamos con honestidad y transparencia en cada etapa del proyecto.' },
  { icon: Users,     title: 'Trabajo en equipo',  desc: 'Nuestro equipo coordinado garantiza resultados consistentes y profesionales.' },
]

const certifications = [
  'SMA Certified Installer',
  'Growatt Authorized Partner',
  'LG Energy Solution Partner',
  'Canadian Solar Dealer',
  'Daikin Premium Partner',
  'NFPA 70 (NEC) Certified',
]

export default function NosotrosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #F5A800 0, #F5A800 1px, transparent 0, transparent 40px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Quiénes somos</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Nosotros</h1>
            <p className="text-lgray text-lg max-w-2xl mx-auto">
              Una empresa dominicana comprometida con la transición energética y la calidad de vida de nuestros clientes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="right">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Nuestra historia</span>
              <h2 className="text-3xl font-bold text-navy mt-2 mb-5">De Santiago para el mundo</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  EILEN Electric Service nació en 2016 con una visión clara: llevar soluciones energéticas eficientes y
                  confiables a los hogares y empresas de Santiago de los Caballeros y toda la República Dominicana.
                </p>
                <p>
                  Fundada por Wilmer Collado, un técnico eléctrico apasionado por las energías renovables, la empresa
                  comenzó ofreciendo servicios eléctricos residenciales y poco a poco fue incorporando tecnología solar
                  al ver el enorme potencial que el país tiene gracias a su privilegiada ubicación geográfica.
                </p>
                <p>
                  Hoy, EILEN es una empresa reconocida en el sector energético nacional, con más de 150 proyectos
                  completados, un equipo de técnicos certificados y alianzas con los principales fabricantes de equipos
                  fotovoltaicos del mundo.
                </p>
              </div>
            </AnimatedSection>

            {/* Timeline */}
            <AnimatedSection direction="left" delay={0.15}>
              <div className="space-y-6">
                {[
                  { year: '2016', event: 'Fundación de EILEN Electric Service en Santiago, RD.' },
                  { year: '2018', event: 'Primeros 20 sistemas solares instalados. Alianza con Growatt.' },
                  { year: '2020', event: 'Expansión al sector comercial. Proyectos superiores a 30 kWp.' },
                  { year: '2022', event: 'Certificación SMA y LG Energy Solution. 100 proyectos completados.' },
                  { year: '2024', event: 'Más de 150 proyectos y 200 clientes satisfechos en todo el país.' },
                ].map(({ year, event }) => (
                  <div key={year} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-xs flex-shrink-0">
                        {year}
                      </div>
                      <div className="w-0.5 bg-gold/20 flex-1 mt-2" />
                    </div>
                    <p className="text-gray-600 text-sm pt-2 pb-4">{event}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Nuestros pilares</span>
            <h2 className="section-title mt-2">Misión, Visión & Valores</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Target,
                title: 'Misión',
                color: 'bg-navy',
                text: 'Proveer soluciones energéticas sostenibles y de alta calidad que reduzcan los costos operativos de nuestros clientes, contribuyendo al desarrollo económico y ambiental de la República Dominicana.',
              },
              {
                icon: Eye,
                title: 'Visión',
                color: 'bg-panel',
                text: 'Ser la empresa de energía solar y servicios eléctricos más confiable y reconocida del Cibao, expandiendo nuestra huella a nivel nacional y siendo referente en la transición energética del país.',
              },
              {
                icon: Heart,
                title: 'Compromiso',
                color: 'bg-sky',
                text: 'Cada proyecto es una promesa que cumplimos. Nos comprometemos con la excelencia técnica, la transparencia en los precios y la satisfacción total de cada cliente que deposita su confianza en EILEN.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-5`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-navy font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Values grid */}
          <AnimatedSection className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy">Nuestros Valores</h3>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.07}>
                <div className="bg-white rounded-xl p-5 border border-gray-100 text-center hover:border-gold/40 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <v.icon className="w-5 h-5 text-navy" />
                  </div>
                  <h4 className="text-navy font-bold text-sm mb-1">{v.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Las personas detrás</span>
            <h2 className="section-title mt-2">Nuestro Equipo</h2>
            <p className="section-subtitle mx-auto mt-3">
              Técnicos certificados y apasionados por las energías renovables.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center card-hover shadow-sm">
                  <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`}>
                    {member.initials}
                  </div>
                  <h3 className="text-navy font-bold mb-0.5">{member.name}</h3>
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider">{member.role}</span>
                  <p className="text-gray-400 text-xs leading-relaxed mt-3">{member.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <Award className="w-10 h-10 text-gold mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white">Certificaciones & Partners</h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((c) => (
              <AnimatedSection key={c}>
                <div className="bg-white/10 border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/20 transition-colors">
                  {c}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
