import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { AddTask } from './components/AddTask';
import { Task } from './components/Task';
import { v4 as uuidv4 } from 'uuid';
import { WithOutTasks } from './components/WithOutTasks';

interface Tasks {
  id: string;
  title: string;
  isDone: boolean;
}


function App() {
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const onSetDescription = (value: string) => {
    setDescription(value);
  }

  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();

    if (description.length) {
      setTasks([...tasks, { id: uuidv4(), isDone: false, title: description }]);
    }
  }

  const handleTaskToDone = (taskToDone: string) => {
    const updateTask = tasks.map(task => {
      if (task.id === taskToDone) {
        return {
          ...task,
          isDone: !task.isDone
        }
      }
      return task;
    });
    setTasks(updateTask);
    
  }

  const handleDeleteTask = (deleteTask: string) => {
    const newTaskList = tasks?.filter(task => task.id !== deleteTask)
    setTasks(newTaskList);
  }

  const totalTaskDone = tasks?.reduce((acc, task) => {
    if (task.isDone) {
      return acc += 1;
    }
    return acc;

  }, 0);

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleAddTask}>
        <AddTask
          description={description}
          onSetDescription={onSetDescription}
        />
      </form>

      <div className='main'>
        <div className='score'>
          <div className="score-task-created">
            <span style={{ color: 'var(--blue)' }}>Tarefas criadas </span>
            <div>
              {tasks?.length}
            </div>
          </div>
          <div className='score-task-finished'>
            <span style={{ color: 'var(--purple)' }}>Concluídas</span>
            <div>
              {`${totalTaskDone} de ${tasks?.length}`}
            </div>
          </div>
        </div>
        <div className="divider" />
        {!tasks?.length ? (
          <WithOutTasks />
        ) : (
          <div className="app-tasks">
            {tasks?.map(task => (
              <Task
                key={task.id}
                task={task}
                onHandleDeleteTask={handleDeleteTask}
                onHandleTaskToDone={handleTaskToDone}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
