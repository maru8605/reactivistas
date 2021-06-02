const tasks = [
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
        id: 1,
        text: 'Chau',
        day: 'viernes',
        reminder: false,
    },
]

const Tasks = () => {
    return (
        <>
        {tasks.map((task) => (<h3>{task.text}</h3>))}
            
        </>
    )
}

export default Tasks
