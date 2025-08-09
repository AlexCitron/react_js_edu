import { useState } from "react";
import AddTaskForm from "./add.tasks.form.jsx";
import CurrentTaskForm from "./current.tasks.form.jsx";
import CompletedTasksForm from "./completed.tasks.form.jsx";
import ButtonCloseOpenForm from "./button.close.form.jsx";
import handleButtonCloseOpenClick from "../handlers/handle.ButtonCloseOpenClick.js";

export default function FormsContainer({className}) {
    const [buttonName, setButtonName] = useState(null);
    switch (className) {
        case "task-add-container":
            return (
                <div className='task-add-container'>
                    <h1>Task List with Priority</h1>
                    <ButtonCloseOpenForm
                        buttonName={buttonName}
                        onClick= {() => handleButtonCloseOpenClick(buttonName, setButtonName, document.getElementsByClassName('task-add-container'))} />
                    {buttonName && <AddTaskForm />}
                </div>
            )
        case "task-container":
            return(
                <div className='task-container'>
                    <h2>Tasks</h2>
                    <ButtonCloseOpenForm
                        buttonName={buttonName}
                        onClick= {() => handleButtonCloseOpenClick(buttonName, setButtonName, document.getElementsByClassName('task-container'))}/>
                    {buttonName && <CurrentTaskForm />}
                </div>
            )
        case "completed-task-container":
            return(
                <div className='completed-task-container'>
                    <h2>Completed Tasks </h2>
                    <ButtonCloseOpenForm
                        buttonName={buttonName}
                        onClick= {() => handleButtonCloseOpenClick(buttonName, setButtonName, document.getElementsByClassName('completed-task-container'))} />
                    {buttonName && <CompletedTasksForm /> }
                </div>
            )
        default:
            return <></>
    }
}