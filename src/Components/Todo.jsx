import React, { useState } from 'react'
import "./Todo.css"
import Addtodo from './Addtodo'
import List_todo from './List_todo'

const Todo = () => {
    
  const [Task, setTask] = useState([ ]);
  const [editIndex, setEditIndex] = useState(null);
  const addTask=(list)=>{
    const newTask=[...Task,{list}];
    setTask(newTask)
  }

  const deleteTask=(index)=>{
    const newTask=[...Task];
    newTask.splice(index,1);
    setTask(newTask)
  }
  const editTask = (index) => {
    setEditIndex(index);
  };

  const updateTask = (index, updatedText) => {
    const newTask = [...Task];
    newTask[index].list = updatedText;
    setTask(newTask);
    setEditIndex(null); 
  };
    
  return (
    <>
     <div className="container">
        <div className='todo-outerbox'>
            <h1 className='header'>TODO APP</h1>
            <h2 className='header2'>Hey, What about Today</h2>
            <div className='add-task'>
                <Addtodo addTask={addTask}/>
            </div>
        </div>
        <div>
            {Task.map((tasklist,index)=>{
                return(
                    
                    <List_todo tasklist={tasklist} deleteTask={deleteTask} key={index} index={index} editTask={editTask}
                    updateTask={updateTask}
                    isEditing={index === editIndex}/>
                )
            })}
            
                
        </div>
     </div>
        
    </>
  )
}

export default Todo