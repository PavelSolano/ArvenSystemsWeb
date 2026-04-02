'use client'

import { useRef, useState } from 'react'

const services = [
  {
    icon: '🏗️',
    title: 'Diseño de Arquitectura de Software',
    description: 'Diseñamos la estructura técnica de tus sistemas para que sean robustos, escalables y fáciles de mantener desde el inicio.',
  },
  {
    icon: '🔗',
    title: 'Integraciones de Servicios Externos',
    description: 'Conectamos tu negocio con plataformas externas: Correo, WhatsApp, CRM, ERP, APIs y más, para que todo funcione en un solo ecosistema.',
  },
  {
    icon: '⚙️',
    title: 'Automatización de Procesos mediante Software',
    description: 'Eliminamos tareas manuales y repetitivas automatizando flujos de trabajo para que tu equipo se enfoque en lo que realmente importa.',
  },
  {
    icon: '☁️',
    title: 'Diseño de Infraestructura en la Nube',
    description: 'Implementamos y gestionamos tu infraestructura en AWS, Google Cloud y Azure, garantizando disponibilidad, seguridad y rendimiento.',
  },
  {
    icon: '🖥️',
    title: 'Actualizaciones de SO',
    description: 'Mantenemos tus sistemas operativos actualizados, seguros y optimizados para garantizar la estabilidad de tu entorno tecnológico.',
  },
  {
    icon: '🔐',
    title: 'Implementaciones de Seguridad',
    description: 'Protegemos tu infraestructura con soluciones de SSO, OAuth 2.0 y Keycloak, asegurando el acceso correcto a cada recurso.',
  },
  {
    icon: '🗄️',
    title: 'Arquitectura de Bases de Datos',
    description: 'Diseñamos, optimizamos y migramos tus bases de datos para que tus aplicaciones tengan el rendimiento y la confiabilidad que necesitan.',
  },
  {
    icon: '🤖',
    title: 'Automatización mediante Inteligencia Artificial',
    description: 'Integramos modelos de IA en tus procesos para automatizar decisiones, analizar datos y generar valor de forma inteligente y continua.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  const getCardWidth = () => {
    const card = ref.current?.querySelector('.svc-card')
    return card ? card.offsetWidth + 24 : 0
  }

  const scroll = (dir) => {
    const next = active + dir
    if (next < 0 || next > services.length - 1) return
    ref.current?.scrollTo({ left: next * getCardWidth(), behavior: 'smooth' })
    setActive(next)
  }

  const handleScroll = () => {
    const w = getCardWidth()
    if (w) setActive(Math.round(ref.current.scrollLeft / w))
  }

  return (
    <section
      id="servicios"
      className="hex-bg relative py-24 overflow-hidden"
      style={{ background: '#0d1f35' }}
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-arven-accent text-sm font-semibold tracking-widest uppercase mb-3">
            ¿Qué esperas?
          </p>
          <h2 className="text-4xl font-extrabold text-white">
            Te invitamos a conocer nuestros servicios
          </h2>
        </div>

        {/* Carrusel */}
        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            disabled={active === 0}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-20"
            style={{ background: '#1e3a5f', border: '1px solid #00b4d8' }}
          >
            <svg fill="none" stroke="#00b4d8" strokeWidth="2.5" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={ref}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((svc) => (
              <div
                key={svc.title}
                className="svc-card service-card flex-shrink-0 text-center group"
                style={{ width: '260px' }}
              >
                <div className="text-5xl mb-5 transition-transform group-hover:scale-110">{svc.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{svc.title}</h3>
                <p className="text-arven-muted text-sm leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            disabled={active === services.length - 1}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-20"
            style={{ background: '#1e3a5f', border: '1px solid #00b4d8' }}
          >
            <svg fill="none" stroke="#00b4d8" strokeWidth="2.5" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => { ref.current?.scrollTo({ left: i * getCardWidth(), behavior: 'smooth' }); setActive(i) }}
              className="w-2 h-2 rounded-full transition-all"
              style={{ background: i === active ? '#00b4d8' : '#1e3a5f', border: '1px solid #00b4d8' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
