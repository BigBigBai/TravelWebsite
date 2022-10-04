import { useState } from "react"

const AddTask = ({onADD01}) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
      e.preventDefault()
      if(!text) {
          alert('Please add a task')
          return
      }
      onADD01({text, day, reminder})

      setText('')
      setDay('')
      setReminder(false)
  }

  const getTime = () =>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
  }

  return (
    <form className='add-form'
    onSubmit={onSubmit}
    >
        <div className='form-control'>
            {/* <label>Task</label> */}
            <label>Comment</label>
            <input type='text' 
            // placeholder='Add Task'
            placeholder='Add Comment'
            value={text} 
            onChange={
                (event1) =>{
                // setText(event1.target.value)
                setText(event1.target.value)
                setDay(getTime())
                }
             }
             />
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add day & time'
            value={day} 
            // value = {getTime()}
            onChange={
                (e) =>
                setDay(e.target.value)
             }
            // setDay(value);
         
            // setDay(e.target.value)
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' 
            checked={reminder}
            value={reminder} 
            onChange={
                (e) =>
                setReminder(e.currentTarget.checked)
             }
            />
        </div>

        <input type='submit' value='Save Task' 
        className="btn btn-block"/>
    </form>
  )
}

export default AddTask