let habits = []

export function getAllHabits() {
  return habits
}

export function addHabit({ name, frequency }) {
  const newHabit = {
    id: crypto.randomUUID(),
    name,
    frequency,
    createdAt: new Date().toISOString(),
    completed: false,
  }

  habits.push(newHabit)
  return newHabit
}

export function toggleHabit(id) {
  let updatedHabit = null

  habits = habits.map((habit) => {
    if (habit.id === id) {
      updatedHabit = {
        ...habit,
        completed: !habit.completed,
      }
      return updatedHabit
    }
    return habit
  })

  return updatedHabit
}

export function removeHabit(id) {
  const initialLength = habits.length

  habits = habits.filter((h) => h.id !== id)

  return habits.length < initialLength
}