'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', telefono: '', correo: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: conectar con tu backend / Formspree / Resend
    console.log('Formulario enviado:', form)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ nombre: '', telefono: '', correo: '', mensaje: '' })
  }

  return (
    <section id="contacto" className="relative py-24 bg-arven-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-arven-accent opacity-5 rounded-full blur-3xl"/>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div
          className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{ background: 'linear-gradient(135deg, #112240, #0d1f35)', border: '1px solid #1e3a5f' }}
        >
          {/* Left – illustration */}
          <div className="hidden lg:flex items-center justify-center p-12 bg-gradient-to-br from-arven-accent2/20 to-transparent">
            <svg viewBox="0 0 300 300" className="w-64" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Person pointing at screen */}
              <circle cx="210" cy="80" r="30" fill="#1e3a5f" stroke="#00b4d8" strokeWidth="2"/>
              <rect x="185" y="114" width="52" height="70" rx="10" fill="#1e3a5f" stroke="#00b4d8" strokeWidth="1.5"/>
              {/* Arm pointing left */}
              <path d="M185 135 Q140 125 110 140" stroke="#00b4d8" strokeWidth="8" strokeLinecap="round" fill="none"/>
              <circle cx="107" cy="141" r="7" fill="#00b4d8"/>
              {/* Legs */}
              <rect x="192" y="182" width="18" height="50" rx="7" fill="#1e3a5f" stroke="#00b4d8" strokeWidth="1.5"/>
              <rect x="215" y="182" width="18" height="50" rx="7" fill="#1e3a5f" stroke="#00b4d8" strokeWidth="1.5"/>

              {/* Floating envelope */}
              <rect x="30" y="100" width="100" height="70" rx="8" fill="#112240" stroke="#00b4d8" strokeWidth="1.5"/>
              <polyline points="30,100 80,140 130,100" stroke="#00b4d8" strokeWidth="1.5" fill="none"/>

              {/* Small dots */}
              <circle cx="50" cy="60" r="5" fill="#00b4d8" opacity="0.4"/>
              <circle cx="250" cy="200" r="4" fill="#00b4d8" opacity="0.3"/>
              <circle cx="160" cy="260" r="6" fill="#00b4d8" opacity="0.25"/>
            </svg>
          </div>

          {/* Right – form */}
          <div className="p-10 lg:p-12">
            <p className="text-arven-accent text-sm font-semibold tracking-widest uppercase mb-2">
              Contáctanos
            </p>
            <h2 className="text-3xl font-extrabold text-white mb-2">Hablemos de tu proyecto</h2>
            <p className="text-arven-muted text-sm mb-8">
              Y hablemos de transformación digital.
            </p>

            {sent && (
              <div className="mb-6 p-4 rounded-lg bg-arven-accent/20 border border-arven-accent text-arven-accent text-sm font-medium">
                ✅ ¡Mensaje enviado! Nos pondremos en contacto pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  className="arven-input"
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
                <input
                  className="arven-input"
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={form.telefono}
                  onChange={handleChange}
                />
                <input
                  className="arven-input"
                  type="email"
                  name="correo"
                  placeholder="Correo"
                  value={form.correo}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                className="arven-input resize-none"
                name="mensaje"
                placeholder="Mensaje"
                rows={5}
                value={form.mensaje}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn-primary w-full text-center text-base">
                Enviar ➤
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
