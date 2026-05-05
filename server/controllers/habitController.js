import {
  getAllHabits,
  addHabit,
  toggleHabit,
  removeHabit,
} from "../services/habitService.js"

export function getHabits(req, res) {
  try {
    const habits = getAllHabits()
    res.status(200).json(habits)
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
    })
  }
}

export function createHabit(req, res) {
  try {
    const { name, frequency } = req.body

    if (!name || !frequency) {
      return res.status(400).json({
        error: "Datos inválidos",
      })
    }

    const newHabit = addHabit({ name, frequency })

    res.status(201).json(newHabit)
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
    })
  }
}

export function updateHabit(req, res) {
  try {
    const { id } = req.params

    const updatedHabit = toggleHabit(id)

    if (!updatedHabit) {
      return res.status(404).json({
        error: "Hábito no encontrado",
      })
    }

    res.status(200).json(updatedHabit)
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
    })
  }
}

export function deleteHabit(req, res) {
  try {
    const { id } = req.params

    const removed = removeHabit(id)

    if (!removed) {
      return res.status(404).json({
        error: "Hábito no encontrado",
      })
    }

    res.status(200).json({
      message: "Eliminado correctamente",
    })
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
    })
  }
}