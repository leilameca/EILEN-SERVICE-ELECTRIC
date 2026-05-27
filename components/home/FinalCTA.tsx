import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-navy">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #F5A800 0, #F5A800 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Empieza hoy</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
            Deja de pagar demás por la electricidad.
            <br />
            <span className="text-gold">Genera tu propia energía.</span>
          </h2>
          <p className="text-lgray text-lg mb-10 max-w-2xl mx-auto">
            Solicita tu cotización gratuita hoy mismo. Un técnico certificado te
            visitará y diseñará el sistema perfecto para tu consumo y presupuesto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cotizacion" className="btn-gold inline-flex items-center justify-center gap-2 text-base px-8 py-4">
              Cotización Gratis <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+18097136272"
              className="btn-outline inline-flex items-center justify-center gap-2 text-base px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              (809) 713-6272
            </a>
          </div>

          <p className="text-white/30 text-sm mt-8">
            Sin compromiso · Respuesta en menos de 24h · Atención personalizada
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
