# Hooks

En esta aplicación se utilizan distintos hooks de React para gestionar el estado, manejar efectos secundarios, optimizar el rendimiento y reutilizar lógica.


## useState

Se utiliza `useState` para gestionar el estado de la lista de hábitos.

Dentro del custom hook `useHabits`, se emplea para almacenar los hábitos y actualizar su contenido cuando se añaden nuevos hábitos o se modifican.

Permite que la interfaz se actualice automáticamente cada vez que cambia el estado.


## useEffect

Se utiliza `useEffect` dentro del hook `useHabits` para simular la carga inicial de datos.

Este hook permite ejecutar código cuando el componente se monta, en este caso, inicializando la lista de hábitos con datos mock.

El array de dependencias vacío (`[]`) indica que se ejecuta solo una vez al montar el componente.

Este patrón es equivalente al que se utilizará en el futuro para realizar llamadas a una API real.


## useCallback

Se utiliza `useCallback` para memorizar funciones y evitar que se redefinan en cada render.

En concreto, se emplea en:

- `addHabit`: añade un nuevo hábito a la lista.
- `toggleHabit`: cambia el estado de un hábito entre completado y no completado.

Esto ayuda a mejorar el rendimiento y evita renders innecesarios en componentes hijos.


## useMemo

Se utiliza `useMemo` para calcular valores derivados del estado de manera optimizada.

En la aplicación se emplea para calcular el número de hábitos completados:

- `completedCount`: cuenta los hábitos marcados como completados.

Este cálculo implica recorrer el array de hábitos, por lo que se memoriza para evitar ejecuciones innecesarias en cada render.

Sin embargo, no todos los cálculos requieren `useMemo`. Por ejemplo, el total de hábitos (`habits.length`) es una operación constante y no tiene coste significativo, por lo que no se utiliza `useMemo` en ese caso.

Esto demuestra un uso adecuado de la herramienta, aplicándola únicamente cuando aporta beneficios reales de rendimiento.


## Custom Hook: useHabits

Se ha creado un hook personalizado llamado `useHabits` para encapsular toda la lógica relacionada con los hábitos.

Este hook centraliza:

- El estado de los hábitos (`useState`)
- La carga inicial de datos (`useEffect`)
- Las funciones para modificar el estado (`useCallback`)
- Los cálculos derivados (`useMemo`)

Proporciona las siguientes funcionalidades:

- `habits`: lista de hábitos
- `addHabit`: añade un nuevo hábito
- `toggleHabit`: marca o desmarca un hábito como completado
- `completedCount`: número de hábitos completados
- `totalCount`: número total de hábitos

De esta forma, se separa la lógica de negocio de los componentes de interfaz, permitiendo un código más limpio, reutilizable y fácil de mantener.