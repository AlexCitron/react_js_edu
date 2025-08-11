export default function TaskItem({task}) {
    const {title, priority, dueDate} = task;
    return (
        <div className='task-info'>
            <div>{title} <strong>{priority}</strong></div>
            <div className={`task-deadline`}>Due: {(new Date(dueDate)).toLocaleString()}</div>
        </div>
    )
}