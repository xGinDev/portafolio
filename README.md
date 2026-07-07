# Portfolio - John Correa (Gin)

Portfolio personal de John Correa (Gin) - Frontend Developer. Sitio web moderno y optimizado construido con Next.js 15, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Características

- **Next.js 15** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Next-intl** para internacionalización (Español/Inglés)
- **Next-themes** para modo dark/light
- **Optimización de rendimiento**:
  - Dynamic imports para code splitting
  - SWC minification
  - Optimización de imágenes con next/image
  - Configuración de modern browsers
- **Accesibilidad**:
  - ARIA labels en elementos interactivos
  - Contraste WCAG AA compliant
  - Alt attributes en imágenes
- **SEO** con next-seo

## 📋 Requisitos

- Node.js >= 24.0.0
- npm, yarn o pnpm

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/xGinDev/portafolio.git
cd portafolio
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

Edita `.env` con tus variables necesarias (RESEND_API_KEY, etc.)

## 🏃 Scripts

```bash
# Desarrollo
npm run dev
# o
yarn dev

# Build de producción
npm run build
# o
yarn build

# Iniciar producción
npm run start
# o
yarn start

# Linting
npm run lint
# o
yarn lint
```

## 📁 Estructura del Proyecto

```
portafolio/
├── app/                    # App Router de Next.js
│   ├── [locale]/          # Rutas con i18n
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Página principal
│   ├── globals.css        # Estilos globales
│   └── api/               # API routes
├── components/            # Componentes React
│   ├── About/            # Sección About
│   ├── Skills/           # Sección Skills
│   ├── Projects/         # Sección Projects
│   ├── Hero/             # Sección Hero
│   ├── Header/           # Header con navegación
│   ├── Footer/           # Footer
│   └── Global/           # Componentes globales
├── hooks/                # Custom hooks
│   └── useActiveSection.ts
├── lib/                  # Utilidades
├── messages/             # Traducciones i18n
│   ├── es.json          # Español
│   └── en.json          # Inglés
├── public/              # Archivos estáticos
├── utils/               # Datos y utilidades
├── next.config.js       # Configuración de Next.js
├── tailwind.config.js   # Configuración de Tailwind
└── package.json         # Dependencias
```

## 🌐 Despliegue

### Vercel

El proyecto está configurado para despliegue en Vercel:

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard de Vercel
3. Deploy automático en cada push a master

### Variables de Entorno

- `RESEND_API_KEY`: API key para envío de emails (opcional)

## 🎨 Personalización

### Colores

Los colores del tema se configuran en `app/globals.css`:

```css
:root {
  --background: 48 24% 96%;
  --foreground: 60 5% 8%;
  --accent: 206 85% 35%;
  /* ... */
}
```

### Traducciones

Las traducciones se encuentran en `messages/`:
- `es.json` - Español
- `en.json` - Inglés

### Datos

Los datos de proyectos y skills se configuran en `utils/data.ts`

## 🔧 Configuración

### Next.js

Configuración en `next.config.js`:
- SWC minification habilitado
- Optimización de imports (lucide-react, react-icons)
- Console removal en producción

### Tailwind CSS

Configuración en `tailwind.config.js`:
- Modo dark habilitado
- Integración con NextUI
- Content paths configurados

## 📊 Optimizaciones de Rendimiento

- **Bundle splitting**: Dynamic imports para componentes pesados
- **Tree shaking**: Configuración de Tailwind para eliminar CSS no usado
- **Image optimization**: Uso de next/image con lazy loading
- **Font optimization**: Font display swap para Google Fonts
- **Modern browsers**: .browserslistrc para reducir polyfills

## ♿ Accesibilidad

- ARIA labels en todos los elementos interactivos
- Contraste WCAG AA compliant
- Navegación por teclado
- Alt attributes descriptivos
- Focus visible

## 📄 Licencia

MIT

## 👤 Autor

John Correa (Gin) - [GitHub](https://github.com/xGinDev) - [LinkedIn](https://www.linkedin.com/in/jecl29/)
