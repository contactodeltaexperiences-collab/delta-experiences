# Delta Experiences

Sitio web de Delta Experiences — paseos privados en lancha por el Delta de Tigre. Construido con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), reemplazando la versión anterior en WordPress + Elementor.

## Estructura del proyecto

```text
/
├── public/images/       # fotos y assets estáticos
├── src/
│   ├── components/      # una sección de la landing por archivo
│   ├── data/site.ts     # datos de contacto, links, claves — todo centralizado acá
│   ├── layouts/Layout.astro
│   └── pages/index.astro
```

## Comandos

| Comando           | Acción                                      |
| :----------------- | :------------------------------------------- |
| `npm install`       | Instala dependencias                         |
| `npm run dev`        | Servidor local en `localhost:4321`           |
| `npm run build`       | Genera el sitio de producción en `./dist/`  |
| `npm run preview`      | Sirve el build de producción localmente    |
| `npx astro check`      | Chequeo de tipos                          |

## Pendientes antes de publicar

1. **Formulario de contacto**: usa [Web3Forms](https://web3forms.com) (gratis, sin backend). Conseguí tu access key gratis en https://web3forms.com y pegala en `src/data/site.ts` → `web3formsAccessKey`.
2. **Video clickeable de la galería**: el video de fondo del hero ya está conectado a Bunny Stream. Falta el segundo video (el clickeable) — pegá su URL de Bunny en `src/data/site.ts` → `galleryVideoSrc`.
3. **Dominio y hosting**: cuando esté listo, se puede deployar gratis en Vercel, Netlify o Cloudflare Pages (cualquiera sirve bien para Astro) y apuntar el dominio `deltaexperiencesarg.com`.
