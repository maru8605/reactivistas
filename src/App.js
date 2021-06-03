import Header from './component/Header'
import './App.css';
import Tasks from './component/Tasks';
import AddTask from './component/AddTask';
import {useState} from 'react'; 

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'hola',
        day: 'hoy',
        reminder: true,
    },
    {
        id: 2,
        text: 'hola de nuevo',
        day: 'mañana ',
        reminder: true,
    },
    {
        id: 3, 
        text: 'Chau',
        day: 'viernes',
        reminder: false,
    }
   ])

  // Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  
  const newTask = {id, ...task };
  setTasks([...tasks, newTask])
}


   const deleteTask = (id) =>{
      setTasks(tasks.filter((task)=> task.id !== id))
   }

//Toggle reminder 
const toggleReminder = (id) =>{
    setTasks(
       tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder}
       : task
       )
    ) 
}

  return (
    <div className="container">
      <Header  />
      <AddTask  onAdd={addTask}/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks}
       onDelete={deleteTask}
       onToggle={toggleReminder}/>
      ):(
        'No hay tareas pendientes')}
    </div>
  );
}


export default App;
