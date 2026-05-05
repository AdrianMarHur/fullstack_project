import { useState, useEffect, useCallback, useMemo } from "react"
import type { Habit } from "../types/habit"
import {
  fetchHabits,
  createHabitApi,
  toggleHabitApi,
  deleteHabitApi,
} from "../api/client"

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadHabits() {
      try {
        setError(null)
        const data = await fetchHabits()
        setHabits(data)
      } catch {
        setError("Error al cargar hábitos")
      } finally {
        setLoading(false)
      }
    }

    loadHabits()
  }, [])
  const addHabit = useCallback(async (
    habit: Omit<Habit, "id" | "createdAt" | "completed">
  ) => {
    try {
      setError(null)

      const newHabit = await createHabitApi(habit)
      setHabits((prev) => [...prev, newHabit])

    } catch {
      setError("Error al crear hábito")
    }
  }, [])
  const toggleHabit = useCallback(async (id: string) => {
    try {
      setError(null)

      const updated = await toggleHabitApi(id)

      setHabits((prev) =>
        prev.map((h) => (h.id === id ? updated : h))
      )

    } catch {
      setError("Error al actualizar hábito")
    }
  }, [])

  const deleteHabit = useCallback(async (id: string) => {
    try {
      setError(null)

      await deleteHabitApi(id)

      setHabits((prev) => prev.filter((h) => h.id !== id))
    } catch {
      setError("Error al eliminar hábito")
    }
  }, [])
  const completedCount = useMemo(
    () => habits.filter((h) => h.completed).length,
    [habits]
  )

  const totalCount = habits.length

  return {
    habits,
    loading,
    error,
    addHabit,
    toggleHabit,
    deleteHabit,
    completedCount,
    totalCount,
  }
}
