import { createContext, useContext } from "react"
import type { Habit } from "../types/habit"
import { useHabits } from "../hooks/useHabits"

interface HabitsContextType {
  habits: Habit[]
  loading: boolean
  error: string | null
  addHabit: (
    habit: Omit<Habit, "id" | "createdAt" | "completed">
  ) => void
  toggleHabit: (id: string) => void
  deleteHabit: (id: string) => void
  completedCount: number
  totalCount: number
}

const HabitsContext = createContext<HabitsContextType | undefined>(
  undefined
)

export function HabitsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const {
    habits,
    loading,
    error,
    addHabit,
    toggleHabit,
    deleteHabit,
    completedCount,
    totalCount,
  } = useHabits()

  return (
    <HabitsContext.Provider
      value={{
        habits,
        loading,
        error,
        addHabit,
        toggleHabit,
        deleteHabit,
        completedCount,
        totalCount,
      }}
    >
      {children}
    </HabitsContext.Provider>
  )
}

export function useHabitsContext() {
  const context = useContext(HabitsContext)

  if (!context) {
    throw new Error("Error Contexto de Hábitos.")
  }

  return context
}