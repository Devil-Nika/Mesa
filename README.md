# Mesa de Juego

**Bienvenido a Mesa de Juego, un asistente de dirección de partidas de rol diseñado para ser potente, modular y offline-first.**

Este proyecto nace como una Progressive Web Application (PWA) para facilitar la gestión de campañas, personajes y encuentros, permitiendo a los Game Masters centrarse en la narrativa y no en la administración.

---

## ✨ Resumen y Objetivo del Proyecto

El objetivo es desarrollar una herramienta de ayuda para la dirección de partidas de rol que funcione mediante **perfiles de sistema independientes**. Cada perfil (D&D 5e, Pathfinder, etc.) carga únicamente las herramientas y reglas adaptadas a las mecánicas específicas de ese juego, ofreciendo una experiencia limpia y enfocada.

La aplicación está construida con una arquitectura local y offline-first, donde el Game Master actúa como anfitrión de la sesión en una red local, y los jugadores pueden conectarse y descargar temporalmente la información de sus personajes para un funcionamiento fluido durante el combate.

### Estrategia Legal y de Contenido

Para garantizar la viabilidad de una futura comercialización y una distribución libre, el proyecto se adhiere estrictamente al uso de contenido **SRD (System Reference Document)** bajo la licencia **OGL (Open Game License)**. Todo el contenido no-SRD podrá ser añadido por los usuarios mediante herramientas de importación y creación personalizadas.

---

## 🛠️ Arquitectura y Tecnologías

Este proyecto se construye sobre un stack de tecnologías web modernas, enfocado en el rendimiento y la experiencia de desarrollo.

*   **Framework Frontend:** **React** - Para construir una interfaz de usuario dinámica y reactiva.
*   **Lenguaje:** **TypeScript** - Para añadir seguridad de tipos y mejorar la escalabilidad del código.
*   **Herramienta de Construcción:** **Vite** - Proporciona un entorno de desarrollo ultrarrápido con HMR.
*   **Almacenamiento Local:** **IndexedDB** - Para un almacenamiento de datos robusto en el lado del cliente.
*   **Networking Local:** **WebSockets** - Para la comunicación en tiempo real entre el GM y los jugadores.
*   **Análisis de Código:** **ESLint** - Para mantener un código limpio, consistente y libre de errores.

---

## 🗺️ Hoja de Ruta Detallada

El desarrollo se organiza en fases, y cada fase se compone de **hitos de desarrollo con entregables probables**.

### ✅ Fase 1: Fundación y Perfil D&D 5e Completo

El objetivo de esta fase es construir la arquitectura fundamental de la aplicación y lanzar una versión completamente funcional del **Perfil D&D 5e**.

**Hito 1.1: Prototipo "El Grimorio" (Prueba de Concepto)**
*El objetivo es validar la arquitectura base. Al final de este hito, se podrá probar la interacción con una lista de conjuros de D&D 5e.*
- [x] **Entorno y Documentación:** Configuración de Git, React, Vite y `README.md`.
- [x] **Estructura de Carpetas:** Definir la organización de directorios (`components`, `types`, etc.).
- [ ] **Modelado de Datos Mínimo (TS):** Definir interfaces para `Spell` y un `Character` simple.
- [ ] **Datos de Prueba (Python):** Crear un script para generar un `spells.json` del SRD de D&D 5e.
- [ ] **Instalación de Librerías Clave:** Instalar y configurar Material-UI (MUI) y Dexie.js.
- [ ] **Layout Básico:** Crear un `Header` y `Sidebar` usando MUI.
- [ ] **Servicio de Base de Datos:** Implementar la carga inicial de `spells.json` en IndexedDB.
- [ ] **Funcionalidad de Prueba:**
    - [ ] Crear una página "Grimorio" que liste los conjuros.
    - [ ] Implementar un modal para ver el detalle de un conjuro.
    - [ ] Implementar la lógica para "preparar" un conjuro y verlo en una hoja de personaje de prueba.

**Hito 1.2: Núcleo de la Aplicación y Herramientas Genéricas**
*El objetivo es crear los sistemas transversales y componentes reutilizables.*
- [ ] **Arquitectura de Perfiles:** Implementar el sistema base para poder seleccionar un perfil de juego (aunque solo exista D&D 5e por ahora).
- [ ] **Gestión de Datos:** Implementar el sistema de **Importación/Exportación** y **Backup/Restauración**.
- [ ] **Componente Lanzador de Dados:** Crear una UI para tirar dados (d4, d6, d20...) que acepte modificadores.
- [ ] **Modelado de Datos Extendido (TS):** Definir interfaces para `Monster`, `Item` y `Feat`.

**Hito 1.3: Implementación Completa del Perfil D&D 5e**
*El objetivo es tener un perfil de D&D 5e completamente funcional. Al final de este hito, se podrá probar la creación de un personaje y la gestión de un combate simple.*
- [ ] **Creación de Personajes D&D 5e:** Implementar el flujo completo (raza, clase, trasfondo).
- [ ] **Hoja de Personaje D&D 5e:** UI completa para mostrar toda la información del personaje.
- [ ] **Gestor de Combate D&D 5e:**
    - [ ] Implementar el tracker de iniciativa.
    - [ ] Implementar el seguimiento de HP y condiciones.
- [ ] **Buscadores de Contenido D&D 5e:** UI para buscar y filtrar monstruos y objetos del SRD.

### 🔄 Fase 2: Implementación del Perfil Paizo

Esta fase se dedica por completo a integrar el segundo gran ecosistema de juegos, aprovechando la base construida en la Fase 1.

- [ ] **Preparación de Datos (Python):** Desarrollar script de web scraping para `Archives of Nethys` (Pathfinder 2e) y Starfinder.
- [ ] **Hoja de Personaje Paizo:**
    - [ ] UI adaptada al sistema de dotes (Ancestría, Trasfondo, Clase).
    - [ ] Lógica para la selección de sistema (PF2e, Starfinder, o mixto).
- [ ] **Herramientas de Juego Paizo:**
    - [ ] Adaptación del gestor de combate al sistema de 3 acciones.
    - [ ] Buscador de contenido con soporte para ambos sistemas (PF2e/SF).

### 🔄 Fase 3: Expansión con Nuevos Sistemas

- [ ] **Implementación del Perfil Daggerheart.**
- [ ] **Implementación del Perfil Vampiro.**
- [ ] Mejoras en las herramientas de Master (creadores de encuentros, editores de statblocks).
- [ ] Sistema de gestión de compañeros y mascotas.

### 🔄 Fase 4: Pulido y Futuro

- [ ] Soporte multi-idioma y opciones de accesibilidad.
- [ ] Optimización del rendimiento y la experiencia de usuario.
- [ ] Exploración de la comercialización.

---

*Desarrollado por Devil-Nika.*
