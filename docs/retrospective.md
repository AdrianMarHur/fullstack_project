# Retrospectiva

## Qué he aprendido

Este proyecto ha sido mi primera experiencia desarrollando una aplicación fullstack completa desde cero. He aprendido a conectar un frontend en React con un backend en Express a través de una API REST, entendiendo cómo fluye la información entre ambas partes.

El flujo de la aplicación sigue este proceso: el usuario interactúa con la interfaz, el frontend realiza peticiones HTTP a la API, el backend procesa los datos y devuelve una respuesta que actualiza el estado en React. Entender este proceso completo ha sido uno de los aprendizajes más importantes del proyecto.

En el frontend he profundizado en TypeScript, aprendiendo a tipar componentes, hooks y las respuestas de la API. También he entendido mejor el uso de Context API y custom hooks para separar la lógica de la interfaz.

En el backend he aplicado una arquitectura por capas real, separando rutas, controladores y servicios, lo que ha hecho el código mucho más organizado y fácil de mantener.

---

## Principales problemas encontrados

**Deploy en Vercel**  
El mayor problema ha sido conectar el backend con Vercel. Al principio la aplicación daba errores 404 porque Vercel no sabía cómo servir el frontend y el backend desde el mismo repositorio. La solución fue configurar correctamente el archivo `vercel.json` para que enrutara las peticiones `/api/*` al servidor Express y el resto al frontend.

**TypeScript**  
Ha sido un aprendizaje continuo. Definir correctamente los tipos compartidos entre frontend y backend, usar utilidades como `Omit` en los formularios o tipar las respuestas de la API han sido aspectos que he ido resolviendo a medida que avanzaba el proyecto.

**Integración frontend-API**  
Conectar el hook `useHabits` con el cliente de API y el contexto global requirió varios ajustes para sincronizar correctamente los datos y reflejar los cambios en la interfaz.

**Diseño y responsive**  
Durante el desarrollo hubo problemas de layout, especialmente en pantallas pequeñas. Fue necesario ajustar los componentes para evitar solapamientos y mejorar la experiencia de usuario.

---

## Uso de IA durante el desarrollo

He utilizado IA principalmente como herramienta de apoyo en el desarrollo:

- **Resolución de errores**: cuando aparecían errores en consola o problemas en la lógica, la IA ayudaba a identificar posibles causas.
- **Mejoras en el código**: especialmente en la organización de componentes, estilos con Tailwind y pequeñas optimizaciones.
- **Configuración y despliegue**: ha sido clave para entender el funcionamiento de Vercel, variables de entorno y la integración frontend-backend.

---

## Reflexión final

En general, el proyecto me ha permitido entender cómo se construye una aplicación web moderna de principio a fin, conectando frontend y backend, gestionando datos y desplegando la aplicación en producción.

Este proyecto ha sentado una base sólida para futuros desarrollos más complejos.
