import AddTaskForm from "./add.tasks.form.jsx";
import ButtonCloseOpenForm from "./button.close.form.jsx";
import handleToggleSection from "../handlers/handleToggleSection.js";
import TaskList from "./task.list.jsx";
import handleSortButtonClick from "../handlers/handleSortButtonsClick.js";


export default function FormsContainer(props) {
    const {tasks, className, setTasks, setOpenSection, openSection,  sortType, setSortType, sortOrder, setSortOrder, time }  = props

    switch (className) {
        case "task-add-container":
            return (
                <div className='task-container'>
                    <h1>Add Task to list</h1>
                    <ButtonCloseOpenForm
                        className={`close-button${openSection.addTasksForm ? ' open' : ''}` }
                        onClick={() => handleToggleSection('addTasksForm', setOpenSection)} />
                    {openSection.addTasksForm && <AddTaskForm tasks={tasks} setTasks={setTasks}/>}
                </div>
            )
        case "task-container":
            return(
                <div className='task-container'>
                    <h2>Tasks</h2>
                    <ButtonCloseOpenForm
                        className={`close-button${openSection.tasksForm ? ' open' : ''}` }
                        onClick={() => handleToggleSection('tasksForm', setOpenSection)}/>
                    <div className="sort-controls">
                        <button className={`sort-button ${sortType === 'date' ? "active" : ""}`} onClick={() => handleSortButtonClick("date", sortType, sortOrder, setTasks, setSortType, setSortOrder, tasks)}>By date {sortType === 'date' && sortOrder === 'asc' ? "\u2191" : "\u2193"}</button>
                        <button className={`sort-button ${sortType === 'priority' ? "active" : ""}`} onClick={() => handleSortButtonClick('priority', sortType, sortOrder, setTasks, setSortType, setSortOrder, tasks)}>By Priority {sortType === 'priority' && sortOrder === 'asc' ? "\u2191" : "\u2193"}</button>
                    </div>
                    {openSection.tasksForm && <TaskList time={time} tasks={tasks} setTasks={setTasks}/>}
                </div>
            )
        case "completed-task-container":
            return(
                <div className='completed-task-container'>
                    <h2>Completed Tasks </h2>
                    <ButtonCloseOpenForm
                        className={`close-button${openSection.completedTasksForm ? ' open' : ''}` }
                        onClick={() => handleToggleSection('completedTasksForm', setOpenSection)} />
                    {openSection.completedTasksForm && <TaskList time={time} tasks={tasks} setTasks={setTasks}/> }
                </div>
            )
        default:
            return <></>
    }
}