import TaskItem from "./task.item.jsx";
import handleToggleComplete from "../handlers/handleToggleComplete.js";
import handleDeleteTask from "../handlers/handleDeleteTask.js";

export default function TaskList({time, tasks, setTasks}) {

    function overdue(task) {
        if(new Date(task.dueDate) < new Date(time)){
            return 'overdue'
        }
        return ""
    }
    // console.log(document.documentElement)
    return (
        <div className='task-list'>
            <ul>
                {tasks && tasks.map((task, index) => (
                    <li key={index} className={`task-item ${task.priority.toLowerCase()} ${overdue(task)}`.trim()}>
                        <TaskItem task={task} key={index}/>
                        <div className='task-buttons'>
                            <button className='complete-button' onClick={() => handleToggleComplete(task, setTasks)}>{task.completed ? 'Return' : 'Complete'}</button>
                            <button className='delete-button' onClick={() => handleDeleteTask(task, setTasks)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}