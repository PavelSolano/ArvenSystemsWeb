# Arven Systems — Sitio Web

Sitio web corporativo de **Arven Systems**, construido con **Next.js 14**, **Tailwind CSS** y listo para desplegar en **Vercel**.

## 🚀 Inicio rápido

```bash
# 1. Instala dependencias
npm install

# 2. Levanta el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del proyecto

```
arven-systems/
├── app/
│   ├── components/
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   ├── Hero.jsx         # Sección principal
│   │   ├── ServiceCards.jsx # Tarjetas de servicios
│   │   ├── About.jsx        # Sección "Quiénes somos"
│   │   ├── Services.jsx     # Sección de servicios detallados
│   │   ├── ContactForm.jsx  # Formulario de contacto
│   │   └── Footer.jsx       # Pie de página
│   ├── globals.css          # Estilos globales + variables de color
│   ├── layout.js            # Layout raíz (metadatos SEO)
│   └── page.js              # Página principal
├── public/                  # Imágenes y assets estáticos
├── tailwind.config.js       # Configuración de Tailwind
├── next.config.js           # Configuración de Next.js
└── package.json
```

## 🎨 Paleta de colores

| Variable          | Color     | Uso                        |
|-------------------|-----------|----------------------------|
| `arven-dark`      | `#0a1628` | Fondo principal            |
| `arven-navy`      | `#0d1f35` | Fondo secundario / navbar  |
| `arven-card`      | `#112240` | Tarjetas y modales         |
| `arven-accent`    | `#00b4d8` | Color de acento (cyan)     |
| `arven-accent2`   | `#0077a8` | Gradiente de acento        |
| `arven-muted`     | `#94a3b8` | Texto secundario           |

Puedes cambiar la paleta en `tailwind.config.js` y `app/globals.css`.

## 📧 Conectar el formulario de contacto

En `app/components/ContactForm.jsx`, busca el comentario:
```js
// TODO: conectar con tu backend / Formspree / Resend
```
Opciones recomendadas:
- **[Formspree](https://formspree.io)** — gratuito, sin backend
- **[Resend](https://resend.com)** — API de emails moderna
- **API Route de Next.js** — `app/api/contact/route.js`

## 🌐 Despliegue en Vercel

### Opción 1 — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Opción 2 — GitHub + Vercel Dashboard
1. Sube el proyecto a un repositorio de GitHub
2. Ve a [vercel.com](https://vercel.com) → **New Project**
3. Importa tu repo
4. Vercel detecta Next.js automáticamente → **Deploy**

### Conectar tu dominio `.mx`
En el dashboard de Vercel:
1. **Settings → Domains → Add Domain**
2. Escribe tu dominio (ej. `arvensystems.mx`)
3. Sigue las instrucciones para actualizar los DNS en tu registrador

## 🛠 Scripts disponibles

| Comando         | Descripción                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Servidor de desarrollo (localhost)   |
| `npm run build` | Genera el build de producción        |
| `npm run start` | Inicia el servidor de producción     |
| `npm run lint`  | Corre ESLint                         |
