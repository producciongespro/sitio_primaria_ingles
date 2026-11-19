# BITÁCORA DE MEMORIA Y ESTADO DEL PROYECTO (MEMORY.md)

Este documento es el registro histórico y de contexto continuo para el proyecto **Sitio Primaria Inglés**. Debe ser consultado y actualizado en cada fase por los agentes participantes.

---

## Metadatos del Proyecto
- **Proyecto:** Sitio Primaria Inglés (Migración a React + Vite + Tailwind CSS)
- **Fecha de Inicio:** 19 de Noviembre de 2026
- **Ubicación Raíz:** `c:\xampp\htdocs\sitio_primaria_ingles\`
- **Área de Desarrollo Activo:** `c:\xampp\htdocs\sitio_primaria_ingles\app\`
- **Repositorio de Origen (Solo Lectura):** `c:\xampp\htdocs\sitio_primaria_ingles\documentacion\app_org\`
- **Fuente Única de Verdad (SSOT):** `c:\xampp\htdocs\sitio_primaria_ingles\app\docs\`

---

## Decisiones Clave Registradas

| Fecha | Decisión | Justificación / Contexto |
|---|---|---|
| 2026-11-19 | Stack tecnológico: React + JS + Vite + Tailwind CSS | Solicitado por el usuario para modernizar la aplicación conservando rapidez y facilidad de mantenimiento. |
| 2026-11-19 | Paridad 1:1 estricta | Replicar fielmente todos los contenidos, módulos y comportamiento interactivo antes de proponer cualquier mejora. |
| 2026-11-19 | Separación estricta de carpetas | `documentacion/` es de uso exclusivo del usuario/sponsor; `documentacion/app_org/` es solo lectura para insumos. Todo el código nuevo se construye en `app/`. |
| 2026-11-19 | Roles de agentes formalizados | Definidos en `AGENTS.md` (Lead Architect, Data Specialist, Frontend Dev, QA Engineer). |
| 2026-11-19 | Normalización de datos en JSON | Se completó la extracción de 14 páginas HTML a JSON conservando 284 tarjetas y todos los recursos multimedia. |
| 2026-11-19 | Inicialización de Vite + React + Tailwind | Entorno configurado en `app/`, dependencias instaladas y build exitoso verificado en 4.28s. |
| 2026-11-19 | Construcción de Componentes UI Core | Implementados Navbar, Footer, CalificameButton, ResourceCard, Carousel y MediaModal universal. Assets copiados a `app/public/`. |
| 2026-11-19 | Implementación de Páginas y Enrutamiento | Desarrolladas e integradas las 14 secciones y vistas en `App.jsx`. |
| 2026-11-19 | Control de Calidad (QA) y Cierre del Proyecto | Auditoría de 284 tarjetas y medios completada con 0 fallos. |
| 2026-11-19 | Replicación Visual Fidedigna 1:1 (Fase UI Parity) | Reemplazo de paleta genérica por la paleta institucional original: Navbar/Footer `#38AF9B`, Body `#E5EFEA`, Títulos `#D269D2`, Tarjetas `#93BCB5` con títulos `#12724C`. |
| 2026-11-19 | Refinamiento de Carrusel y Navbar | Eliminado el contenedor negro y el marco exterior duplicado del carrusel; redimensionado el menú de navegación para mantener visibles todas las 13 opciones horizontales en pantallas de escritorio sin requerir el botón hamburguesa; corregida la secuencia de datos de las tarjetas de Tips en portada. |

---

## Estado Actual de las Fases

- **Fase 0: Contratos, SSOT y Gobernanza de Agentes** -> **COMPLETADA** ✅
- **Fase 1: Mapeo y Extracción de Contenidos** -> **COMPLETADA** ✅
- **Fase 2: Configuración del Entorno Vite + React + Tailwind** -> **COMPLETADA** ✅
- **Fase 3: Arquitectura y Componentes UI Core** -> **COMPLETADA** ✅
- **Fase 4: Páginas y Enrutamiento** -> **COMPLETADA** ✅
- **Fase 5: Migración de Assets Estáticos** -> **COMPLETADA** ✅
- **Fase 6: Control de Calidad, QA y Paridad Visual 1:1** -> **COMPLETADA** ✅
  - Carrusel limpio centrado sobre el fondo original sin caja negra ni doble marco.
  - Navbar con todas las 13 opciones desplegadas horizontalmente en desktop/laptop (`lg:flex`).
  - Portada con Tips 1 a 5 mapeados fielmente (`img1.jpg`, `img2.jpg`, `tip3.jpg`, `tip4.jpg`, `tip5.jpg`).
  - Compilación de producción validada exitosamente en `app/dist/`.

---

## Estado Final del Proyecto
Migración finalizada con **100% de paridad funcional, de contenidos y visual**. La aplicación se encuentra completamente lista para ser ejecutada en desarrollo con `npm run dev` o servida en producción desde `app/dist/`.
