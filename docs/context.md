# Context API

Se utiliza Context API para gestionar el estado global de los hábitos en la aplicación, evitando tener que pasar datos manualmente entre componentes mediante props (prop drilling).


## HabitsContext

Se ha creado un contexto `HabitsContext` que proporciona a toda la aplicación:

- Lista de hábitos
- Función para añadir hábitos (`addHabit`)
- Función para marcar hábitos como completados (`toggleHabit`)
- Estadísticas: hábitos completados (`completedCount`) y total (`totalCount`)


## HabitsProvider

El contexto se implementa mediante un `HabitsProvider` que envuelve toda la aplicación en `main.tsx`, por encima del componente `App`.

Internamente utiliza el custom hook `useHabits` como fuente de datos y lógica, centralizando toda la gestión de estado en un único punto.


## useHabitsContext

Para consumir el contexto se utiliza el hook `useHabitsContext`, que incluye una validación para lanzar un error si se utiliza fuera del Provider.

Esto permite acceder a los datos desde cualquier componente de la aplicación sin necesidad de pasar props manualmente entre niveles.


## Cuándo es útil Context API

Context API es especialmente útil cuando varios componentes en distintos niveles del árbol necesitan acceder a los mismos datos.

En HabitFlow, a medida que se añadan nuevas páginas como estadísticas o detalle de hábito, todas podrán acceder a los hábitos directamente desde el contexto sin modificar la cadena de props.


El uso de Context API, junto con el custom hook `useHabits`, permite una arquitectura más limpia, escalable y mantenible, separando claramente la lógica de negocio de los componentes de interfaz.