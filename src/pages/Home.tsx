import { useState } from "react"
import HabitList from "../components/HabitList"
import HabitForm from "../components/HabitForm"
import type { Habit } from "../types/habit"

function Home() {
  const [habits, setHabits] = useState<Habit[]>([])

  const handleAdd = (habit: Habit) => {
    setHabits((prev) => [...prev, habit])
  }

  const handleComplete = (id: string) => {
    setHabits((prev) =>
     prev.map((habit) =>
        habit.id === id
            ? { ...habit, completed: !habit.completed }
            : habit
            )
        )
    }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">HabitFlow</h1>

      <HabitForm onAdd={handleAdd} />

      <HabitList
        habits={habits}
        onComplete={handleComplete}
      />
    </div>
  )
}

export default Home