import type { Habit } from "../types/habit"

interface HabitCardProps {
  habit: Habit
  onComplete: (id: string) => void
  onDelete: (id: string) => void
}

function HabitCard({ habit, onComplete, onDelete }: HabitCardProps) {
  return (
    <div
      className={`w-full p-4 rounded-2xl shadow transition transform hover:scale-[1.02] hover:shadow-lg flex flex-col gap-3 ${
        habit.completed
          ? "bg-green-50 dark:bg-green-900"
          : "bg-white dark:bg-gray-800"
      }`}
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3
            className={`font-semibold text-lg ${
              habit.completed
                ? "line-through text-gray-400 dark:text-gray-500"
                : "text-gray-800 dark:text-white"
            }`}
          >
            {habit.name}
          </h3>

          {habit.completed && (
            <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full">
              Completado
            </span>
          )}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-300">
          Frecuencia: {habit.frequency}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mt-2">
        <button
          onClick={() => onComplete(habit.id)}
          className={`w-full sm:w-auto px-3 py-1 rounded text-white text-sm transition ${
            habit.completed
              ? "bg-gray-400 hover:bg-gray-500"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {habit.completed ? "Mover a pendientes" : "Completar"}
        </button>

        <button
          onClick={() => {
            if (confirm("¿Seguro que quieres eliminar este hábito?")) {
              onDelete(habit.id)
            }
          }}
          className="w-full sm:w-auto bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default HabitCard
