# Testing

Se han realizado pruebas manuales sobre la aplicación para verificar el correcto funcionamiento de todas sus funcionalidades, tanto a nivel de interfaz como de comunicación con la API.

---

## Funcionalidades probadas

### Creación de hábitos

- Se ha probado el formulario de creación (`HabitForm`)
- Se valida correctamente que el nombre no esté vacío
- Se comprueba que los datos se envían al backend mediante la API
- El hábito se crea correctamente y se añade a la lista en la interfaz

---

### Cambio de estado (completar / desmarcar)

- Se ha probado marcar hábitos como completados
- Se ha probado volver a marcarlos como pendientes
- Se comprueba que el estado `completed` se actualiza correctamente en:
  - la interfaz
  - el backend
- Se verifica que los hábitos cambian de pestaña (pendientes ↔ completados)

---

### Eliminación de hábitos

- Se ha probado eliminar hábitos desde ambas pestañas
- Se muestra un mensaje de confirmación antes de eliminar
- Se comprueba que el hábito desaparece de la interfaz y del backend

---

### Visualización del progreso

- Se ha verificado el cálculo del progreso general
- La barra de progreso refleja correctamente el porcentaje de hábitos completados
- Se comprueba el comportamiento en los siguientes casos:
  - Sin hábitos (0%)
  - Con algunos hábitos completados
  - Todos los hábitos completados (100%)

---

### Modo oscuro

- Se ha probado el cambio entre modo claro y oscuro
- Se verifica que los estilos se aplican correctamente en toda la aplicación
- Se comprueba que el cambio es dinámico y afecta a todos los componentes

---

## Estados de la aplicación

- **Loading**: se muestra un mensaje de carga al inicializar la aplicación
- **Error**: se muestra un mensaje cuando la API no responde correctamente
- **Datos cargados**: los hábitos se renderizan correctamente tras la carga

---

## Pruebas de error

- Envío de formulario sin nombre → muestra error en la interfaz
- Backend apagado → muestra mensaje de error
- ID inexistente en operaciones (`PATCH` o `DELETE`) → la API responde con error controlado (404)

---

## Pruebas de integración

Se ha verificado la correcta integración entre frontend y backend:

- El frontend envía datos mediante peticiones HTTP
- El backend procesa las solicitudes y devuelve respuestas correctas
- El estado de la aplicación se actualiza tras cada operación (crear, completar, eliminar)

---

## Diseño responsive

Se ha comprobado el funcionamiento en distintos tamaños de pantalla:

- Móvil
- Tablet
- Escritorio

La interfaz se adapta correctamente utilizando Tailwind CSS:

- Las tarjetas se reorganizan en columnas según el tamaño
- Los botones se ajustan para evitar solapamientos
- El contenido es accesible en todas las resoluciones

---

## Consola y red

- No se detectan errores en consola
- Las peticiones HTTP responden con los códigos esperados:
  - `200 OK`
  - `201 Created`
  - `400 Bad Request`
  - `404 Not Found`

---

## Problemas detectados y soluciones

### Problema: botones desbordados en pantallas pequeñas

En versiones iniciales, los botones de las tarjetas se solapaban o quedaban fuera del contenedor en pantallas pequeñas.

### Solución

- Se rediseñó el layout de `HabitCard`
- Se utilizó un diseño en columna (`flex-col`) para móviles
- Se ajustaron los botones con `w-full` en móviles y `sm:w-auto` en pantallas mayores

---

### Problema: modo oscuro no aplicado correctamente

En versiones iniciales el modo oscuro no funcionaba debido a la configuración de Tailwind.

### Solución

- Se configuró `darkMode: "class"` en Tailwind
- Se aplicó la clase `dark` al elemento `<html>` dinámicamente

---

## Conclusión

La aplicación funciona correctamente en todas sus funcionalidades principales.

Se han validado tanto los flujos normales como los casos de error, garantizando una experiencia de usuario estable, coherente y completamente funcional.