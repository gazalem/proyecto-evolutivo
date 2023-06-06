// import React from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponenent from '../pure/task'

const TaskListComponent = () => {
    const defaultTask = new Task("Example", "Default Description", false, LEVELS.NORMAL)

  return (
    <div>
        <h2>Your Task:</h2>
        {/* TODO: Apply a for/map loop to render a list */}
        <TaskComponenent task={defaultTask}/>
    </div>
  )
}


export default TaskListComponent