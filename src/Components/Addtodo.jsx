import React, { useState } from 'react'
import { PlusOutlined } from "@ant-design/icons"

const Addtodo = ({addTask}) => {
  
  const [Value, setValue] = useState("");
  const [Message, setMessage] = useState("")
  const addItems=()=>{
    addTask(Value);
    setValue("");
    setMessage("List Added!");
    setTimeout(()=>setMessage(""),1000)
  }
  
  return (
    <>
    <div className='container-fluid'>
    <ul>
        <input type="text" name='' placeholder='Add a new list' className='todo-input' value={Value} onChange={(e)=>{setValue(e.target.value)}} />
        <span onClick={addItems}><PlusOutlined className='plus-btn'/></span>
        </ul>
      {Message && <p className='message-alert'>{Message}</p>}
    </div>
        
    </>
  )
}

export default Addtodo