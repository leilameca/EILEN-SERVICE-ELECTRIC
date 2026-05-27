import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/contacto/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contáctanos para cualquier consulta sobre energía solar, instalaciones eléctricas o aires acondicionados. Santiago, República Dominicana.',
}

const info = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'La Canela, Santiago de los Caballeros, República Dominicana',
    href: 'https://maps.google.com/?q=Santiago+de+los+Caballeros+Dominican+Republic',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '(809) 713-6272',
    href: 'tel:+18097136272',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'wilmerenergi@gmail.com',
    href: 'mailto:wilmerenergi@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@eilenelectricservice',
    href: 'https://instagram.com/eilenelectricservice',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun–Vie: 8:00am – 6:00pm · Sáb: 8:00am – 2:00pm',
    href: null,
  },
]

export default function ContactoPage() {
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
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Estamos para ayudarte</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Contáctanos</h1>
            <p className="text-lgray text-lg max-w-2xl mx-auto">
              Escríbenos, llámanos o visítanos. Respondemos todas las consultas en tiempo récord.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Left: info + map */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="right">
                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                  <h3 className="text-navy font-bold text-lg mb-6">Información de contacto</h3>
                  <ul className="space-y-5">
                    {info.map(({ icon: Icon, label, value, href }) => (
                      <li key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs font-medium mb-0.5">{label}</div>
                          {href ? (
                            <a
                              href={href}
                              target={href.startsWith('http') ? '_blank' : undefined}
                              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-navy text-sm font-semibold hover:text-gold transition-colors"
                            >
                              {value}
                            </a>
                          ) : (
                            <span className="text-navy text-sm font-semibold">{value}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* WhatsApp CTA */}
              <AnimatedSection direction="right" delay={0.1}>
                <a
                  href="https://wa.me/18097136272?text=Hola%2C+me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n+sobre+sus+servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-5 hover:bg-[#1ebe5c] transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Chatear por WhatsApp</div>
                    <div className="text-white/80 text-sm">Respuesta inmediata</div>
                  </div>
                </a>
              </AnimatedSection>

              {/* Map */}
              <AnimatedSection direction="right" delay={0.15}>
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120770.75694989634!2d-70.76013299999999!3d19.456875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1d7b4e6aa7feb%3A0x3e5958de12c81c9a!2sSantiago%20de%20los%20Caballeros%2C%20Dominican%20Republic!5e0!3m2!1sen!2sus!4v1717000000000!5m2!1sen!2sus"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación EILEN Electric Service - Santiago RD"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Right: contact form */}
            <AnimatedSection direction="left" delay={0.1} className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <h3 className="text-navy font-bold text-xl mb-6">Envíanos un mensaje</h3>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
