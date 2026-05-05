# Formularios

En la aplicación se utilizan formularios controlados para gestionar la creación de hábitos.


## Formularios controlados

Los inputs del formulario se gestionan mediante `useState`, lo que permite que React tenga el control total sobre los valores introducidos por el usuario:

```tsx
const [name, setName] = useState("")
const [frequency, setFrequency] = useState<"daily" | "weekly">("daily")

Esto garantiza que el estado de React siempre refleja lo que el usuario ha escrito, facilitando la validación y el envío del formulario.
Campos del formulario
El formulario de creación de hábitos (HabitForm) incluye los siguientes campos:

Nombre: input de texto, campo obligatorio.
Frecuencia: selector entre daily (diario) y weekly (semanal), con valor por defecto daily.

Validación
Antes de enviar el formulario se valida que el nombre no esté vacío. Si no se cumple, se muestra un mensaje de error y no se envía el formulario:

if (!name.trim()) {
  setError("El nombre del hábito es obligatorio")
  return
}

Mensajes de error
Los errores se gestionan con un estado error y se muestran visualmente debajo de los campos. Además, el error desaparece automáticamente cuando el usuario empieza a escribir de nuevo:

onChange={(e) => {
  setName(e.target.value)
  setError("")
}}

{error && (
  <p className="text-red-500 text-sm mb-2">{error}</p>
)}

Envío del formulario
Cuando el formulario es válido, se envían únicamente los datos necesarios (name y frequency) a la función onAdd, que se encarga de comunicarse con la API del backend.
El backend es responsable de generar el identificador (id), la fecha de creación (createdAt) y el estado del hábito (completed).

onAdd({ name, frequency })

Tras el envío correcto, el formulario se resetea:
setName("")
setFrequency("daily")

Flujo de creación de hábitos

El proceso de creación de un hábito sigue el siguiente flujo:
Frontend (HabitForm)
↓
Envía datos básicos (name, frequency)
↓
API REST (POST /habits)
↓
Backend genera id, createdAt y completed
↓
Respuesta al frontend
↓
Actualización del estado en la aplicación
Este enfoque evita duplicar lógica entre frontend y backend y garantiza la consistencia de los datos.