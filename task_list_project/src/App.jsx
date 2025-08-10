import Footer from "./components/footer.jsx";
import FormsContainer from "./components/forms.container.jsx";
import {useState} from "react";

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

  return (
    <div className='app'>
        <FormsContainer className='task-add-container' setTasks={setTasks} tasks={tasks} />
        <FormsContainer className='task-container' tasks={tasks} setTasks={setTasks} />
        <FormsContainer className='completed-task-container' completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} />
        <Footer />
        {/*<button onClick={() => console.log(tasks)}>Check tasks</button>*/}
    </div>
  )
}
