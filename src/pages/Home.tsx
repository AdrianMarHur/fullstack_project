import { useState, useEffect } from "react"
import HabitList from "../components/HabitList"
import HabitForm from "../components/HabitForm"
import { useHabitsContext } from "../context/HabitsContext"

function Home() {
  const {
    habits,
    loading,
    error,
    addHabit,
    toggleHabit,
    deleteHabit,
    completedCount,
    totalCount,
  } = useHabitsContext()

  const [tab, setTab] = useState<"active" | "completed">("active")
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const activeHabits = habits.filter((h) => !h.completed)
  const completedHabits = habits.filter((h) => h.completed)

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500 dark:text-gray-300">
        Cargando hábitos...
      </p>
    )
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">
        {error}
      </p>
    )
  }
  const progress =
    totalCount === 0
      ? 0
      : Math.round((completedCount / totalCount) * 100)

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen transition-colors">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        HabitFlow
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm dark:text-white transition"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
          <span>Progreso</span>
          <span>{progress}%</span>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <HabitForm onAdd={addHabit} />
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setTab("active")}
          className={`px-3 py-1 rounded transition ${
            tab === "active"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 dark:text-white"
          }`}
        >
          Pendientes
        </button>

        <button
          onClick={() => setTab("completed")}
          className={`px-3 py-1 rounded transition ${
            tab === "completed"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 dark:text-white"
          }`}
        >
          Completados
        </button>
      </div>
      <HabitList
        habits={tab === "active" ? activeHabits : completedHabits}
        onComplete={toggleHabit}
        onDelete={deleteHabit}
      />
      <footer className="mt-10 mb-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} HabitFlow · Build better habits every day
      </footer>

    </div>
  )
}
export default Home