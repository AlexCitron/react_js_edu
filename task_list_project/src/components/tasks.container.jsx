import TaskItem from "./task.item.jsx";

export default function TasksContainer() {
    return(
        <div className='task-container'>
            <h2>Tasks</h2>
            <button className='close-button'>+</button>
            <div className="sort-controls">
                <button className="sort-button">By date</button>
                <button className="sort-button">By Priority</button>
            </div>
            <TaskList />
        </div>
    )
}

function TaskList () {
    return (
        <ul className="task-list">
            <TaskItem />
        </ul>
    )
}

