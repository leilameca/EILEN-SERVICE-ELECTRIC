import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import MultiStepForm from '@/components/cotizacion/MultiStepForm'

export const metadata: Metadata = {
  title: 'Solicitar Cotización',
  description:
    'Solicita tu cotización gratuita para instalación de paneles solares, servicios eléctricos y aire acondicionado en República Dominicana.',
}

const benefits = [
  'Visita técnica gratuita y sin compromiso',
  'Diseño personalizado según tu consumo',
  'Financiamiento disponible con entidades bancarias',
  'Respuesta en menos de 24 horas',
]

export default function CotizacionPage() {
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
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Sin costo ni compromiso</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Solicitar Cotización</h1>
            <p className="text-lgray text-lg max-w-2xl mx-auto">
              Completa el formulario y un técnico certificado te contactará para diseñar la solución perfecta.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Sidebar */}
            <AnimatedSection direction="right" className="lg:col-span-1">
              <div className="bg-navy text-white rounded-2xl p-8 sticky top-28">
                <h3 className="text-xl font-bold mb-6">¿Por qué cotizar con nosotros?</h3>
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-lgray text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-7 border-t border-white/10">
                  <p className="text-lgray text-xs mb-4">¿Prefieres hablar directamente?</p>
                  <a
                    href="tel:+18097136272"
                    className="flex items-center gap-3 text-white font-bold hover:text-gold transition-colors"
                  >
                    <span className="text-2xl">📞</span>
                    (809) 713-6272
                  </a>
                  <a
                    href="https://wa.me/18097136272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-3 text-white font-bold hover:text-gold transition-colors"
                  >
                    <span className="text-2xl">💬</span>
                    WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="left" delay={0.1} className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                <MultiStepForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
