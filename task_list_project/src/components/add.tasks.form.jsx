export default function AddTaskForm() {
    return (
        <form action="" className='task-form'>
            <input type='text' value={""} placeholder="Task title" required/>
            <select value={""}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input type='datetime-local' required/>
            <button type="submit">Add task</button>
        </form>
        )
}