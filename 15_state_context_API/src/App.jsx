import './index.css'
import ChildComponent from "./components/CildComponent.jsx";
import { useState, useContext} from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

  return (
    <div className="border-2 p-10 m-10">
        <h1 className="text-4xl font-bold">Context API example</h1>
        <ChildComponent count={count} increment={increment} decrement={decrement} reset={reset} />
    </div>
  )
}
