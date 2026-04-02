'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top bar — oculto en mobile */}
      <div className="hidden md:flex w-full bg-arven-navy text-sm text-arven-muted px-6 py-2 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="https://wa.me/525529405706" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-arven-accent transition-colors">
            <svg className="w-4 h-4 text-arven-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.99 0C5.376 0 0 5.376 0 11.99c0 2.112.551 4.094 1.518 5.82L0 24l6.335-1.518A11.947 11.947 0 0 0 11.99 24C18.604 24 24 18.624 24 11.99 24 5.376 18.604 0 11.99 0zm0 21.818a9.82 9.82 0 0 1-5.007-1.37l-.36-.214-3.73.978.994-3.643-.235-.374a9.818 9.818 0 0 1-1.508-5.205c0-5.428 4.418-9.818 9.846-9.818 5.428 0 9.818 4.39 9.818 9.818 0 5.428-4.39 9.828-9.818 9.828z"/>
            </svg>
            WhatsApp
          </a>
          <a href="mailto:contacto@arvensystems.mx" className="flex items-center gap-2 hover:text-arven-accent transition-colors">
            <svg className="w-4 h-4 text-arven-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            contacto@arvensystems.mx
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-arven-muted">Síguenos</span>
          {/* Facebook */}
          <a href="#" className="hover:text-arven-accent transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          {/* Twitter/X */}
          <a href="#" className="hover:text-arven-accent transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="hover:text-arven-accent transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5"/>
            </svg>
          </a>
          <span className="text-arven-muted border-l border-arven-card pl-4">🇲🇽 Español</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar-blur sticky top-0 z-50 border-b border-arven-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-arven-accent to-arven-accent2 flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <span className="text-white font-bold text-xl tracking-wide group-hover:text-arven-accent transition-colors">
              Arven <span className="text-arven-accent">Systems</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {['Inicio', 'Nosotros', 'Servicios'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-arven-muted hover:text-white transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#contacto" className="btn-primary text-sm">
              Hablemos
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-arven-muted hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-arven-navy border-t border-arven-card px-6 pb-6 flex flex-col gap-4">
            {['Inicio', 'Nosotros', 'Servicios'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-arven-muted hover:text-white transition-colors font-medium py-2"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#contacto" className="btn-primary text-sm text-center" onClick={() => setOpen(false)}>
              Hablemos
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
