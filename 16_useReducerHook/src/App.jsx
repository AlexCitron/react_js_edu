import './index.css'
import {useMyAppContext} from "./AppContext.jsx";

export default function App() {
    const {getActionResultIf} = useMyAppContext()
    getActionResultIf('increment')
    // getActionResultSwitch('increment')
  return (
    <></>
  )
}