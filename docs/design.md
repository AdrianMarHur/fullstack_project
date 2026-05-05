# Arquitectura de la aplicación

## 1. Estructura general

La aplicación HabitFlow sigue una arquitectura fullstack con separación clara entre frontend y backend.

- **Frontend**: desarrollado con React, TypeScript y Tailwind CSS.
- **Backend**: API REST desarrollada con Node.js y Express.
- **Comunicación**: el frontend consume los datos a través de la API del backend mediante peticiones HTTP.

---

## 2. Estructura de componentes (Frontend)

La interfaz se organiza en componentes reutilizables y una página principal.

### Página principal

- **Home / Lista de hábitos**: muestra los hábitos organizados en dos pestañas (pendientes y completados), incluyendo un formulario de creación y métricas básicas de progreso.

### Componentes principales

- **HabitCard**: muestra la información de un hábito y permite marcarlo como completado o eliminarlo.
- **HabitList**: renderiza una lista de hábitos.
- **HabitForm**: formulario para crear nuevos hábitos.

---

## 3. Componentes reutilizables

Se han diseñado componentes reutilizables para mejorar la modularidad:

- HabitCard
- HabitList
- HabitForm

Estos componentes están tipados con TypeScript para garantizar consistencia en los datos y evitar errores en tiempo de desarrollo.

---

## 4. Gestión del estado

El estado de la aplicación se gestiona de forma combinada:

### Estado local

Se utiliza `useState` para:

- Formularios
- Control de pestañas (pendientes/completados)
- Modo oscuro

### Context API

Se utiliza un contexto global (`HabitsContext`) para:

- Lista de hábitos
- Añadir hábitos
- Marcar como completado
- Eliminar hábitos
- Contador de hábitos completados

### Custom Hook

Se implementa un hook personalizado:

- `useHabits`: centraliza la lógica de gestión de hábitos y comunicación con la API.

---

## 5. Diseño del backend y API REST

El backend sigue una arquitectura por capas:
routes → controllers → services

### Recurso principal

- **habits**

### Endpoints principales

- `GET /api/habits` — Devuelve la lista de hábitos
- `POST /api/habits` — Crea un nuevo hábito
- `PATCH /api/habits/:id` — Alterna el estado de completado
- `DELETE /api/habits/:id` — Elimina un hábito

---

## 6. Modelo de datos

### Habit

```ts
{
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  createdAt: string;
  completed: boolean;
}
```

---

## 7. Persistencia de datos

### Datos en servidor

- Hábitos

Los datos se almacenan en memoria en el servidor. Son la fuente de verdad y se gestionan a través de la API.

### Datos en cliente

- Estado de la interfaz (loading, error)
- Control de pestañas
- Formularios

No se utiliza LocalStorage para datos principales de la aplicación.

---

## 8. Flujo de datos
Frontend (React)
↓
API Client (fetch)
↓
Backend (Express)
↓
Servicios y lógica
↓
Respuesta al frontend

---

## 9. Diagrama de flujo
[ UI React ]
↓
[ Custom Hook / Context ]
↓
[ API Client ]
↓
[ Express API ]
↓
[ Controllers ]
↓
[ Services ]
↓
[ Data (Habits en memoria) ]

---

## 10. Decisiones de diseño

- Separación clara entre frontend y backend
- Uso de TypeScript para garantizar tipado fuerte en el frontend
- Arquitectura por capas en el backend
- Uso de Context API para estado global
- Uso de custom hook para centralizar la lógica
- API REST como fuente de verdad de datos
- Simplificación del modelo de datos para mantener el alcance del proyecto manejable

Estas decisiones permiten crear una aplicación escalable, mantenible y fácil de extender en el futuro.