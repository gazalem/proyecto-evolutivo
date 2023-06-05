import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/pure/greeting'
import Greetingf from './components/pure/greetingF'
import TaskListComponent from './components/containers/task_list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Componente propio Greeting.jsx */}
    {/* <Greeting name={"John Connor"}/> */}
    {/* Componente funcional Greetingf.jsx */}
    {/* <Greetingf name={"John Connor"}/> */}
    {/* Task list component */}
    <TaskListComponent/>
    </>
  )
}

export default App
