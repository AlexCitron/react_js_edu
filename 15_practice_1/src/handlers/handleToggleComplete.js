export default function handleToggleComplete(task, setTasks) {
    const currentTask = task
    setTasks((prevTasks) => ([...prevTasks.filter((task) => task.id !== currentTask.id), {...currentTask, completed: !currentTask.completed }]))
}