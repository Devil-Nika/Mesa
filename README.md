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

## 🎯 Prototipo Inicial: El Grimorio (Primer Hito de la Fase 1)

Antes de implementar la totalidad de las funcionalidades, el primer gran objetivo es desarrollar un **prototipo funcional** enfocado en el Perfil D&D 5e. Este "slice vertical" servirá para validar la arquitectura y las tecnologías clave.

**El objetivo del prototipo es:** *Un usuario debe poder ver una lista de conjuros del SRD de D&D 5e, filtrarlos, hacer clic en uno para ver sus detalles y añadirlo a una lista de "conjuros preparados" de un personaje de prueba.*

Las tareas específicas para lograr este prototipo son las primeras de la Fase 1 en la hoja de ruta detallada a continuación.

---

## 🗺️ Hoja de Ruta Detallada

Esta es la visión general y el checklist de desarrollo para "Mesa de Juego".

### ✅ Fase 1: Fundación y Sistemas Core

El objetivo de esta fase es construir la estructura fundamental de la aplicación y lanzar los dos primeros perfiles de sistema con sus herramientas esenciales.

**1. Arquitectura y Preparación de Datos**
- [x] **Entorno de Desarrollo:** Configuración de React, Vite, TypeScript y Git.
- [x] **Sincronización de Entorno:** Flujo de trabajo con Git para múltiples computadoras.
- [x] **Documentación Inicial:** Creación de un `README.md` detallado.
- [ ] **Estructura de Carpetas del Proyecto:** Definir y crear la organización de directorios (`components`, `types`, `hooks`, `services`, `data`).
- [ ] **Modelado de Datos (TypeScript):**
    - [ ] Definir las interfaces base (`Character`, `Spell`, `Item`, `Feat`).
    - [ ] Adaptar interfaces para las especificidades de D&D 5e y Paizo.
- [ ] **Preparación de Datos (Python):**
    - [ ] Desarrollar script de web scraping para `Archives of Nethys` (Pathfinder 2e).
    - [ ] Desarrollar script de web scraping para `5e.tools` o similar (D&D 5e).
    - [ ] Procesar y generar los archivos `JSON` base del SRD.

**2. Desarrollo del Núcleo de la Aplicación**
- [ ] **Arquitectura de Perfiles:** Crear el sistema que permita cambiar entre perfiles de juego (D&D, Paizo).
- [ ] **Gestión de Base de Datos:** Implementar un servicio (`wrapper`) para interactuar con IndexedDB (ej. usando Dexie.js).
- [ ] **Componentes de UI Fundamentales:**
    - [ ] Instalar y configurar una librería de componentes UI (ej. Material-UI).
    - [ ] Crear componentes reutilizables base (`Header`, `Sidebar`, `Card`, `Modal`).
- [ ] **Sistema de Importación/Exportación y Backup:**
    - [ ] Lógica para importar datos desde archivos JSON.
    - [ ] Lógica para exportar datos a JSON y PDF.
    - [ ] Implementar funciones de backup y restauración.

**3. Implementación del Perfil D&D 5e**
- [ ] **Hoja de Personaje (D&D 5e):**
    - [ ] UI para mostrar estadísticas, habilidades, vida, etc.
    - [ ] Lógica para la creación de personajes paso a paso.
- [ ] **Herramientas de Juego (D&D 5e):**
    - [ ] **Lanzador de Dados:** Componente para realizar tiradas con modificadores.
    - [ ] **Gestor de Combate:** Sistema de iniciativa, seguimiento de HP y condiciones.
    - [ ] **Buscador de Contenido:** UI para buscar y filtrar conjuros, monstruos y objetos del SRD.

**4. Implementación del Perfil Paizo (Pathfinder 2e & Starfinder)**
- [ ] **Hoja de Personaje (Paizo):** UI adaptada al sistema de dotes.
- [ ] **Herramientas de Juego (Paizo):** Gestor de combate de 3 acciones y buscador de contenido mixto.

### 🔄 Fase 2: Expansión y Nuevos Sistemas

- [ ] **Implementación del Perfil Daggerheart.**
- [ ] Mejoras en las herramientas de Master (creadores de encuentros, editores de statblocks).
- [ ] Sistema de gestión de compañeros y mascotas.

### 🔄 Fase 3: Pulido y Futuro

- [ ] **Implementación del Perfil Vampiro.**
- [ ] Soporte multi-idioma y opciones de accesibilidad.
- [ ] Exploración de la comercialización.

---

*Desarrollado por Devil-Nika.*
