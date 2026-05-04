# Routing

La aplicación utiliza React Router para gestionar la navegación entre las diferentes páginas de forma dinámica, sin recargar el navegador.


## Rutas definidas

- `/` → Página principal (Home)
- `/stats` → Página de estadísticas
- `*` → Página 404 (NotFound)


## Estructura

El enrutado se define en `App.tsx`, donde se configuran las diferentes rutas utilizando los componentes `Routes` y `Route`:

<Layout>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/stats" element={<Stats />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Layout>

El componente Layout envuelve todas las páginas, proporcionando una estructura común con cabecera y contenido principal.
-Navegación:

La navegación se gestiona desde el componente Navbar, incluido dentro de Layout.
Se utiliza el componente Link de React Router en lugar de etiquetas <a> convencionales, evitando recargas de página y proporcionando una experiencia de usuario fluida.

-Página 404:
Cualquier ruta no definida redirige automáticamente al componente NotFound, gracias al uso del comodín * en la configuración de rutas.