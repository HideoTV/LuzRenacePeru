# LUZ RENACE - ONG Perú

Proyecto web institucional 100% estático, profesional y optimizado para ser desplegado en **GitHub Pages** con un dominio personalizado (`luzrenaceperu.org`).

Construido con:
- React 18 / Vite
- TailwindCSS v4
- React Router DOM
- Framer Motion
- Lucide React
- React Helmet Async (SEO)

## Características

✅ **Diseño Institucional Premium**: Paleta oficial de colores, fuentes Google (Merriweather, Public Sans) que transmiten confianza, liderazgo y transparencia.
✅ **SEO Optimizado**: Meta tags, Open Graph y semántica HTML5 configurados mediante `react-helmet-async`.
✅ **Responsive Design**: Accesible, adaptativo y rápido.
✅ **Estructura Modular**: Componentes reutilizables (`SEO`, `Button`, `Navbar`, `Footer`, `Layout`).
✅ **Dominio Personalizado**: Archivo `CNAME` incluido en `public/` para vinculación con `luzrenaceperu.org`.

## Instrucciones de Instalación Local

1. Clona este repositorio o copia los archivos.
2. Instala las dependencias:
   ```bash
   npm install
   ```
   *(Nota: Si hay problemas de resolución por versiones de React, usa `npm install --legacy-peer-deps`)*
3. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Instrucciones de Despliegue en GitHub Pages

Este proyecto ya incluye el archivo `CNAME` apuntando a `luzrenaceperu.org`.

Para desplegarlo de manera gratuita y rápida usando GitHub Actions:

1. Modifica la propiedad `basename` en el `BrowserRouter` si fuera necesario (actualmente utiliza `HashRouter` para evitar problemas de 404 estáticos en GitHub Pages).
2. Sube todo el código a tu repositorio de GitHub:
   ```bash
   git add .
   git commit -m "Initial commit Luz Renace"
   git push origin main
   ```
3. Activa GitHub Pages en tu repositorio:
   - Ve a **Settings > Pages**.
   - En **Source**, selecciona **GitHub Actions** (Recomendado).
   - Configura un workflow estándar de Node.js o usa la integración automática que Github recomienda para React/Vite.

### Alternativa: Deploy manual `gh-pages`

Si prefieres usar la rama `gh-pages`:

1. Instala el paquete de GitHub pages:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Agrega estos scripts en tu `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Ejecuta el comando mágico:
   ```bash
   npm run deploy
   ```
Esto compilará la versión para producción en la carpeta `dist` y la subirá automáticamente a tu rama `gh-pages`, publicando exitosamente el proyecto web.
