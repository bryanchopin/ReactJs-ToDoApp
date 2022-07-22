import React from "react";
import '../styles/TaskForm.css';

function TaskForm(props) {



  return (
      <form className="taskForm">
        <input
          type="text"
          placeholder="Set a task"
          className="taskInput"
        /> 
        <button className="taskButton">
            Add Task
        </button>
      </form>
  );
}

export default TaskForm;