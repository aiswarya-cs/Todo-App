import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import {message } from 'antd';

const List_todo = ({tasklist,index,deleteTask, editTask, updateTask, isEditing}) => {
  const [updatedText, setUpdatedText] = useState(tasklist.list);
  const [messageApi, contextHolder] = message.useMessage();
  const openMessage = () => {
    message.loading({
     content: 'Loading...',
     key: 'updatable',
     className:"loading-spin" 
    });
    setTimeout(() => {
      message.success({
         content: 'Deleted',
          key: 'updatable',
         duration: 2 });
    }, 1000);
  };
  const handleUpdate = () => {
    updateTask(index, updatedText);
    messageApi.open({
      type: 'success',
      content: 'Sucessfully Updated',
    });
  };

  return (
    <>

    <div className='list-items'>
    {contextHolder}
    {isEditing ? (
          <div>
            <input className='todo-inputt'
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}/>
            <span onClick={handleUpdate}><CheckOutlined className='icons-check' /></span>
          </div>
           
        ) : (
          <>
            {tasklist.list}
            <span onClick={() => { deleteTask(index); openMessage(); }} className='icons'><DeleteOutlined /></span>
            <span onClick={() => editTask(index)} className='icons-edit'><EditOutlined /></span>
          </>
        )}
    </div>
    {/* {Message && <p className='message-alert'>{Message}</p>}; */}
    </>
  )
}

export default List_todo