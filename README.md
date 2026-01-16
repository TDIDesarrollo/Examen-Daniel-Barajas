# Posts App

Una aplicación de gestión de posts construida con React, TypeScript y Vite, siguiendo una arquitectura por capas (presentación, dominio, datos).

## Requisitos Previos

- Node.js (versión 16 o superior)
- npm, pnpm, bun o yarn

## Instalación

1. Clona el repositorio:
```bash
git clone <git@github.com:TDIDesarrollo/Examen-Daniel-Barajas.git>
cd examen-daniel-barajas
```

2. Instala las dependencias:
```bash
npm install
```

## Ejecutar el Proyecto

### Modo Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Construir para Producción
```bash
npm run build
```

### Vista Previa de Producción
```bash
npm run preview
```

## Características

- 📝 Lista de posts con información del autor
- 🔍 Búsqueda de posts por título o contenido
- 👤 Filtrado por usuario/autor
- 💾 Guardar posts favoritos en localStorage
- 📂 Ver posts guardados
- 🏗️ Arquitectura por capas (Presentation, Domain, Data)

## Estructura del Proyecto

```
src/
├── presentation/     # Componentes, hooks, UI
├── domain/          # Lógica de negocio, use cases, entidades
└── data/            # Repositorios, API calls
```

## Tecnologías

- React
- TypeScript
- Vite
- TailwindCSS
- JSONPlaceholder API