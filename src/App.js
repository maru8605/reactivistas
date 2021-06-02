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
      <AddTask />
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
