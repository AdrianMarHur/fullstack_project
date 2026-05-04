import HabitList from "../components/HabitList"
import HabitForm from "../components/HabitForm"
import { useHabitsContext } from "../context/HabitsContext"

function Home() {
  const {
    habits,
    addHabit,
    toggleHabit,
    completedCount,
    totalCount,
  } = useHabitsContext()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">HabitFlow</h1>

      <p className="mb-4 text-gray-700">
        Completados: {completedCount} / {totalCount}
      </p>

      <HabitForm onAdd={addHabit} />

      <HabitList
        habits={habits}
        onComplete={toggleHabit}
      />
    </div>
  )
}

export default Home
