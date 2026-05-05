# API

La API de HabitFlow permite gestionar hábitos mediante endpoints REST. Está desarrollada con Node.js y Express siguiendo una arquitectura por capas.

Los datos se simulan mediante estructuras en memoria, lo que permite realizar operaciones CRUD sin necesidad de una base de datos externa.


## Endpoints

### GET /api/habits

Obtiene la lista de todos los hábitos.

Respuesta (200 OK):

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Leer",
    "frequency": "daily",
    "createdAt": "2026-04-27T10:00:00.000Z",
    "completed": false
  }
]
```

### POST /api/habits

Crea un nuevo hábito.

Request:

```json
{
  "name": "Leer",
  "frequency": "daily"
}
```

Respuesta (201 Created):

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Leer",
  "frequency": "daily",
  "createdAt": "2026-04-27T10:00:00.000Z",
  "completed": false
}
```

Error (400 Bad Request):

```json
{
  "error": "Datos inválidos"
}
```

### PATCH /api/habits/:id

Actualiza un hábito (cambia el estado de `completed`).

Ejemplo:
PATCH /api/habits/550e8400-e29b-41d4-a716-446655440000

Respuesta (200 OK):

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Leer",
  "frequency": "daily",
  "createdAt": "2026-04-27T10:00:00.000Z",
  "completed": true
}
```

Error (404 Not Found):

```json
{
  "error": "Hábito no encontrado"
}
```


### DELETE /api/habits/:id

Elimina un hábito.

Ejemplo:
DELETE /api/habits/550e8400-e29b-41d4-a716-446655440000

Respuesta (200 OK):

```json
{
  "message": "Eliminado correctamente"
}
```

Error (404 Not Found):

```json
{
  "error": "Hábito no encontrado"
}
```

## Códigos HTTP utilizados

- `200 OK` → solicitud correcta
- `201 Created` → recurso creado correctamente
- `400 Bad Request` → datos inválidos
- `404 Not Found` → recurso no encontrado
- `500 Internal Server Error` → error inesperado


## Pruebas realizadas

La API ha sido probada utilizando Thunder Client verificando todas las operaciones CRUD.

 **Obtener hábitos**
Request: `GET /api/habits`
Resultado: lista vacía inicialmente y posteriormente con datos tras crear hábitos.

 **Crear hábito**
Request: `POST /api/habits`
Resultado: devuelve el hábito creado con un ID único y campo `completed` inicializado en `false`.

**Actualizar hábito**
Request: `PATCH /api/habits/:id`
Resultado: alterna correctamente el valor de `completed`.

**Eliminar hábito**
Request: `DELETE /api/habits/:id`
Resultado: elimina el hábito de la lista.

**Pruebas de error**
- `POST` sin datos → devuelve `400 Bad Request`
- `PATCH` con ID inexistente → devuelve `404 Not Found`
- `DELETE` con ID inexistente → devuelve `404 Not Found`

## Notas

- Los datos se almacenan en memoria, por lo que se pierden al reiniciar el servidor.
- La API sigue principios REST, utilizando métodos HTTP adecuados y rutas claras.
- La arquitectura por capas (routes, controllers, services) facilita la escalabilidad y el mantenimiento del sistema.