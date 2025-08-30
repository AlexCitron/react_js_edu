import  handleSubmitForm from "../handlers/handleSubmitForm.js";
import {useMyAppContext} from "../AppContext.jsx";

export default function AddTasksForm() {
    const {setTasks, tasks, title, setTitle, priority, setPriority, dueDate, setDueDate} = useMyAppContext()

    return (
        <form action="" className='task-form' onSubmit={(e) => handleSubmitForm(e, setTitle, setPriority, setDueDate, setTasks, tasks)}>
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