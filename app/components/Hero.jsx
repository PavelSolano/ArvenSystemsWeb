export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f35 50%, #0a1628 100%)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(#00b4d820 1px, transparent 1px), linear-gradient(90deg, #00b4d820 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-arven-accent opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-arven-accent2 opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            Desarrollo de Software e Integración de{' '}
            <span className="gradient-text">Inteligencia Artificial</span>
            {' '}y Generativa
          </h1>
          <p className="text-arven-muted text-lg mb-10 max-w-md">
            Adaptarse a la nueva era de la IA puede ser complicado.{' '}
            <span className="text-white">Permítenos guiarte.</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#servicios" className="btn-primary">
              Permítenos Guiarte →
            </a>
            <a href="#nosotros" className="btn-outline">
              Conoce más
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden lg:flex justify-center items-center">
          <img
            src="/assets/main-image.png"
            alt="Desarrollo de Software e Inteligencia Artificial"
            className="w-full max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
