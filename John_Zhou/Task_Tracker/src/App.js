// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import {useState, useEffect} from 'react'
const App = () => {

  const [showAddTask, setShowAddTask] = useState
  (true)
  // console.log('showAddTask = ' + showAddTask)
  // console.log('setShowAddTask = ' + setShowAddTask)
  const [tasks1, setTasks] = useState([
    // {
    //   "id": 1,
    //   "text": "Doctors Appointment",
    //   "day": "Feb 5th at 2:30pm",
    //   "reminder": true
    // },
    // {
    //   "id": 2,
    //   "text": "Meeting at School",
    //   "day": "Feb 6th at 1:30pm",
    //   "reminder": true
    // }
  ])

  useEffect(() => {
    const getTasks1 = async () => {
      const tasksFromServer = await fetchTasks1()
      setTasks(tasksFromServer)
    }
    getTasks1()
  }, [])

  const fetchTasks1 = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  

  // Add Task
  const addTask1 = (taskat) => {
    // console.log(taskat)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...taskat}
    // console.log('taskat')
    // console.log(taskat)
    // console.log('taskat')
    // console.log(taskat)
    setTasks([...tasks1, newTask])
  }


  // Delete Task
  const deleteTask1 = (id) => {
    // console.log('delete',id)
    setTasks(
      tasks1.filter(
        (task) => task.id !== id
      )
    )
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(
      tasks1.map(
        (taskii)=> //{
          taskii.id === id ?
          {...taskii, reminder: !taskii.reminder}
          : taskii
        // } 
    ))
  }


  const name = 'Brad'
  const x = true
  return (
    <div className="container">
      {/* <Header title='tt'/> */}
      {/* <Header title={1}/> */}
      <Header 
      // title='Task Tracker'
      title='Comment Box'
      onAdd2={() => setShowAddTask
      (!showAddTask) }
      showAdd={showAddTask}
      />

      { showAddTask &&
      <AddTask onADD01={addTask1}/>
      }
      {/* if showAddTask === true: 
          execute <AddTask onADD01={addTask1}/> */}

      {tasks1.length > 0 ?
        <Tasks tasks = {tasks1} onDelete={deleteTask1}
        onToggleA={toggleReminder}/>
        : 'No tasks to show'
      }





      {/* <h1>Hello from react</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {1+1}</h2>
      <h2>Hello {x ? 'yes' : 'no'}</h2>
      <h2>Hello {x}</h2> */}
    </div>
  );
}

export default App;
