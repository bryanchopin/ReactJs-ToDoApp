import React , {useState} from "react";
import '../styles/TaskForm.css';
import {v4 as uuidv4} from 'uuid';

function TaskForm(props) {

    const [task, setTask] = useState('');

    const onTaskChange = (e) => {
        setTask(e.target.value);
    }

    const onTaskSend = (e) => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: task,
            taskComplete: false
        }
        props.onSubmit(newTask);
    }


  return (
      <form
        className="taskForm"
        onSubmit={onTaskSend}>
        <input
          className="taskInput"
          type="text"
          placeholder="Set a task"
          name="dataForm"
          onChange={onTaskChange} />

        <button className="taskButton">
            Add Task
        </button>
      </form>
  );
}

export default TaskForm;