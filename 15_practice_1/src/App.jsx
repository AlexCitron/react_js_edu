import Footer from "./components/Footer.jsx";
import FormsContainer from "./components/FormsContainer.jsx";
import {useMyAppContext} from "./AppContext.jsx";
import AddTasksForm from "./components/AddTasksForm.jsx";
import TaskList from "./components/TaskList.jsx";
import SortControls from "./components/SortControls.jsx";


export default function App() {
    const {time, activeTasks, completedTasks} = useMyAppContext()


  return (
    <div className='app'>
        <h1>Timer: {time.toLocaleTimeString()}</h1>
        <FormsContainer className='add-task-container' header={'Add Task to list'}>
            <AddTasksForm />
        </FormsContainer>
        <FormsContainer className='task-container' header={'Tasks'}>
            <SortControls />
            <TaskList tasks={activeTasks}/>
        </FormsContainer>
        <FormsContainer className='completed-task-container' header={'Completed Tasks'}>
            <TaskList tasks={completedTasks}/>
        </FormsContainer>
        <Footer />
    </div>
  )
}
