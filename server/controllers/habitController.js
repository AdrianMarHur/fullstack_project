import {
  getAllHabits,
  addHabit,
  toggleHabit,
  removeHabit,
  addRecord,
  getRecordsByHabit,
} from "../services/habitService.js"

export function getHabits(req, res) {
  try {
    res.status(200).json(getAllHabits())
  } catch {
    res.status(500).json({ error: "Error interno del servidor" })
  }
}
export function createHabit(req, res) {
  try {
    const { name, frequency } = req.body

    if (!name || !frequency) {
      return res.status(400).json({ error: "Datos inválidos" })
    }

    const habit = addHabit({ name, frequency })
    res.status(201).json(habit)
  } catch {
    res.status(500).json({ error: "Error interno del servidor" })
  }
}

export function updateHabit(req, res) {
  try {
    const { id } = req.params
    const updated = toggleHabit(id)

    if (!updated) {
      return res.status(404).json({ error: "Hábito no encontrado" })
    }

    res.status(200).json(updated)
  } catch {
    res.status(500).json({ error: "Error interno del servidor" })
  }
}
export function deleteHabit(req, res) {
  try {
    const { id } = req.params
    const removed = removeHabit(id)

    if (!removed) {
      return res.status(404).json({ error: "Hábito no encontrado" })
    }

    res.status(200).json({ message: "Eliminado correctamente" })
  } catch {
    res.status(500).json({ error: "Error interno del servidor" })
  }
}
export function getHabitRecords(req, res) {
  try {
    const { id } = req.params
    const records = getRecordsByHabit(id)
    res.status(200).json(records)
  } catch {
    res.status(500).json({ error: "Error interno del servidor" })
  }
}
export function createHabitRecord(req, res) {
  try {
    const { id } = req.params
    const record = addRecord(id)
    res.status(201).json(record)
  } catch {
    res.status(500).json({ error: "Error interno del servidor" })
  }
}