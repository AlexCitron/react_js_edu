import TaskList from "./task.list.jsx";

export default function CurrentTaskForm() {
    return (
        <>
            <div className="sort-controls">
                <button className="sort-button">By date</button>
                <button className="sort-button">By Priority</button>
            </div>
            <TaskList />
        </>
    )
}