# PLAN DE MIGRACIÓN: SITIO PRIMARIA INGLÉS

**Objetivo:** Migrar la aplicación educativa estática original (Bootstrap 4 + jQuery) a una SPA moderna con **React + JavaScript + Vite + Tailwind CSS**, garantizando paridad funcional y visual 1:1.

---

## Fases del Proyecto

### Fase 0: Contratos, SSOT y Gobernanza de Agentes (Completada)
- [x] Corrección y normalización del nombre a `AGENTS.md`.
- [x] Redacción del contrato operativo y definición de roles en `app/AGENTS.md`.
- [x] Establecimiento de `app/docs/` como Fuente Única de Verdad (SSOT).
- [x] Inicialización del registro de memoria en `app/docs/MEMORY.md`.
- [x] Delimitación estricta de carpetas (`documentacion/app_org` solo lectura; `app/` espacio activo).

---

### Fase 1: Mapeo y Extracción de Contenidos (Data Mapping) (Completada)
- [x] Inspeccionar cada archivo HTML en `documentacion/app_org/`:
  - `index.html` (Portada y carrusel de inicio)
  - `primero.html`, `segundo.html`, `tercero.html`, `cuarto.html`, `quinto.html`, `sexto.html`
  - `warmups.html`, `minibooks.html`, `ABCmouse.html`, `digital_modules.html`, `otros.html`
  - `contacto.html`, `creditos.html`
- [x] Extraer metadata de cada tarjeta educativa:
  - Título / Nivel / Unidad / Subtítulo / Descripción
  - Imagen miniatura y atributos alternativos
  - Tipo de medio (`mp3`, `youtube`, `pdf`, `ppt`, enlace directo)
  - Ruta de recursos originales y archivos descargables Word/PPT
- [x] Generar los esquemas JSON normalizados en `app/docs/data/` y `app/src/data/`:
  - `siteData.json` (Dataset unificado de todo el sitio)
  - 14 archivos JSON individuales por página
  - `inventory_report.json` (Reporte de auditoría y estadísticas de contenidos)

---

### Fase 2: Configuración del Entorno de Desarrollo (Completada)
- [x] Configuración de manifiesto del proyecto (`package.json`) con React 18, Vite, Tailwind CSS y Lucide Icons.
- [x] Configuración de Vite (`vite.config.js`).
- [x] Configuración de Tailwind CSS y PostCSS (`tailwind.config.js`, `postcss.config.js`).
- [x] Creación del shell de aplicación HTML5 (`index.html`) y punto de entrada React (`src/main.jsx`, `src/App.jsx`, `src/index.css`).
- [x] Estructuración del árbol de componentes en `app/src/`.
- [x] Instalación de dependencias de node_modules y verificación de compilación exitosa (`npm run build` -> `dist/`).

---

### Fase 3: Arquitectura y Componentes UI Core (Completada)
- [x] Implementación de sistema de Layout:
  - `Navbar` responsive con menú para móviles, indicador de página activa y enlaces a todos los 14 niveles y secciones.
  - `Footer` con créditos institucionales del Ministerio de Educación Pública (GESPRO).
  - `CalificameButton`: Botón flotante interactivo de calificación MEP.
- [x] Implementación de `ResourceCard`: Tarjeta moderna con diseño visual mejorado, miniaturas, badges temáticos por tipo de medio y estados hover.
- [x] Implementación de `MediaModal` unificado (reemplazo y modernización de `cargar_medio.js`):
  - Soporte de audio con reproductor HTML5 estilizado.
  - Soporte de videos YouTube responsive con normalización de enlaces.
  - Soporte de visor PDF con enlace alternativo de descarga directa ("Trouble downloading? Try here.").
  - Soporte de presentaciones PowerPoint (.pptx).
  - Cierre por teclado (Escape) y fondo interactivo.
- [x] Implementación de `Carousel` animado para la página principal.
- [x] Migración preliminar de assets a `app/public/` para visualización inmediata de miniaturas y audios.

---

### Fase 4: Páginas y Enrutamiento (Completada)
- [x] Página de Inicio (`HomePage.jsx`): Carrusel de novedades y tarjetas de Tips ABCmouse.
- [x] Vistas modulares de Grados Escolares (`GradePage.jsx`):
  - Grados 1°, 2° y 3°: Guía pedagógica, descarga de Word y cuadrícula de audios organizada por unidades con filtro interactivo y buscador.
  - Grado 4°: Visualizador de unidades 1 a 6 con soporte PDF y descarga Word.
  - Grado 5°: Guías de unidades 1 a 6 y anexos de la semana 3.
  - Grado 6°: Guías pedagógicas y presentaciones/juegos interactivos de PowerPoint (.pptx).
- [x] Vistas de Secciones Especiales:
  - `WarmupsPage.jsx`: Canciones dinámicas y videos de mindfulness Zen Den.
  - `MinibooksPage.jsx`: Colección de 18 mini-libros y celebraciones familiares con enlaces a MEP Educático.
  - `DigitalModulesPage.jsx`: Módulos de aprendizaje digital MEP.
  - `AbcMousePage.jsx`: Guía "Understanding the App", certificados en inglés y español y alineación curricular.
  - `OthersPage.jsx`: Documento TEFL y videos formativos docentes.
- [x] Vistas de Información Institucional:
  - `ContactPage.jsx`: Directorio de asesores de inglés e informática educativa (GESPRO).
  - `CreditsPage.jsx`: Módulo de créditos institucionales oficiales.
- [x] Enrutamiento SPA responsivo en `App.jsx` sincronizado con `window.location.hash` y scroll suave.

---

### Fase 5: Migración de Assets Estáticos (Completada)
- [x] Imágenes institucionales y portadas copiadas a `app/public/img/`.
- [x] Colección completa de audios MP3 copiada a `app/public/audio/`.
- [x] Archivos descargables (PDF, Word, PPT) copiados a `app/public/data/`.
- [x] Insumos y materiales didácticos copiados a `app/public/Tips/`.

---

### Fase 6: Control de Calidad (QA), Verificación 1:1 y Cierre (Completada)
- [x] Auditoría automatizada de los 284 recursos y enlaces locales contra `app/public/` (0 archivos faltantes).
- [x] Corrección preventiva de referencia de archivo en ABCmouse (Word docx vinculado correctamente).
- [x] Verificación del funcionamiento de modales para Audio HTML5, YouTube embebido, visor PDF y descargas.
- [x] Verificación de responsividad móvil y de escritorio con Tailwind CSS.
- [x] Generación del reporte formal de calidad en `app/docs/QA_REPORT.md`.
- [x] Compilación final de producción verificada (`app/dist/` optimizado y listo para servir).
