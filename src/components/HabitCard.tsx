import type { Habit } from "../types/habit"

interface HabitCardProps {
  habit: Habit
  onComplete: (id: string) => void
}

function HabitCard({ habit, onComplete }: HabitCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow p-4 mb-3 hover:shadow-md transition border-l-4"
      style={{ borderColor: habit.color || "#6366f1" }}
    >
      <h3
        className={`text-lg font-semibold ${
          habit.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {habit.name}
      </h3>

      <p className="text-sm text-gray-500">
        Frecuencia: {habit.frequency === "daily" ? "Diaria" : "Semanal"}
      </p>

      {habit.category && (
        <p className="text-xs text-blue-500">{habit.category}</p>
      )}

      <button
        onClick={() => onComplete(habit.id)}
        className={`mt-2 px-3 py-1 text-white rounded ${
          habit.completed
            ? "bg-gray-400"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {habit.completed ? "Completado" : "Marcar como completado"}
      </button>
    </div>
  )
}

export default HabitCard