# CONTRATO DE AGENTES Y REGLAS OPERATIVAS (AGENTS.md)

Este documento define los roles, contratos, restricciones y estándares operativos para todos los agentes y desarrolladores que interactúen en el proyecto **Sitio Primaria Inglés**.

---

## 1. Reglas Inviolables y Restricciones de Entorno

1. **Intocabilidad de `documentacion/`:**
   - La carpeta `documentacion/` es de uso exclusivo del usuario y patrocinadores.
   - **PROHIBIDO:** Modificar, renombrar o eliminar cualquier archivo o directorio dentro de `documentacion/`.
   - **SOLO LECTURA:** La subcarpeta `documentacion/app_org/` es la fuente de verdad de la aplicación original (HTMLs, audios, imágenes, datos, estilos). Solo se deben leer e importar insumos desde allí.

2. **Espacio de Trabajo Activo (`app/`):**
   - Todo el desarrollo, configuración de herramientas, código fuente y dependencias residen exclusivamente dentro de `app/`.

3. **Única Fuente de Verdad (SSOT):**
   - La carpeta `app/docs/` centraliza toda la documentación técnica, funcional y de arquitectura.
   - El archivo `app/docs/MEMORY.md` registrará la memoria de decisiones, estado del proyecto y bitácora de cada fase.

4. **Principio de Paridad 1:1:**
   - El objetivo primario es replicar al 100% la funcionalidad, enlaces y contenidos existentes sin inventar características nuevas ni alterar la estructura didáctica original.

---

## 2. Stack Tecnológico Aprobado

- **Librería UI:** React (Componentes funcionales, Hooks)
- **Lenguaje:** JavaScript (ES6+ / JSX)
- **Empaquetador y Dev Server:** Vite
- **Estilos y Diseño:** Tailwind CSS (reemplazando Bootstrap 4 con utility classes limpias y diseño responsivo idéntico o superior)
- **Gestor de Paquetes:** npm

---

## 3. Equipo de Trabajo y Roles

### 🧑‍💼 Lead Architect & Project Coordinator
- **Responsabilidad:** Supervisar la arquitectura general, validar que se cumplan las reglas de este contrato, orquestar los pasos de migración y mantener sincronizada la documentación en `app/docs/`.
- **Criterio de éxito:** Flujo de desarrollo ordenado, documentación al día y sin desviaciones del objetivo.

### 📊 Data & Asset Specialist
- **Responsabilidad:** Analizar e inventariar `documentacion/app_org/`, extrayendo de los HTMLs originales las listas de recursos multimedia (audios MP3, videos de YouTube, PDFs, PPTs, títulos y descripciones) y organizarlos en estructuras de datos JSON limpias dentro de `app/src/data/`.
- **Criterio de éxito:** Cero pérdidas de enlaces o recursos; esquemas de datos bien estructurados.

### 💻 Frontend Developer (React + Vite + Tailwind)
- **Responsabilidad:** Implementar la configuración de Vite, Tailwind CSS, componentes atómicos y compuestos (Navbar, Footer, ResourceCard, MediaModal) y componer las páginas de cada grado y sección.
- **Criterio de éxito:** Interfaz moderna, código limpio, componentes desacoplados y estilos idénticos o mejorados visualmente sin perder esencia.

### 🧪 QA & Parity Engineer
- **Responsabilidad:** Contrastar cada pantalla y componente contra `documentacion/app_org/`. Probar reproducción de audio, modales interactivos, incrustación de YouTube, enlaces de descarga de PDFs y responsividad móvil/escritorio.
- **Criterio de éxito:** 100% de paridad funcional y reporte de pruebas sin incidencias.

---

## 4. Estructura Estándar del Proyecto (`app/`)

```text
app/
├── docs/                      # Documentación del proyecto (SSOT)
│   ├── MEMORY.md              # Bitácora continua de memoria y contexto
│   └── PLAN.md                # Roadmap y plan de migración por fases
├── public/                    # Assets estáticos directos (audios, favicon, etc.)
├── src/
│   ├── assets/                # Imágenes y recursos estáticos importables
│   ├── components/            # Componentes reutilizables
│   │   ├── layout/            # Navbar, Footer, Contenedores
│   │   ├── media/             # MediaModal, AudioPlayer, VideoEmbed, PdfEmbed
│   │   └── ui/                # Botones, Cards, Badges
│   ├── data/                  # Archivos JSON con la metadata de cada grado
│   ├── pages/                 # Vistas de cada nivel y sección
│   ├── App.jsx                # Router / Enrutador principal
│   ├── index.css              # Directivas de Tailwind CSS
│   └── main.jsx               # Entry point de React
├── index.html                 # Shell HTML de Vite
├── package.json               # Dependencias del proyecto
├── tailwind.config.js         # Configuración de Tailwind CSS
├── vite.config.js             # Configuración de Vite
└── AGENTS.md                  # Este contrato operativo
```

---

## 5. Protocolo de Ejecución de Fases

1. **Lectura previa:** Antes de iniciar cualquier tarea, revisar `app/docs/MEMORY.md` y `app/AGENTS.md`.
2. **Sin cambios no autorizados:** Ningún agente creará dependencias pesadas innecesarias sin justificación arquitectónica.
3. **Registro:** Al finalizar cada fase, se debe actualizar `app/docs/MEMORY.md` con los avances y el estado de transición hacia la siguiente fase.
