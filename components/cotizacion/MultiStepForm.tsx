'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronRight, ChevronLeft, Send, Sun, Zap, Wind } from 'lucide-react'

/* ─── Types ─── */
type ServiceType = 'solar' | 'electrico' | 'ac' | ''
type PropertyType = 'residencial' | 'comercial' | 'industrial' | 'agricola' | ''

interface FormData {
  // Step 1
  service: ServiceType
  // Step 2
  consumption: string
  location: string
  property: PropertyType
  budget: string
  notes: string
  // Step 3
  name: string
  phone: string
  email: string
  contactMethod: 'whatsapp' | 'llamada' | 'email' | ''
}

const initial: FormData = {
  service: '',
  consumption: '',
  location: '',
  property: '',
  budget: '',
  notes: '',
  name: '',
  phone: '',
  email: '',
  contactMethod: '',
}

const services = [
  { id: 'solar',    icon: Sun,  label: 'Solar Fotovoltaico',    desc: 'On-Grid, Off-Grid o Híbrido' },
  { id: 'electrico',icon: Zap,  label: 'Instalación Eléctrica', desc: 'Residencial, comercial o industrial' },
  { id: 'ac',       icon: Wind, label: 'Aire Acondicionado',    desc: 'Split, central o VRF' },
]

const budgets = [
  'Menos de US$1,000',
  'US$1,000 – US$5,000',
  'US$5,000 – US$15,000',
  'US$15,000 – US$50,000',
  'Más de US$50,000',
  'Por definir / No sé',
]

const steps = ['Servicio', 'Sistema', 'Contacto', 'Resumen']

/* ─── Step indicators ─── */
function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                i < current
                  ? 'bg-gold text-navy'
                  : i === current
                  ? 'bg-navy text-white ring-4 ring-navy/20'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {i < current ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
            </div>
            <span className={`text-xs mt-1.5 font-medium hidden sm:block ${i === current ? 'text-navy' : 'text-gray-400'}`}>
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`h-0.5 w-12 sm:w-20 mx-2 transition-colors duration-300 ${i < current ? 'bg-gold' : 'bg-gray-200'}`} />
          )}
        </div>
      ))}
    </div>
  )
}

/* ─── Step 1: Service selection ─── */
function Step1({ data, onChange }: { data: FormData; onChange: (d: Partial<FormData>) => void }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-navy mb-2">¿Qué servicio necesitas?</h2>
      <p className="text-gray-400 text-sm mb-7">Selecciona el tipo de instalación que te interesa.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onChange({ service: s.id as ServiceType })}
            className={`flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all duration-200 ${
              data.service === s.id
                ? 'border-gold bg-gold/5 shadow-md'
                : 'border-gray-200 hover:border-gold/40 hover:bg-gray-50'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
              data.service === s.id ? 'bg-gold text-navy' : 'bg-gray-100 text-gray-500'
            }`}>
              <s.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-navy text-sm">{s.label}</div>
              <div className="text-gray-400 text-xs mt-0.5">{s.desc}</div>
            </div>
            {data.service === s.id && (
              <CheckCircle2 className="w-5 h-5 text-gold ml-auto" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ─── Step 2: System data ─── */
function Step2({ data, onChange }: { data: FormData; onChange: (d: Partial<FormData>) => void }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-navy mb-2">Cuéntanos sobre tu sistema</h2>
      <p className="text-gray-400 text-sm mb-7">Esta información nos ayuda a dimensionar la solución ideal.</p>

      <div className="space-y-5">
        {/* Consumption */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Consumo eléctrico mensual aproximado
          </label>
          <input
            type="text"
            placeholder="Ej: 600 kWh/mes o RD$8,000 en factura"
            value={data.consumption}
            onChange={(e) => onChange({ consumption: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Ubicación del proyecto
          </label>
          <input
            type="text"
            placeholder="Ej: Los Prados, Santiago"
            value={data.location}
            onChange={(e) => onChange({ location: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
          />
        </div>

        {/* Property type */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Tipo de inmueble
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(['Residencial', 'Comercial', 'Industrial', 'Agrícola'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => onChange({ property: t.toLowerCase() as PropertyType })}
                className={`py-2.5 px-3 rounded-lg text-xs font-semibold border-2 transition-all ${
                  data.property === t.toLowerCase()
                    ? 'border-gold bg-gold text-navy'
                    : 'border-gray-200 text-gray-500 hover:border-gold/40'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Presupuesto estimado
          </label>
          <select
            value={data.budget}
            onChange={(e) => onChange({ budget: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white"
          >
            <option value="">Selecciona un rango</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">
            Información adicional <span className="text-gray-400 font-normal">(opcional)</span>
          </label>
          <textarea
            rows={3}
            placeholder="Cuéntanos más sobre tu proyecto, preguntas específicas, etc."
            value={data.notes}
            onChange={(e) => onChange({ notes: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
          />
        </div>
      </div>
    </div>
  )
}

/* ─── Step 3: Contact ─── */
function Step3({ data, onChange }: { data: FormData; onChange: (d: Partial<FormData>) => void }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-navy mb-2">Datos de contacto</h2>
      <p className="text-gray-400 text-sm mb-7">Te contactaremos para coordinar la visita técnica gratuita.</p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Nombre completo *</label>
          <input
            type="text"
            placeholder="Tu nombre y apellido"
            value={data.name}
            onChange={(e) => onChange({ name: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">Teléfono / WhatsApp *</label>
            <input
              type="tel"
              placeholder="(809) 000-0000"
              value={data.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">Correo electrónico</label>
            <input
              type="email"
              placeholder="tu@correo.com"
              value={data.email}
              onChange={(e) => onChange({ email: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-2.5">¿Cómo prefieres que te contactemos?</label>
          <div className="flex gap-3 flex-wrap">
            {(['WhatsApp', 'Llamada', 'Email'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => onChange({ contactMethod: m.toLowerCase() as FormData['contactMethod'] })}
                className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                  data.contactMethod === m.toLowerCase()
                    ? 'border-gold bg-gold text-navy'
                    : 'border-gray-200 text-gray-500 hover:border-gold/40'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Step 4: Summary ─── */
function Step4({ data }: { data: FormData }) {
  const svc = services.find((s) => s.id === data.service)
  const rows = [
    { label: 'Servicio',      value: svc?.label },
    { label: 'Consumo',       value: data.consumption || '—' },
    { label: 'Ubicación',     value: data.location || '—' },
    { label: 'Inmueble',      value: data.property ? data.property.charAt(0).toUpperCase() + data.property.slice(1) : '—' },
    { label: 'Presupuesto',   value: data.budget || '—' },
    { label: 'Nombre',        value: data.name || '—' },
    { label: 'Teléfono',      value: data.phone || '—' },
    { label: 'Email',         value: data.email || '—' },
    { label: 'Contacto vía',  value: data.contactMethod ? data.contactMethod.charAt(0).toUpperCase() + data.contactMethod.slice(1) : '—' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-navy mb-2">Resumen de tu solicitud</h2>
      <p className="text-gray-400 text-sm mb-7">Verifica tu información antes de enviar.</p>

      <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
        {rows.map(({ label, value }, i) => (
          <div
            key={label}
            className={`flex justify-between items-center px-5 py-3.5 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <span className="text-gray-400 font-medium">{label}</span>
            <span className="text-navy font-semibold text-right max-w-[55%]">{value}</span>
          </div>
        ))}
        {data.notes && (
          <div className="px-5 py-4 bg-amber-50 border-t border-amber-100">
            <p className="text-xs text-gray-500 font-medium mb-1">Notas adicionales</p>
            <p className="text-sm text-gray-700">{data.notes}</p>
          </div>
        )}
      </div>

      <p className="text-gray-400 text-xs mt-5 text-center">
        Al enviar, nuestro equipo se pondrá en contacto contigo en un plazo máximo de 24 horas.
      </p>
    </div>
  )
}

/* ─── Success screen ─── */
function SuccessScreen({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-10"
    >
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-green-500" />
      </div>
      <h2 className="text-2xl font-bold text-navy mb-3">¡Solicitud enviada!</h2>
      <p className="text-gray-500 max-w-sm mx-auto mb-8">
        Gracias, <strong>{name || 'estimado cliente'}</strong>. Hemos recibido tu cotización y nos
        pondremos en contacto contigo antes de 24 horas.
      </p>
      <a
        href="https://wa.me/18097136272?text=Hola%2C+acabo+de+enviar+una+solicitud+de+cotizaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1ebe5c] transition-colors"
      >
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Confirmar por WhatsApp
      </a>
    </motion.div>
  )
}

/* ─── Main component ─── */
export default function MultiStepForm() {
  const [step, setStep]       = useState(0)
  const [data, setData]       = useState<FormData>(initial)
  const [submitted, setSubmitted] = useState(false)

  const update = (partial: Partial<FormData>) => setData((d) => ({ ...d, ...partial }))

  const canNext = () => {
    if (step === 0) return !!data.service
    if (step === 2) return !!data.name && !!data.phone
    return true
  }

  const handleSubmit = () => {
    // In production: POST to API route / email service
    setSubmitted(true)
  }

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit:  (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  }
  const [dir, setDir] = useState(1)

  const next = () => { setDir(1); setStep((s) => s + 1) }
  const prev = () => { setDir(-1); setStep((s) => s - 1) }

  if (submitted) return <SuccessScreen name={data.name} />

  return (
    <div>
      <StepIndicator current={step} />

      <div className="overflow-hidden">
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={step}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && <Step1 data={data} onChange={update} />}
            {step === 1 && <Step2 data={data} onChange={update} />}
            {step === 2 && <Step3 data={data} onChange={update} />}
            {step === 3 && <Step4 data={data} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100">
        <button
          type="button"
          onClick={prev}
          disabled={step === 0}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-navy disabled:opacity-0 disabled:pointer-events-none transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Anterior
        </button>

        {step < 3 ? (
          <button
            type="button"
            onClick={next}
            disabled={!canNext()}
            className="btn-gold inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Siguiente <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="btn-gold inline-flex items-center gap-2"
          >
            <Send className="w-4 h-4" /> Enviar Solicitud
          </button>
        )}
      </div>
    </div>
  )
}
