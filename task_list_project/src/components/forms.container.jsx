import { useState } from "react";
import AddTaskForm from "./add.tasks.form.jsx";
import ButtonCloseOpenForm from "./button.close.form.jsx";
import toggleSection from "../handlers/toggleSection.js";
import TaskList from "./task.list.jsx";


export default function FormsContainer({className, tasks, setTasks, completedTasks, setCompletedTasks}) {

    const [openSection, setOpenSection] = useState({
        addTasksForm: false,
        tasksForm: true,
        completedTasksForm: true,
    });

    switch (className) {
        case "task-add-container":
            return (
                <div className='task-add-container'>
                    <h1>Add Task to list</h1>
                    <ButtonCloseOpenForm
                        className={`close-button${openSection.addTasksForm ? ' open' : ''}` }
                        onClick={() => toggleSection('addTasksForm', setOpenSection)} />
                    {openSection.addTasksForm && <AddTaskForm tasks={tasks} setTasks={setTasks}/>}
                </div>
            )
        case "task-container":
            return(
                <div className='task-container'>
                    <h2>Tasks</h2>
                    <ButtonCloseOpenForm
                        className={`close-button${openSection.tasksForm ? ' open' : ''}` }
                        onClick={() => toggleSection('tasksForm', setOpenSection)}/>
                    <div className="sort-controls">
                        <button className="sort-button">By date</button>
                        <button className="sort-button">By Priority</button>
                    </div>
                    {openSection.tasksForm && <TaskList tasks={tasks} setTasks={setTasks}/>}
                </div>
            )
        case "completed-task-container":
            return(
                <div className='completed-task-container'>
                    <h2>Completed Tasks </h2>
                    <ButtonCloseOpenForm
                        className={`close-button${openSection.completedTasksForm ? ' open' : ''}` }
                        onClick={() => toggleSection('completedTasksForm', setOpenSection)} />
                    {openSection.completedTasksForm && <TaskList completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/> }
                </div>
            )
        default:
            return <></>
    }
}