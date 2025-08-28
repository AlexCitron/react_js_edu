import './index.css'
import ChildComponent from "./components/CildComponent.jsx";
import {useState, createContext} from "react";

export const MyContext = createContext({});

export default function App(defaultValue) {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);


    return (
        <MyContext.Provider value={{
                count,
                increment,
                decrement,
                reset,
            }}
            >
            <div className="border-2 p-10 m-10">
                <h1 className="text-4xl font-bold">Context API example</h1>
                <ChildComponent />
            </div>
        </MyContext.Provider>
    )
}
