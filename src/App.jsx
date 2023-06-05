import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskListComponent from './components/containers/task_list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Task list component */}
    <TaskListComponent/>
    </>
  )
}

export default App
