import { useState, useCallback, useEffect, useMemo } from "react"
import type { Habit } from "../types/habit"

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([])

  useEffect(() => {
    const mockHabits: Habit[] = [
      {
        id: "1",
        name: "Leer",
        frequency: "daily",
        createdAt: new Date().toISOString(),
        completed: false,
      },
    ]
    setHabits(mockHabits)
  }, [])

  const addHabit = useCallback((habit: Habit) => {
    setHabits((prev) => [...prev, habit])
  }, [])

  const toggleHabit = useCallback((id: string) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    )
  }, [])

  const completedCount = useMemo(() => {
    return habits.filter((h) => h.completed).length
  }, [habits])

  const totalCount = habits.length

  return {
    habits,
    addHabit,
    toggleHabit,
    completedCount,
    totalCount,
  }
}
