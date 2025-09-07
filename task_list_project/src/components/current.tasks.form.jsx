import TaskList from "./task.list.jsx";

export default function CurrentTaskForm({tasks, setTasks}) {
    return (
        <>
            <TaskList tasks={tasks} setTasks={setTasks}/>
        </>
    )
}