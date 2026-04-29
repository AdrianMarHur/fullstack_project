te lo doy de nuevo:

# Arquitectura de la aplicación

## 1. Estructura general

La aplicación HabitFlow seguirá una arquitectura fullstack con separación clara entre frontend y backend.

- **Frontend**: desarrollado con React, TypeScript y Tailwind CSS.
- **Backend**: API REST desarrollada con Node.js y Express.
- **Comunicación**: el frontend consumirá los datos a través de la API del backend.


## 2. Estructura de componentes (Frontend)

La interfaz se organizará en componentes reutilizables y páginas.

### Páginas principales

- **Home / Lista de hábitos**
- **Detalle de hábito**
- **Crear/editar hábito**
- **Estadísticas**
- **Página 404**

### Componentes principales

- **HabitCard**: muestra la información de un hábito.
- **HabitList**: lista de hábitos.
- **HabitForm**: formulario para crear o editar hábitos.
- **Calendar**: muestra los días completados.
- **Layout/Navbar**: estructura base de la aplicación.


## 3. Componentes reutilizables

Se diseñarán componentes reutilizables para mejorar la modularidad:

- HabitCard
- HabitForm
- Calendar
- Botones reutilizables
- Inputs de formulario

Estos componentes estarán tipados con TypeScript para garantizar consistencia.


## 4. Gestión del estado

El estado de la aplicación se gestionará de varias formas:

### Estado local

Se usará `useState` para estados simples dentro de componentes.

### Context API

Se utilizará un contexto global para gestionar los hábitos:

- Lista de hábitos
- Actualización de hábitos
- Datos globales compartidos

### Custom Hooks

Se crearán hooks personalizados:

- `useHabits`: gestión de hábitos y llamadas a API
- `useStreak`: cálculo de rachas
- `useToday`: lógica del día actual

Esto permite separar la lógica de la interfaz y reutilizar código.


## 5. Diseño del backend y API REST

El backend seguirá una arquitectura por capas:
routes → controllers → services

### Recursos principales

- **habits**
- **habit-records**

### Endpoints principales

#### Habits

- `GET /api/v1/habits` — Devuelve la lista de hábitos
- `POST /api/v1/habits` — Crea un nuevo hábito
- `PUT /api/v1/habits/:id` — Actualiza un hábito
- `DELETE /api/v1/habits/:id` — Elimina un hábito

#### Records

- `GET /api/v1/habits/:id/records` — Devuelve los registros de cumplimiento de un hábito
- `POST /api/v1/habits/:id/records` — Registra un hábito como completado en una fecha

### Contratos de datos

#### Habit

```ts
{
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  category?: string;
  color?: string;
  createdAt: string;
}
```

#### HabitRecord

```ts
{
  id: string;
  habitId: string;
  date: string;
  completed: boolean;
}
```

## 6. Persistencia de datos

### Datos en servidor

- Hábitos
- Registros de hábitos

Estos datos serán la fuente de verdad y se gestionarán a través de la API.

### Datos en cliente

- Estado de la interfaz (loading, error)
- Datos temporales
- Formularios

No se usará LocalStorage como fuente principal de datos una vez integrada la API.


## 7. Flujo de datos

El flujo de datos será el siguiente:
Frontend (React)
↓
API Client (fetch/axios)
↓
Backend (Express)
↓
Servicios y lógica
↓
Respuesta al frontend


## 8. Diagrama de flujo
[ UI React ]
↓
[ Custom Hooks / Context ]
↓
[ API Client ]
↓
[ Express API ]
↓
[ Controllers ]
↓
[ Services ]
↓
[ Data (Habits / Records) ]


## 9. Decisiones de diseño

- Separación clara entre frontend y backend
- Uso de TypeScript para garantizar tipado fuerte
- Arquitectura por capas en el backend
- Uso de Context API para estado global
- Uso de custom hooks para reutilización de lógica
- API REST como fuente de verdad de datos

Estas decisiones permiten crear una aplicación escalable, mantenible y fácil de extender en el futuro.
