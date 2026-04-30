import { useState } from "react"
import type { Habit } from "../types/habit"

interface HabitFormProps {
  onAdd: (habit: Habit) => void
}

function HabitForm({ onAdd }: HabitFormProps) {
  const [name, setName] = useState("")
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) return

    const newHabit: Habit = {
      id: Date.now().toString(),
      name,
      frequency,
      createdAt: new Date().toISOString(),
    }

    onAdd(newHabit)
    setName("")
    setFrequency("daily")
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">Crear hábito</h2>

      <input
        type="text"
        placeholder="Nombre del hábito"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />

      <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
        className="w-full border p-2 rounded mb-2"
      >
        <option value="daily">Diario</option>
        <option value="weekly">Semanal</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
      >
        Añadir hábito
      </button>
    </form>
  )
}

export default HabitForm
