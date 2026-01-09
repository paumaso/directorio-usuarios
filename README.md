# directorio-usuarios

Aplicación de ejemplo: un directorio de usuarios construido con React + Vite + Tailwind CSS. Permite buscar usuarios, ver detalles en un modal y ofrece una interfaz responsiva estilo dashboard.

## Capturas

Agrega aquí capturas de pantalla o GIFs para mostrar la app en acción. Por ejemplo:

![Demo](./public/demo-screenshot.png)

## Características

- Búsqueda de usuarios por nombre.
- Vista en tarjetas responsivas (grid).
- Modal con detalles del usuario.
- Diseño con Tailwind CSS y React Icons.

## Tecnologías

- React
- Vite
- Tailwind CSS
- React Icons
- TypeScript

## Requisitos

- Node.js 16+ (recomendado)
- npm o yarn

## Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone <URL_DEL_REPOSITORIO>
cd nombre-del-proyecto
```

Instala dependencias:

```bash
npm install
# o
yarn
```

## Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

Abre la URL que Vite muestre (por defecto http://localhost:5173).

## Build para producción

```bash
npm run build
# o
yarn build
```

Los archivos de salida estarán en la carpeta `dist`.

## Estructura del proyecto

- `src/` - código fuente
	- `components/` - componentes React reutilizables (`UserCard`, `UserModal`, etc.)
	- `pages/` - vistas principales (`UsersPage`)
	- `hooks/` - hooks personalizados (`useUsers`)
	- `types/` - definiciones TypeScript

## Personalización rápida

- Cambia colores y espaciados editando las clases de Tailwind en los componentes.
- Añade capturas en `public/` y actualiza la ruta en este README.

## Contribuir

Pull requests welcome. Para cambios mayores, abre un issue primero para discutir lo que quieres cambiar.

## Licencia

Distribuido bajo la licencia MIT. (Añade un `LICENSE` si lo deseas.)

---

Si quieres, puedo añadir un `demo-screenshot.png` de ejemplo, mejorar la sección de despliegue (GitHub Pages / Vercel) o añadir badges al principio del README.
