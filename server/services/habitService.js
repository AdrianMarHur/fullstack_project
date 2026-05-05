let habits = []
let records = []

export function getAllHabits() {
  return habits
}

export function addHabit({ name, frequency }) {
  const newHabit = {
    id: crypto.randomUUID(),
    name,
    frequency,
    createdAt: new Date().toISOString(),
    completed: false // ✅ mantenemos de momento
  }

  habits.push(newHabit)
  return newHabit
}

export function addRecord(habitId) {
  const newRecord = {
    id: crypto.randomUUID(),
    habitId,
    date: new Date().toISOString().split("T")[0],
    completed: true,
  }

  records.push(newRecord)
  return newRecord
}

export function getRecordsByHabit(habitId) {
  return records.filter((r) => r.habitId === habitId)
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