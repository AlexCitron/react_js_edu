import './index.css'
import {useMyAppContext} from "./AppContext.jsx";

export default function App() {
    const { getActionResultSwitch } = useMyAppContext()
    getActionResultSwitch('increment')
  return (
    <></>
  )
}