export default function handleSortButtonClick(type, sortType, sortOrder, setTasks, setSortType, setSortOrder, tasks) {
    if (sortType === type) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
        setSortType(type)
        setSortOrder('asc')
    }
    setTasks((prev) => [...prev.filter((task) => task.completed), ...sortTasks(tasks, sortType, sortOrder)])
}


function sortTasks(tasks, sortType, sortOrder) {
    return tasks.slice().sort((a, b) => {
            if (sortType === 'priority') {
                const priorityOrder = {High: 1, Medium: 2, Low: 3};
                return sortOrder === 'asc'
                    ? priorityOrder[a.priority] - priorityOrder[b.priority]
                    : priorityOrder[b.priority] - priorityOrder[a.priority]
            } else {
                return sortOrder === 'asc'
                ? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
                    : new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
            }

        })
}


