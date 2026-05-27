import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ProjectsFilter from '@/components/proyectos/ProjectsFilter'
import FinalCTA from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Galería de proyectos completados por EILEN Electric Service: instalaciones solares, eléctricas y A/C en República Dominicana.',
}

export default function ProyectosPage() {
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
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Lo que hemos hecho</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Proyectos</h1>
            <p className="text-lgray text-lg max-w-2xl mx-auto">
              Más de 150 proyectos completados en toda la República Dominicana. Filtra por categoría para explorar nuestra obra.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsFilter />
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
