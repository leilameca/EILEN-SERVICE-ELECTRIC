import AnimatedSection from '@/components/AnimatedSection'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    role: 'Propietario Residencial',
    location: 'Los Prados, Santiago',
    text: 'Instalaron un sistema de 8.5 kWp en mi casa. La factura bajó de RD$14,000 a menos de RD$1,500. El equipo fue profesional y limpio en todo el proceso. Totalmente recomendados.',
    stars: 5,
    initials: 'CR',
    color: 'bg-sky',
  },
  {
    name: 'María Fernández',
    role: 'Gerente de Supermercado',
    location: 'Santiago Centro',
    text: 'Contratamos a EILEN para la instalación de 45 kWp en nuestro local. Trabajo impecable, dentro del plazo y con seguimiento post-instalación excelente. El ahorro mensual supera los RD$80,000.',
    stars: 5,
    initials: 'MF',
    color: 'bg-gold',
  },
  {
    name: 'Juan Pablo Matos',
    role: 'Dueño de Restaurante',
    location: 'Santiago, RD',
    text: 'Instalaron el sistema de aire acondicionado central en mi restaurante en tiempo récord. El consumo bajó un 35% con los equipos inverter que recomendaron. Servicio impecable de principio a fin.',
    stars: 5,
    initials: 'JM',
    color: 'bg-emerald-500',
  },
  {
    name: 'Andrea Sánchez',
    role: 'Directora de Hotel',
    location: 'Santiago, RD',
    text: 'Excelente servicio desde la cotización hasta la instalación. Ahora el hotel genera su propia energía y los huéspedes notan la diferencia. EILEN cumple lo que promete.',
    stars: 5,
    initials: 'AS',
    color: 'bg-purple-500',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Lo que dicen</span>
          <h2 className="section-title mt-2">Nuestros Clientes</h2>
          <p className="section-subtitle mx-auto mt-3">
            La satisfacción de nuestros clientes es el mejor reflejo de nuestro trabajo.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <Stars count={t.stars} />
                <p className="text-gray-600 text-sm leading-relaxed mt-4 flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-navy font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role} · {t.location}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
