import './App.css'
// import Greeting from './components/pure/greeting'
// import Greetingf from './components/pure/greetingF'
import TaskListComponent from './components/containers/task_list'
import ContactListComponent from './components/containers/contact_list'

function App() {
  return (
    <>
    {/* Componente propio Greeting.jsx */}
    {/* <Greeting name={"John Connor"}/> */}
    {/* Componente funcional Greetingf.jsx */}
    {/* <Greetingf name={"John Connor"}/> */}
    {/* Task list component */}
    <TaskListComponent/>
    {/* Contact list component */}
    <ContactListComponent/>
    </>
  )
}

export default App
