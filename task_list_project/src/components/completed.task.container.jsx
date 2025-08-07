import TaskItem from "./task.item.jsx";

export default function CompletedTaskContainer() {
    return(
        <div className='completed-task-container'>
            <h2>Completed Tasks </h2>
            <button className='close-button'>+</button>
            <CompletedTaskList />
        </div>
    )
}

function CompletedTaskList () {
    return (
        <ul className="task-list">
            <TaskItem />
        </ul>
    )
}