import { useState } from "react"
import Todos from "./components/Todos"

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const mode = darkMode ? "bg-dark text-white" : "bg-light";

  return (
    <div className="container my-4">
      <h1 className="text-center">ToDos App</h1>
      <Todos darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default App
