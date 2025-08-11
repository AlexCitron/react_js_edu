export default function handleDeleteTask(task, setTasks) {
    const currentTask = task
    setTasks((prev) => (prev.filter((task) => task.id !== currentTask.id)))
};