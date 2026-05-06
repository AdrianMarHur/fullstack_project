# Despliegue

## Frontend

El frontend de la aplicación HabitFlow se ha desplegado utilizando Vercel.

Pasos realizados:

- Subida del proyecto a GitHub
- Importación del repositorio en Vercel
- Detección automática del framework (React con Vite)
- Configuración del archivo `vercel.json` para gestionar frontend y backend en el mismo repositorio
- Despliegue automático al hacer push a la rama principal

El frontend se encuentra accesible en la siguiente URL:
https://fullstack-project-flame.vercel.app

---

## Backend

El backend se encuentra en el mismo repositorio que el frontend y se ha adaptado para funcionar en Vercel utilizando funciones serverless mediante `@vercel/node`.

La configuración del archivo `vercel.json` define cómo se construye y enruta cada parte:

```json
{
  "version": 2,
  "builds": [
    { "src": "server/index.js", "use": "@vercel/node" },
    { "src": "package.json", "use": "@vercel/static-build", "config": { "distDir": "dist" } }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "server/index.js" },
    { "src": "/(.*)", "dest": "/$1" }
  ]
}
```

Las peticiones a `/api/*` se redirigen al servidor Express y el resto sirve el frontend estático.

Ejemplo de endpoint en producción:
GET https://fullstack-project-flame.vercel.app/api/habits

---

## Variables de entorno

Para permitir la comunicación entre frontend y backend se ha configurado la siguiente variable de entorno en Vercel:

| Variable | Valor |
|----------|-------|
| `VITE_API_URL` | `https://fullstack-project-flame.vercel.app/api` |

En local se utiliza el archivo `.env` con el valor apuntando al servidor local:

VITE_API_URL=http://localhost:3000/api

