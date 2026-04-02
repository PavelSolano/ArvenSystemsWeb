import './globals.css'

export const metadata = {
  title: 'Arven Systems | Desarrollo de Software en México',
  description:
    'Arven Systems — Aplicaciones, infraestructura en la nube y transformación digital para tu negocio.',
  keywords: 'desarrollo de software, aplicaciones móviles, ecommerce, ERP, nube, México',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
