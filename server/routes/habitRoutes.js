import express from "express"
import {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
  getHabitRecords,
  createHabitRecord,
} from "../controllers/habitController.js"

const router = express.Router()

// hábitos
router.get("/habits", getHabits)
router.post("/habits", createHabit)
router.patch("/habits/:id", updateHabit)
router.delete("/habits/:id", deleteHabit)
router.get("/habits/:id/records", getHabitRecords)
router.post("/habits/:id/records", createHabitRecord)

export default router