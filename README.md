# Guía de Desarrollo Fullstack

## Tecnologías y Herramientas
- **Lenguaje de Programación:** JavaScript
- **Backend:** Node.js con Express.js
- **Frontend:** React
- **ORM para SQL:** Sequelize para interactuar con Cloud SQL

## Desarrollo y Directrices Específicas
- **Arquitectura de la Solución:**
  - Crear y documentar la arquitectura de la solución, asegurando la implementación efectiva de la misma.
  - Trabajar lado a lado con el equipo de Ciberseguridad para determinar el nivel de seguridad adecuado. ( Nota: De que lado? ~~del que tengo aqui colg~~ cordinarse con ciberseguridad para que puedan revisar el código y evitar vulnerabilidades) 
  
- **Desarrollo Frontend y Backend:**
  - Desarrollar el frontend de la aplicación utilizando React, enfocándose en un diseño mobile-first y SPA (single page application).
  - Crear y mantener una API RESTful con Express.js, que será alojada en Cloud Run, para el manejo del backend.
  - Asegurar que la aplicación no requiera recarga de página y que solo cargue y renderice los contenidos necesarios con cada cambio de endpoint.

- **Selección de Base de Datos:**
  - Elegir entre base de datos SQL o NoSQL según el modelo de datos requerido y la compatibilidad con los resultados del trabajo de Data.
  - Integrar Sequelize para la manipulación de la base de datos SQL en Cloud SQL, si se elige SQL como base de datos.

- **Uso de Recursos de Terceros:**
  - Utilizar recursos de terceros (librerías, paquetes npm, etc.) para optimizar el tiempo de desarrollo y entrega.

- **Gestión de Control de Versiones:**
  - Manejar el control de versiones del proyecto utilizando GitHub desde el inicio del proyecto.

- **Documentación y Pruebas:**
  - Gestionar la documentación y pruebas del proyecto hasta donde el tiempo lo permita.
  - Documentar adecuadamente todas las fases y componentes del desarrollo.

- **Colaboración y Presentación:**
  - Trabajar en colaboración con otros equipos, especialmente con UX, para una implementación y presentación efectiva del proyecto.

## Documentación
- Mantener la documentación actualizada a lo largo de todo el proceso de desarrollo, cubriendo aspectos técnicos y decisiones tomadas.
- Preparar material para la presentación del proyecto, destacando características clave y decisiones de diseño.
