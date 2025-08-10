export default function TaskItem({task}) {
    const {title, priority, dueDate} = task;
    return (
        <li className={`task-item ${priority.toLowerCase()}`}>
            <div className='task-info'>
                <div>{title} <strong>{priority}</strong></div>
                <div className={`task-deadline`}>Due: {dueDate}</div>
            </div>
            <div className='task-buttons'>
                <button className='complete-button'>Complete</button>
                <button className='delete-button'>Delete</button>
            </div>
        </li>
    )
}