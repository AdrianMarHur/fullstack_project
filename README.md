# HabitFlow 🌱

HabitFlow es una aplicación web fullstack para gestionar hábitos personales. Permite crear hábitos diarios o semanales, marcarlos como completados y visualizar el progreso de forma sencilla.

## Demo

🔗 https://fullstack-project-flame.vercel.app

## Tecnologías

- **Frontend**: React, TypeScript, Tailwind CSS, React Router
- **Backend**: Node.js, Express
- **Despliegue**: Vercel

## Estructura del proyecto
habitflow/
├── src/              # Frontend React
│   ├── api/          # Cliente de API
│   ├── components/   # Componentes reutilizables
│   ├── context/      # Estado global
│   ├── hooks/        # Custom hooks
│   ├── pages/        # Páginas
│   └── types/        # Tipos TypeScript
├── server/           # Backend Express
│   ├── routes/
│   ├── controllers/
│   └── services/
└── docs/             # Documentación del proyecto

## Instalación

```bash
# Instalar dependencias
npm install
cd server && npm install && cd ..

# Variables de entorno
echo "VITE_API_URL=http://localhost:3000/api" > .env

# Arrancar
npm run dev
```

## Documentación

La documentación completa del proyecto está disponible en la carpeta [`docs/`](docs/).

## Organización

Proyecto gestionado con Trello: [Ver tablero](https://trello.com/b/k8Ee8UEV/habitflow)