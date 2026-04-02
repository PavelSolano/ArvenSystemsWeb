const services = [
  {
    icon: '🧭',
    title: 'Consultoría General',
    description: 'Analizamos tu negocio y te guiamos hacia una transformación digital efectiva. Identificamos oportunidades, definimos estrategias y acompañamos cada etapa del proceso.',
    color: '#00b4d8',
  },
  {
    icon: '🤖',
    title: 'Integración de IA y Generativa',
    description: 'Incorporamos modelos de inteligencia artificial y IA generativa en tus procesos y productos. Desde chatbots y asistentes virtuales hasta automatización inteligente de flujos de trabajo.',
    color: '#00b4d8',
  },
  {
    icon: '⚙️',
    title: 'Diseño de Sistemas Inteligentes',
    description: 'Diseño de gestión de sistemas complejos mediante tecnología orientada a la Industria 5.0.',
    color: '#00b4d8',
  },
]

export default function ServiceCards() {
  return (
    <section className="relative py-20 bg-arven-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="service-card group cursor-pointer">
              <div className="text-4xl mb-5">{svc.icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">{svc.title}</h3>
              <p className="text-arven-muted text-sm leading-relaxed mb-5">{svc.description}</p>
              <a
                href="#contacto"
                className="text-arven-accent text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Demo →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
