import Footer from "./components/footer.jsx";
import FormsContainer from "./components/forms.container.jsx";
import {useState} from "react";
import { initialTasks } from "./misc/data.js";


export default function App() {
    const [tasks, setTasks] = useState([...initialTasks]);

    const [openSection, setOpenSection] = useState({
        addTasksForm: false,
        tasksForm: true,
        completedTasksForm: true,
    });


  return (
    <div className='app'>
        <FormsContainer className='task-add-container' setTasks={setTasks} tasks={tasks} openSection={openSection} setOpenSection={setOpenSection} />
        <FormsContainer className='task-container' tasks={tasks} setTasks={setTasks} openSection={openSection} setOpenSection={setOpenSection}/>
        <FormsContainer className='completed-task-container' tasks={tasks} setTasks={setTasks} openSection={openSection} setOpenSection={setOpenSection}/>
        <Footer />
        {/*<button onClick={() => console.log(tasks)}>Check tasks</button>*/}
    </div>
  )
}
