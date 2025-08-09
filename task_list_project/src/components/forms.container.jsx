import { useState } from "react";
import AddTaskForm from "./add.tasks.form.jsx";
import CurrentTaskForm from "./current.tasks.form.jsx";
import CompletedTasksForm from "./completed.tasks.form.jsx";
import ButtonCloseOpenForm from "./button.close.form.jsx";
import toggleSection from "../handlers/handle.ButtonCloseOpenClick.js";

export default function FormsContainer({className}) {

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
                    {openSection.addTasksForm && <AddTaskForm />}
                </div>
            )
        case "task-container":
            return(
                <div className='task-container'>
                    <h2>Tasks</h2>
                    <ButtonCloseOpenForm
                        className={`close-button${openSection.tasksForm ? ' open' : ''}` }
                        onClick={() => toggleSection('tasksForm', setOpenSection)}/>
                    {openSection.tasksForm && <CurrentTaskForm />}
                </div>
            )
        case "completed-task-container":
            return(
                <div className='completed-task-container'>
                    <h2>Completed Tasks </h2>
                    <ButtonCloseOpenForm
                        className={`close-button${openSection.completedTasksForm ? ' open' : ''}` }
                        onClick={() => toggleSection('completedTasksForm', setOpenSection)} />
                    {openSection.completedTasksForm && <CompletedTasksForm /> }
                </div>
            )
        default:
            return <></>
    }
}