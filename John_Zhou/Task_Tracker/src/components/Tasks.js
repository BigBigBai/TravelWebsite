// import React from 'react'
// const tasks = [
//   {
//     "id": 1,
//     "text": "Doctors Appointment",
//     "day": "Feb 5th at 2:30pm",
//     "reminder": true
//   },
//   {
//     "id": 2,
//     "text": "Meeting at School",
//     "day": "Feb 6th at 1:30pm",
//     "reminder": true
//   }
// ]

// import {useState} from 'react'
import Task from "./Task"
const Tasks = ({tasks, onDelete, onToggleA}) => {



  return (
    <>
       {/* {tasks.map((element) => (
       <h3 key={element.id}>{element.text}</h3>
       ))}  */}
       {tasks.map((taski, index) => (
      <Task 
      // key={taski.id} 
      key = {index}
      taskt={taski} 
      onDelete={onDelete} 
      onToggleT = {onToggleA}
      />
       ))} 
    </>
  )
}

export default Tasks