export default function TaskItem() {
    return (
        <li className="task-item">
            <div className='task-info'>
                <div>Title <strong>Medium</strong></div>
                <div className='task-deadline'>Due: {new Date().toLocaleString()}</div>
            </div>
            <div className='task-buttons'>
                <button className='complete-button'>Complete</button>
                <button className='delete-button'>Delete</button>
            </div>
        </li>
    )
}