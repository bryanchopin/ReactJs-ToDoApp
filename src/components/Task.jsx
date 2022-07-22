import React from "react";
import '../styles/Task.css';
import { AiFillCloseCircle } from "react-icons/ai";

function Task(props){
  return(
    <div className={props.taskComplete ? 'taskContainer taskContainerComplete' : 'taskContainer' }>
      <div className="taskTitle">
        <span>{props.text}</span>
      </div>
      <div className="taskIconContainer">
        <AiFillCloseCircle className="taskIcon" />
      </div>
    </div>
  );
};

export default Task;