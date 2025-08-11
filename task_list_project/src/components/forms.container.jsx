import AddTaskForm from "./add.tasks.form.jsx";
import ButtonCloseOpenForm from "./button.close.form.jsx";
import handleToggleSection from "../handlers/handleToggleSection.js";
import TaskList from "./task.list.jsx";


export default function FormsContainer({className, tasks, setTasks, openSection, setOpenSection}) {
    switch (className) {
        case "task-add-container":
            return (
                <div className='task-add-container'>
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
                        <button className="sort-button" >By date</button>
                        <button className="sort-button" >By Priority</button>
                    </div>
                    {openSection.tasksForm && <TaskList tasks={tasks.filter((task) => task.completed === false)} setTasks={setTasks}/>}
                </div>
            )
        case "completed-task-container":
            return(
                <div className='completed-task-container'>
                    <h2>Completed Tasks </h2>
                    <ButtonCloseOpenForm
                        className={`close-button${openSection.completedTasksForm ? ' open' : ''}` }
                        onClick={() => handleToggleSection('completedTasksForm', setOpenSection)} />
                    {openSection.completedTasksForm && <TaskList tasks={tasks.filter((task) => task.completed === true)} setTasks={setTasks}/> }
                </div>
            )
        default:
            return <></>
    }
}