import { useHabitsContext } from "../context/HabitsContext"

function Stats() {
  const { completedCount, totalCount } = useHabitsContext()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Estadísticas</h2>

      <p>
        Has completado {completedCount} de {totalCount} hábitos.
      </p>
    </div>
  )
}

export default Stats