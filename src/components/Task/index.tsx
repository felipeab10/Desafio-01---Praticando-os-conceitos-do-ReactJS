import Trash from '/src/assets/Trash.png';
import './task.css';

interface TaskProps {
  task: {
    id: string;
    title: string;
    isDone: boolean;
  }
  onHandleDeleteTask: (value: string) => void;
  onHandleTaskToDone: (value: string) => void;
}

export function Task({ task, onHandleDeleteTask, onHandleTaskToDone }: TaskProps) {
  
  return (
    <div className="main-task">
      <div>
        <input
          id='task-radio'
          type="checkbox"
          value={task.id}
          onChange={()=>{onHandleTaskToDone(task.id)}}
        />

          <label htmlFor="task-radio" ><span></span></label>
        <span style={{textDecoration:task.isDone ? 'line-through' : '', color:task.isDone ? 'var(--gray-300) ' : ''}}>{task.title}</span>
      </div>
      <button onClick={() => onHandleDeleteTask(task.id)}>
        <img src={Trash} />
      </button>
    </div>
  )
}