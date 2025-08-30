import Footer from "./components/footer.jsx";
import FormsContainer from "./components/forms.container.jsx";
import {useMyAppContext} from "./AppContext.jsx";


export default function App() {
    const {time, activeTasks, setTasks, openSection, setOpenSection, sortType, setSortType, sortOrder, setSortOrder, tasks, completedTasks} = useMyAppContext()


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
