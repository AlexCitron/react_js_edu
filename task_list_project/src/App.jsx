import Footer from "./components/footer.jsx";
import FormsContainer from "./components/forms.container.jsx";

export default function App() {

  return (
    <div className='app'>
        <FormsContainer className='task-add-container'/>
        <FormsContainer className='task-container'/>
        <FormsContainer className='completed-task-container'/>
        <Footer />
    </div>
  )
}
