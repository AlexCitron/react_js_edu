import {useState} from "react";
import handleClick from "../handlers/handleExperimentClick.jsx";

export default function Experiment() {
    const [count, setCount] = useState(0)


    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => handleClick(setCount)}>+2</button>
        </div>
    )
}