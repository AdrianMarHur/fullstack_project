export interface Habit {
  id: string
  name: string
  frequency: "daily" | "weekly"
  category?: string
  color?: string
  createdAt: string
  completed?: boolean
}
