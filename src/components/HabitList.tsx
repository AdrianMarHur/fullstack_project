import HabitCard from "./HabitCard"
import type { Habit } from "../types/habit"

interface HabitListProps {
  habits: Habit[]
  onComplete: (id: string) => void
}

function HabitList({ habits, onComplete }: HabitListProps) {
  if (habits.length === 0) {
    return (
      <p className="text-gray-500">
        No tienes hábitos todavía.
      </p>
    )
  }

  return (
    <div>
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onComplete={onComplete}
        />
      ))}
    </div>
  )
}

export default HabitList