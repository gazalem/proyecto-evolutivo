// import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

function TaskComponenent({ task }) {
    return (
        <div>
            <h3>Nombre: {task.name}</h3>
            <h4>Descripcion: {task.descripcion}</h4>
            <h5>Level: {task.level}</h5>
            <h6>This task is: {task.completed ? "COMPLETED" : "PENDING"}</h6>
        </div>
    );
}

TaskComponenent.propTypes = {
    task: PropTypes.instanceOf(Task),
};

export default TaskComponenent;
