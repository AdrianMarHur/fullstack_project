import { useState } from "react"
import type { Habit } from "../types/habit"

interface HabitFormProps {
  onAdd: (habit: Omit<Habit, "id" | "createdAt" | "completed">) => void
}

function HabitForm({ onAdd }: HabitFormProps) {
  const [name, setName] = useState("")
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      setError("El nombre del hábito es obligatorio")
      return
    }

    setError("")
    onAdd({ name, frequency })

    setName("")
    setFrequency("daily")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow mb-6"
    >
      <h2 className="text-lg font-semibold mb-2 dark:text-white">
        Crear hábito
      </h2>

      <input
        type="text"
        placeholder="Nombre del hábito"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
          setError("")
        }}
        className="w-full border p-2 rounded mb-2 bg-white dark:bg-gray-700 dark:text-white"
      />

      <select
        value={frequency}
        onChange={(e) =>
          setFrequency(e.target.value as "daily" | "weekly")
        }
        className="w-full border p-2 rounded mb-2 bg-white dark:bg-gray-700 dark:text-white"
      >
        <option value="daily">Diario</option>
        <option value="weekly">Semanal</option>
      </select>

      {error && (
        <p className="text-red-500 text-sm mb-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!name.trim()}
        className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 disabled:opacity-50 transition"
      >
        Añadir hábito
      </button>
    </form>
  )
}

export default HabitForm