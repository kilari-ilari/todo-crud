import { useState } from 'react';

// omat komponentit
import CustomForm from './components/CustomForm';
import EditForm from './components/EditForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [PreviousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    // console.log(task)
    setTasks(prevState => [...prevState, task])
  }

// delete
  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

// update
const toggleTask = (id) => {
  setTasks(prevState => prevState.map(t => (
    t.id === id
      ? { ...t, checked: !t.checked }
      : t   
    )))
}

const updateTask = (task) => {
  setTasks(prevState => prevState.map(t => (
    t.id === task.id
      ? { ...t, name: task.name }
      : t   
    )))
    closeEditMode();
}

const closeEditMode = () => {
  setIsEditing(false);
  PreviousFocusEl.focus();
}

const enterEditMode = (task) => {
  setEditedTask(task);
  setIsEditing(true);
  // kohdentaa edelliseen/käsiteltyyn elementtiin
  setPreviousFocusEl(document.activeElement);
}

  return (
    <div className="container">
      <header>
        <h1>My Todo List</h1>
      </header>
      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}  
          />
        )
      }
      <CustomForm addTask={addTask}/>
      {tasks && (
        <TaskList 
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
          />
      )}
    </div>
  )
}

export default App;