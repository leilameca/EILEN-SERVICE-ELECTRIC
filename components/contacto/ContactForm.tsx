'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

interface Fields {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

const initial: Fields = { name: '', phone: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(initial)
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k: keyof Fields, v: string) => setFields((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate send delay — replace with real API call
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h4 className="text-navy font-bold text-lg mb-2">¡Mensaje enviado!</h4>
        <p className="text-gray-400 text-sm">Te contactaremos a la brevedad posible. ¡Gracias!</p>
        <button
          onClick={() => { setFields(initial); setSent(false) }}
          className="mt-6 text-sky text-sm font-semibold hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Nombre *</label>
          <input
            required
            type="text"
            placeholder="Tu nombre completo"
            value={fields.name}
            onChange={(e) => update('name', e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Teléfono *</label>
          <input
            required
            type="tel"
            placeholder="(809) 000-0000"
            value={fields.phone}
            onChange={(e) => update('phone', e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">Email</label>
        <input
          type="email"
          placeholder="tu@correo.com"
          value={fields.email}
          onChange={(e) => update('email', e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">Asunto</label>
        <select
          value={fields.subject}
          onChange={(e) => update('subject', e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white"
        >
          <option value="">Selecciona un tema</option>
          <option>Energía Solar</option>
          <option>Instalación Eléctrica</option>
          <option>Aire Acondicionado</option>
          <option>Servicio Técnico / Mantenimiento</option>
          <option>Otro</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">Mensaje *</label>
        <textarea
          required
          rows={5}
          placeholder="Describe tu consulta o proyecto..."
          value={fields.message}
          onChange={(e) => update('message', e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full flex items-center justify-center gap-2 py-4 disabled:opacity-70"
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            Enviar Mensaje
          </>
        )}
      </button>
    </form>
  )
}
