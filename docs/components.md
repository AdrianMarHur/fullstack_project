# Componentes

## Layout

Componente que define la estructura general de la aplicación.

Recibe como prop `children` y renderiza el contenido dentro de un layout con header y contenido principal.

Incluye el componente `Navbar`.


## Navbar

Componente de navegación principal de la aplicación.

Permite acceder a las diferentes secciones de la aplicación mediante React Router.

Actualmente incluye enlaces a la página principal y a futuras secciones como estadísticas.


## Home

Página principal de la aplicación.

Actúa como componente contenedor, gestionando el estado de los hábitos mediante `useState`.

Se encarga de pasar los datos y funciones a los componentes hijos (`HabitForm` y `HabitList`).

Gestiona también la funcionalidad de marcar hábitos como completados, modificando el campo `completed` de cada hábito y reflejando los cambios automáticamente en la interfaz gracias al sistema reactivo de React.


## HabitList

Componente que se encarga de renderizar una lista de hábitos.

Recibe un array de hábitos (`Habit[]`) y una función `onComplete` para manejar la acción de marcar un hábito como completado.

Utiliza el componente `HabitCard` para mostrar cada hábito de forma individual.

También gestiona el caso en el que no hay hábitos, mostrando un mensaje al usuario.


## HabitCard

Componente que representa un hábito individual.

Recibe un objeto `habit` y una función `onComplete`.

Muestra la información del hábito (nombre, frecuencia y categoría) y permite marcarlo como completado.

Si el hábito está completado, se aplica un estilo visual diferente (texto tachado y botón con estado distinto), proporcionando feedback al usuario.


## HabitForm

Componente que permite crear nuevos hábitos mediante un formulario.

Gestiona los campos nombre y frecuencia mediante `useState`.

Genera un nuevo objeto `Habit` al enviar el formulario y lo añade a la lista principal a través de la función `onAdd` recibida como prop.


## Interacción de hábitos

Se implementa la funcionalidad de marcar hábitos como completados.

El estado se gestiona en el componente `Home` utilizando `useState`, modificando el campo `completed` de cada hábito.

Los cambios se reflejan automáticamente en la interfaz gracias al sistema reactivo de React.


Estos componentes forman la estructura principal del frontend de HabitFlow, siguiendo una arquitectura modular basada en React y TypeScript, permitiendo una fácil escalabilidad y reutilización del código.