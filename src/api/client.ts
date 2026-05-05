import type { Habit } from "../types/habit"

const API_URL = "http://localhost:3000/api"

export async function fetchHabits(): Promise<Habit[]> {
  const response = await fetch(`${API_URL}/habits`)

  if (!response.ok) {
    throw new Error("Error al obtener hábitos")
  }

  return response.json()
}

export async function createHabitApi(
  habit: Omit<Habit, "id" | "createdAt" | "completed">
): Promise<Habit> {
  const response = await fetch(`${API_URL}/habits`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(habit),
  })

  if (!response.ok) {
    throw new Error("Error al crear hábito")
  }

  return response.json()
}

export async function toggleHabitApi(id: string): Promise<Habit> {
  const response = await fetch(`${API_URL}/habits/${id}`, {
    method: "PATCH",
  })

  if (!response.ok) {
    throw new Error("Error al actualizar hábito")
  }

  return response.json()
}

export async function deleteHabitApi(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/habits/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Error al eliminar hábito")
  }
}