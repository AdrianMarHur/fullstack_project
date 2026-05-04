import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">404 - Página no encontrada</h2>

      <Link to="/" className="text-blue-600 underline">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound