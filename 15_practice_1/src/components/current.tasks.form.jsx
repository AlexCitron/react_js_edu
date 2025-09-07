import TaskList from "./TaskList.jsx";

export default function CurrentTaskForm({tasks, setTasks}) {
    return (
        <>
            <TaskList tasks={tasks} setTasks={setTasks}/>
        </>
    )
}