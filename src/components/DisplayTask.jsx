import React , {useState} from "react";
import '../styles/DisplayTask.css';
import Task from './Task';
import TaskForm from './taskForm';
import TitleText from './TitleText';


function DisplayTask() {

  const [moreTask, setMoreTask] = useState([]);

  const getDataTask = task =>{
    console.log(task);
    if(task.text.trim()){
      task.text = task.text.trim();
      const updatedTask =  [task, ...moreTask];
      setMoreTask(updatedTask);
    }
  }

  const deleteDataTask = id =>{
    const updatedTask = moreTask.filter(task => task.id !== id);
    setMoreTask(updatedTask);
  }

  const completeTask = id =>{
    const updatedTask = moreTask.map(task => {
      if(task.id === id){
        task.complete = !task.complete;
      }
      return task;
    }
);
    setMoreTask(updatedTask);
  }

  return(
    <>

      <TitleText
        classNamee='subtitleH2'
        title='My List' />

      <div className='formContainer'>
        <TaskForm onSubmit = {getDataTask} />
      </div>

      <div className='listContainer'>
        {
          moreTask.map(task =>
            <Task
              key= {task.id}
              id= {task.id}
              text= {task.text}
              taskComplete= {task.complete}
              completeTask= {completeTask}
              deleteTask= {deleteDataTask}
               />
          )
        }

      </div>
    </>

  )
}

export default DisplayTask;


