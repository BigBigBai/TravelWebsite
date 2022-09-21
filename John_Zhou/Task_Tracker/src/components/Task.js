import {FaTimes} from 'react-icons/fa'
// for the X icon, means delete

const Task = ({taskt, onDelete, onToggleT}) => {
  return (
    <div className={
      `task ${taskt.reminder ?
     'reminder' : 
     'NO_reminder'}`
     } onDoubleClick={() => onToggleT(taskt.id)}>
        <h3>{taskt.text} 
            <FaTimes style={{color: 'red', cursor:'pointer'}}
                // onClick={onDelete}
                onClick={() => onDelete(taskt.id)}
            />
        </h3>
        <p>{taskt.day}</p>
    </div>
  )
}

export default Task