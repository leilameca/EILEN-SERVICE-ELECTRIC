import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const projects = [
  {
    id: 1,
    name: 'Residencia Los Prados',
    category: 'Solar',
    kwp: '8.5 kWp',
    location: 'Santiago, RD',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    id: 2,
    name: 'Supermercado El Buen Precio',
    category: 'Solar + Eléctrico',
    kwp: '45 kWp',
    location: 'Santiago, RD',
    gradient: 'from-sky-400 to-blue-600',
  },
  {
    id: 4,
    name: 'Hotel Boutique Vista Cielo',
    category: 'Solar + A/C',
    kwp: '30 kWp',
    location: 'Santiago, RD',
    gradient: 'from-purple-400 to-indigo-600',
  },
  {
    id: 5,
    name: 'Clínica Médica San Felipe',
    category: 'Eléctrico',
    kwp: '—',
    location: 'Santiago, RD',
    gradient: 'from-pink-400 to-rose-600',
  },
  {
    id: 6,
    name: 'Centro Comercial Premia',
    category: 'Solar',
    kwp: '80 kWp',
    location: 'Santiago, RD',
    gradient: 'from-gold to-amber-600',
  },
]

export default function ProjectsGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Nuestro trabajo</span>
          <h2 className="section-title mt-2">Proyectos Destacados</h2>
          <p className="section-subtitle mx-auto mt-3">
            Una muestra de las instalaciones que hemos completado con éxito en todo el país.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <AnimatedSection key={p.id} delay={i * 0.08}>
              <div className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/30 card-hover shadow-sm">
                {/* Image placeholder with gradient */}
                <div className={`h-48 bg-gradient-to-br ${p.gradient} relative flex items-end p-5`}>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-navy font-bold mb-1">{p.name}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
                    <span>{p.location}</span>
                    {p.kwp !== '—' && (
                      <span className="text-gold font-semibold">{p.kwp}</span>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link href="/proyectos" className="btn-outline inline-flex items-center gap-2">
            Ver todos los proyectos <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
