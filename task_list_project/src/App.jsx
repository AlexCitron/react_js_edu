import TasksContainer from "./components/tasks.container.jsx";
import CompletedTaskContainer from "./components/completed.task.container.jsx";
import AddTaskContainer from "./components/add.tasks.container.jsx";
import Footer from "./components/footer.jsx";

export default function App() {

  return (
    <div className='app'>
        <AddTaskContainer />
        <TasksContainer />
        <CompletedTaskContainer />
        <Footer />
    </div>
  )
}
