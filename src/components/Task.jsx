import React from "react";
import '../styles/Task.css';
import { AiFillCloseCircle } from "react-icons/ai";

function Task(props){


  return(
    <div
    className={props.taskComplete ? 'taskContainerComplete' : 'taskContainer' }>

      <div
        className="taskTitle"
        onClick={() => props.completeTask(props.id)}>
        <span>{props.text}</span>
      </div>

      <div
      className="taskIconContainer">
        <AiFillCloseCircle className="taskIcon"
        onClick={() => props.deleteTask(props.id)}/>
      </div>

    </div>
  );
};

export default Task;