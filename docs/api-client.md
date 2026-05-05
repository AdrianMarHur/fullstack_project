# API Client

La aplicación utiliza un cliente de API para comunicarse con el backend mediante peticiones HTTP usando `fetch`.

Esta capa actúa como intermediario entre el frontend y el backend, centralizando todas las llamadas a la API y permitiendo trabajar con datos tipados en TypeScript.


## Cliente de API

Se ha creado el archivo `src/api/client.ts`, que contiene funciones para interactuar con los endpoints del backend:

- `fetchHabits` → obtiene todos los hábitos (GET)
- `createHabitApi` → crea un nuevo hábito (POST)
- `toggleHabitApi` → actualiza un hábito (PATCH)
- `deleteHabitApi` → elimina un hábito (DELETE)

Todas las funciones utilizan `fetch` y devuelven promesas con datos tipados. Si la respuesta no es correcta se lanza un error que es capturado por el hook correspondiente.


## URL de la API

La URL base de la API se gestiona mediante una variable de entorno para que funcione tanto en local como en producción:

```ts
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api"
```

En local se define en el archivo `.env`:
VITE_API_URL=http://localhost:3000/api

En producción se configura como variable de entorno en Vercel.


## Tipos

Se utilizan tipos TypeScript alineados con el backend para garantizar coherencia de datos entre frontend y backend.

El tipo `Omit` se utiliza para las funciones de creación, evitando pasar campos que genera el servidor:

```ts
createHabitApi(habit: Omit<Habit, "id" | "createdAt" | "completed">)
```


## Estados de red

La integración con la API gestiona tres estados en la interfaz:

- **Loading**: mientras se realizan las peticiones se muestra un mensaje de carga al usuario.
- **Error**: si una petición falla se muestra un mensaje de error.
- **Éxito**: cuando los datos se obtienen correctamente se renderizan en la interfaz.

Estos estados se gestionan en el hook `useHabits` mediante `useState` y se consumen desde los componentes a través del contexto global.


## Fuente de verdad

Una vez integrada la API, el backend es la única fuente de verdad para los datos de hábitos. No se utiliza LocalStorage para los datos principales de la aplicación.