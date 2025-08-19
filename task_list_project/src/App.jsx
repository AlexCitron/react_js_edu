import Footer from "./components/footer.jsx";
import FormsContainer from "./components/forms.container.jsx";
import {useState, useEffect} from "react";
import { initialTasks } from "./misc/data.js";


export default function App() {
    const [time, setTime] = useState(new Date());
    const [tasks, setTasks] = useState([...initialTasks]);
    const [openSection, setOpenSection] = useState({
        addTasksForm: false,
        tasksForm: true,
        completedTasksForm: true,
    });
    const [sortType, setSortType] = useState("date") //priority
    const [sortOrder, setSortOrder] = useState("asc") // desc

    const activeTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    useEffect(() => {
        const timer = setInterval(() => {setTime(new Date())}, 1000);
        return () => {clearInterval(timer)}
    }, [time])


  return (
    <div className='app'>
        <h1>Timer: {time.toLocaleTimeString()}</h1>
        <FormsContainer className='task-add-container' setTasks={setTasks} tasks={tasks} openSection={openSection} setOpenSection={setOpenSection} />
        <FormsContainer className='task-container'
                        tasks={activeTasks}
                        setTasks={setTasks}
                        openSection={openSection}
                        setOpenSection={setOpenSection}
                        sortType ={sortType}
                        setSortType ={setSortType}
                        sortOrder ={sortOrder}
                        setSortOrder ={setSortOrder}
                        time={time}

        />
        <FormsContainer className='completed-task-container' tasks={completedTasks} setTasks={setTasks} openSection={openSection} setOpenSection={setOpenSection} time={time}/>
        <Footer />
    </div>
  )
}
