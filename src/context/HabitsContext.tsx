import { createContext, useContext } from "react"
import type { Habit } from "../types/habit"
import { useHabits } from "../hooks/useHabits"

interface HabitsContextType {
  habits: Habit[]
  addHabit: (habit: Habit) => void
  toggleHabit: (id: string) => void
  completedCount: number
  totalCount: number
}

const HabitsContext = createContext<HabitsContextType | undefined>(undefined)

export function HabitsProvider({ children }: { children: React.ReactNode }) {
  const habitsData = useHabits()

  return (
    <HabitsContext.Provider value={habitsData}>
      {children}
    </HabitsContext.Provider>
  )
}

export function useHabitsContext() {
  const context = useContext(HabitsContext)

  if (!context) {
    throw new Error("useHabitsContext must be used within a HabitsProvider")
  }

  return context
}