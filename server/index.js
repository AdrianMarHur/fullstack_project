import express from "express"
import cors from "cors"
import habitRoutes from "./routes/habitRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API de HabitFlow funcionando correctamente")
})

app.use("/api", habitRoutes)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})