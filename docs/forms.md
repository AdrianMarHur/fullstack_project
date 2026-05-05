# Formularios

En la aplicación se utilizan formularios controlados para gestionar la creación de hábitos.


## Formularios controlados

Los inputs del formulario se gestionan mediante `useState`, lo que permite que React tenga el control total sobre los valores introducidos por el usuario:

```tsx
const [name, setName] = useState("")
const [frequency, setFrequency] = useState<"daily" | "weekly">("daily")
```

Esto garantiza que el estado de React siempre refleja lo que el usuario ha escrito, facilitando la validación y el envío del formulario.


## Campos del formulario

El formulario de creación de hábitos (`HabitForm`) incluye los siguientes campos:

- **Nombre**: input de texto libre, campo obligatorio.
- **Frecuencia**: selector entre `daily` (diario) y `weekly` (semanal), campo obligatorio con valor por defecto `daily`.


## Validación

Antes de enviar el formulario se valida que el nombre no esté vacío. Si no se cumple, se muestra un mensaje de error y no se crea el hábito:

```tsx
if (!name.trim()) {
  setError("El nombre del hábito es obligatorio")
  return
}
```

## Mensajes de error

Los errores se gestionan con un estado `error` y se muestran visualmente debajo de los campos. Además el error desaparece automáticamente cuando el usuario empieza a escribir de nuevo:

```tsx
onChange={(e) => {
  setName(e.target.value)
  setError("")
}}

{error && (
  <p className="text-red-500 text-sm mb-2">{error}</p>
)}
```

---

## Envío del formulario

Al enviar el formulario correctamente se genera un nuevo objeto `Habit` usando `crypto.randomUUID()` como identificador único garantizado y se llama a la función `onAdd` recibida como prop. Tras el envío el formulario se resetea:

```tsx
const newHabit: Habit = {
  id: crypto.randomUUID(),
  name,
  frequency,
  createdAt: new Date().toISOString(),
}

onAdd(newHabit)
setName("")
setFrequency("daily")
```