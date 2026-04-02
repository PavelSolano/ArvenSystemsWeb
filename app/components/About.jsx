'use client'

import { useRef, useState } from 'react'

const values = [
  { icon: '🚀', label: 'Innovación', text: 'Adoptamos las últimas tecnologías para mantenernos siempre a la vanguardia.' },
  { icon: '🤝', label: 'Compromiso', text: 'Acompañamos a nuestros clientes en cada etapa, desde la idea hasta la entrega.' },
  { icon: '🧠', label: 'Inteligencia', text: 'Aplicamos IA y datos para resolver problemas reales con soluciones precisas.' },
  { icon: '🔒', label: 'Confianza', text: 'Construimos con seguridad, calidad y transparencia en cada proyecto.' },
  { icon: '❤️', label: 'Amor', text: 'Ponemos pasión y cuidado genuino en cada proyecto y en cada persona con la que trabajamos.' },
  { icon: '🏆', label: 'Profesionalismo', text: 'Actuamos con ética, responsabilidad y excelencia en cada entrega.' },
  { icon: '🌀', label: 'Holístico', text: 'Entendemos cada reto desde una perspectiva integral, conectando tecnología, personas y procesos.' },
  { icon: '💪', label: 'Resiliencia', text: 'Nos adaptamos y superamos los obstáculos para encontrar siempre la mejor solución.' },
  { icon: '✅', label: 'Calidad', text: 'No entregamos nada que no cumpla con los más altos estándares de funcionalidad y diseño.' },
  { icon: '🎨', label: 'Creatividad', text: 'Innovamos con ideas frescas y soluciones originales que marcan la diferencia.' },
  { icon: '🌍', label: 'Comunidad', text: 'Creemos en el impacto colectivo y construimos tecnología que beneficia a todos.' },
]

const team = [
  { name: 'Pavel Solano García', role: 'Director de Operaciones / Sr. Management', photo: '/assets/EQUIPO/pavel.png' },
  { name: 'Carlos Sánchez', role: 'Director Automatización Inteligente / Sr. Data Sciences', photo: '/assets/EQUIPO/carlos-sanchez.jpeg' },
  { name: 'Alexis Piña Aquino', role: 'Sr. Developer Python / Director de Tecnología', photo: '/assets/EQUIPO/alexis.png' },
  { name: 'Fernando Martínez Rodríguez', role: 'Sr. Developer Frontend (Angular & React)', photo: '/assets/EQUIPO/fer.png' },
  { name: 'Carlos Manuel Díaz Ortiz', role: 'Sr. Fullstack', photo: '/assets/EQUIPO/carlos.png' },
  { name: 'Jorge Eslava', role: 'Sr. Fullstack', photo: '/assets/EQUIPO/jorge.png' },
  { name: 'Karla Aguirre', role: 'Sr. UX/UI', photo: '/assets/EQUIPO/karla.png' },
  { name: 'Héctor Daniel Moreno', role: 'QA Tester Sr.', photo: '/assets/EQUIPO/hector.png' },
  { name: 'Sofía', role: 'Sr. Manager IA', photo: '/assets/EQUIPO/sofia.png' },
]

function Carousel({ items, renderItem, cardClass }) {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  const getCardWidth = () => {
    const card = ref.current?.querySelector(`.${cardClass}`)
    return card ? card.offsetWidth + 24 : 0
  }

  const scroll = (dir) => {
    const next = active + dir
    if (next < 0 || next > items.length - 1) return
    ref.current?.scrollTo({ left: next * getCardWidth(), behavior: 'smooth' })
    setActive(next)
  }

  const handleScroll = () => {
    const w = getCardWidth()
    if (w) setActive(Math.round(ref.current.scrollLeft / w))
  }

  return (
    <div>
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
          {items.map((item, i) => renderItem(item, i))}
        </div>

        <button
          onClick={() => scroll(1)}
          disabled={active === items.length - 1}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-20"
          style={{ background: '#1e3a5f', border: '1px solid #00b4d8' }}
        >
          <svg fill="none" stroke="#00b4d8" strokeWidth="2.5" viewBox="0 0 24 24" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => { ref.current?.scrollTo({ left: i * getCardWidth(), behavior: 'smooth' }); setActive(i) }}
            className="w-2 h-2 rounded-full transition-all"
            style={{ background: i === active ? '#00b4d8' : '#1e3a5f', border: '1px solid #00b4d8' }}
          />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-arven-navy">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-arven-accent text-sm font-semibold tracking-widest uppercase mb-3">
            ¿Quiénes somos?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Algo más que una empresa de{' '}
            <span className="gradient-text">tecnología</span>
          </h2>
          <p className="text-arven-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Somos una empresa tecnológica especializada en consultoría para el desarrollo
            de software y la integración de soluciones de inteligencia artificial, orientada
            a la creación de ecosistemas digitales inteligentes, escalables y sostenibles.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="service-card">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-white font-bold text-xl mb-3">Nuestra Misión</h3>
            <p className="text-arven-muted leading-relaxed">
              Democratizar el acceso a la inteligencia artificial y al desarrollo de software
              de alto nivel para empresas de todos los tamaños, impulsando su crecimiento
              mediante soluciones tecnológicas inteligentes, accesibles y a la medida.
            </p>
          </div>
          <div className="service-card">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-white font-bold text-xl mb-3">Nuestra Visión</h3>
            <p className="text-arven-muted leading-relaxed">
              Ser referente en México y Latinoamérica en integración de IA generativa y
              diseño de sistemas inteligentes, siendo el aliado tecnológico estratégico
              de las empresas que lideran la Industria 5.0.
            </p>
          </div>
        </div>

        {/* Valores — Carrusel */}
        <div className="mb-20">
          <h3 className="text-white font-bold text-2xl text-center mb-10">Nuestros Valores</h3>
          <Carousel
            items={values}
            cardClass="value-card"
            renderItem={(v) => (
              <div
                key={v.label}
                className="value-card service-card flex-shrink-0 flex flex-col items-center text-center"
                style={{ width: '220px' }}
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h4 className="text-white font-bold text-lg mb-2">{v.label}</h4>
                <p className="text-arven-muted text-sm leading-relaxed">{v.text}</p>
              </div>
            )}
          />
        </div>

        {/* Equipo — Carrusel */}
        <div>
          <h3 className="text-white font-bold text-2xl text-center mb-10">Nuestro Equipo</h3>
          <Carousel
            items={team}
            cardClass="team-card"
            renderItem={(member) => (
              <div
                key={member.name}
                className="team-card service-card flex-shrink-0 flex flex-col items-center text-center"
                style={{ width: '220px' }}
              >
                <div
                  className="w-28 h-28 rounded-full mb-5 overflow-hidden flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #1e3a5f, #0a1628)', border: '2px solid #00b4d8' }}
                >
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl text-arven-muted">👤</span>
                  )}
                </div>
                <h4 className="text-white font-bold text-lg mb-1">{member.name}</h4>
                <p className="text-arven-accent text-sm font-semibold">{member.role}</p>
              </div>
            )}
          />
        </div>

      </div>
    </section>
  )
}
