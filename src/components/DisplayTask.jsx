import React from "react";
import '../styles/DisplayTask.css';
import Task from './Task';
import TaskForm from './taskForm';
import TitleText from './TitleText';


function DisplayTask() {


  return(
    <>

      <TitleText
        classNamee='subtitleH2'
        title='My List' />

      <div className='formContainer'>
        <TaskForm />
      </div>

      <div className='listContainer'>
        <Task
          taskComplete={false}
          text='Hello Friends' />
        <Task
          taskComplete={false}
          text='Hello Friends' />
        <Task
          taskComplete={true}
          text='Hello Friends' />
      </div>
    </>

  )
}

export default DisplayTask;


