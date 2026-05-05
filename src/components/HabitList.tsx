import HabitCard from "./HabitCard"
import type { Habit } from "../types/habit"

interface HabitListProps {
  habits: Habit[]
  onComplete: (id: string) => void
  onDelete: (id: string) => void
}

function HabitList({ habits, onComplete, onDelete }: HabitListProps) {
  if (habits.length === 0) {
    return (
      <p className="text-gray-400 text-center py-10">
         No hay hábitos en esta lista todavía
      </p>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all duration-300">
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default HabitList