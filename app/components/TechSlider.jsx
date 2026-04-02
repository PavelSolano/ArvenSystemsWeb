const tools = [
  { name: 'Python',       color: '#3776AB', img: '/assets/herramientas/Python-logo-notext.svg.png' },
  { name: 'Django',       color: '#44B78B', img: null },
  { name: 'AWS',          color: '#FF9900', img: '/assets/herramientas/Amazon_Web_Services_Logo.svg.png' },
  { name: 'Next.js',      color: '#ffffff', img: '/assets/herramientas/nextjs-2.svg' },
  { name: 'Docker',       color: '#2496ED', img: '/assets/herramientas/Docker-Logo-2013.png' },
  { name: 'React',        color: '#61DAFB', img: '/assets/herramientas/React-icon.svg.png' },
  { name: 'Angular',      color: '#DD0031', img: '/assets/herramientas/Angular_gradient_logo.png' },
  { name: 'Node.js',      color: '#539E43', img: '/assets/herramientas/nodejs-icon.svg' },
  { name: 'PostgreSQL',   color: '#336791', img: '/assets/herramientas/Postgresql_elephant.svg.png' },
  { name: 'MongoDB',      color: '#47A248', img: '/assets/herramientas/MongoDB_Logo.svg.png' },
  { name: 'Google Cloud', color: '#4285F4', img: '/assets/herramientas/Google__G__logo.svg.png' },
  { name: 'Azure',        color: '#0078D4', img: '/assets/herramientas/Microsoft_Azure.svg.png' },
  { name: 'Keycloak',     color: '#4D9EBF', img: '/assets/herramientas/Keycloak_logo.png' },
  { name: 'OpenAI',       color: '#10A37F', img: '/assets/herramientas/openai_logo_icon_248315.png' },
  { name: 'LangChain',    color: '#00b4d8', img: '/assets/herramientas/langchain-dp1uxj2zn3752pntqnpfu2.webp' },
  { name: 'Kubernetes',   color: '#326CE5', img: '/assets/herramientas/Kubernetes_logo_without_workmark.svg.png' },
]

export default function TechSlider() {
  const doubled = [...tools, ...tools]

  return (
    <section className="py-16" style={{ background: '#0a1628', borderTop: '1px solid #1e3a5f', borderBottom: '1px solid #1e3a5f' }}>
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-arven-accent text-sm font-semibold tracking-widest uppercase mb-2">
          Tecnología
        </p>
        <h2 className="text-3xl font-extrabold text-white">
          Herramientas que usamos
        </h2>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-4 px-5 py-3 rounded-full flex-shrink-0"
              style={{
                background: tool.color + '15',
                border: `1px solid ${tool.color}40`,
              }}
            >
              {tool.img ? (
                <img src={tool.img} alt={tool.name} className="w-5 h-5 object-contain flex-shrink-0" />
              ) : (
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: tool.color }} />
              )}
              <span className="text-sm font-semibold whitespace-nowrap" style={{ color: tool.color }}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
