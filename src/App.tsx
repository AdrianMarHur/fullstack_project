import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home HabitFlow</h1>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default App