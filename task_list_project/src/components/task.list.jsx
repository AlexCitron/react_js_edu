import TaskItem from "./task.item.jsx";

export default function TaskList(className) {

    return (
        <div className='task-list'>
            <ul className={className}>
                <TaskItem />
            </ul>
        </div>
    )
}