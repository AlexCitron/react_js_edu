export default function handleSubmitForm(event, setTitle, setPriority, setDueDate, setTasks, tasks) {
    event.preventDefault();
    let [title, priority, dueDate] = event.target;
    [title, priority, dueDate] = [title.value, priority.value, dueDate.value];
    if(title.trim() && dueDate){
        addTask({title, priority, dueDate}, setTasks, tasks)
        setTitle("")
        setPriority("Low")
        setDueDate("")
    }
}

function addTask(task, setTasks, tasks) {
    setTasks([...tasks, {...task, completed: false, id: Date.now()}])
}