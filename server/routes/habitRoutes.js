import express from "express"
import {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
} from "../controllers/habitController.js"

const router = express.Router()

router.get("/habits", getHabits)
router.post("/habits", createHabit)
router.patch("/habits/:id", updateHabit)
router.delete("/habits/:id", deleteHabit)

export default router