import {useState} from "react";

export default function AddTaskForm({setTasks, tasks}) {

    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('Low')
    const [dueDate, setDueDate] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if(title.trim() && dueDate){
            addTask({title, priority, dueDate})
            setTitle("")
            setPriority("Low")
            setDueDate("")
        }
    }

    function addTask(task) {
        setTasks([...tasks, {...task, completed: false, id: Date.now()}])
    }

    return (
        <form action="" className='task-form' onSubmit={handleSubmit}>
            <input
                onChange={(e) => setTitle(e.target.value) }
                type='text'
                value={title}
                placeholder="Task title"
                required/>
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input
                onChange={(e) => setDueDate(e.target.value)}
                type='datetime-local'
                value={dueDate}
                required/>
            <button type="submit" >Add task</button>
        </form>
        )
}