import TaskItem from "./task.item.jsx";

export default function TaskList({tasks, setTasks, completedTasks, setCompletedTasks}) {
      const passedTasksList = tasks ? tasks : completedTasks
    return (
        <div className='task-list'>
            <ul>
                {passedTasksList && passedTasksList.map((task, index) => (
                    <TaskItem task={task} key={index}/>
                ))}
            </ul>
        </div>
    )
}