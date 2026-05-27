import { Shield, Award, Clock, HeadphonesIcon, Leaf, DollarSign } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const reasons = [
  {
    icon: Award,
    title: 'Experiencia Certificada',
    desc: 'Más de 8 años instalando sistemas fotovoltaicos y eléctricos con técnicos certificados.',
  },
  {
    icon: Shield,
    title: 'Garantía Extendida',
    desc: 'Hasta 25 años de garantía en paneles y 10 años en instalaciones. Tu inversión protegida.',
  },
  {
    icon: Clock,
    title: 'Entrega a Tiempo',
    desc: 'Proyectos completados en los plazos acordados. Respetamos tu tiempo y tu planificación.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte 24/7',
    desc: 'Servicio post-instalación y atención de emergencias disponible todos los días del año.',
  },
  {
    icon: Leaf,
    title: 'Compromiso Ecológico',
    desc: 'Cada sistema instalado reduce la huella de carbono y contribuye a un futuro más limpio.',
  },
  {
    icon: DollarSign,
    title: 'Retorno de Inversión',
    desc: 'Ahorra hasta un 90% en tu factura eléctrica. Recupera tu inversión en 3–5 años.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: text */}
          <AnimatedSection direction="right">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Nuestra diferencia</span>
            <h2 className="section-title mt-2 mb-5">¿Por qué elegir EILEN?</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Somos una empresa dominicana que entiende las particularidades del sistema eléctrico nacional.
              Diseñamos cada proyecto a medida, con los mejores equipos del mercado y un equipo técnico
              comprometido con la excelencia.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '150+', l: 'Proyectos' },
                { n: '98%',  l: 'Satisfacción' },
                { n: '25',   l: 'Años garantía' },
                { n: '8+',   l: 'Años exp.' },
              ].map(({ n, l }) => (
                <div key={l} className="bg-white rounded-xl p-4 border border-gray-100 text-center shadow-sm">
                  <div className="text-2xl font-bold text-navy">{n}</div>
                  <div className="text-gray-500 text-xs mt-1">{l}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: grid of reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-5 border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                    <r.icon className="w-5 h-5 text-white group-hover:text-navy transition-colors" />
                  </div>
                  <h4 className="text-navy font-bold text-sm mb-1.5">{r.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
