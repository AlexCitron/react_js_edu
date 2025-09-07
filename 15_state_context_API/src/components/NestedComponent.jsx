import {useContext} from "react";
import {MyContext} from "../App.jsx"

export default function NestedComponent() {

    const {count, increment, decrement, reset} = useContext(MyContext)

    return (
        <div className="border-2 border-green-500 m-3 p-3">
            <h1 className="text-md">Nested component</h1>
            <p>Counter: {count}</p>
            <div className="flex gap-3 mt-5">
                <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-sm "
                    onClick={increment}
                >Increment</button>
                <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-sm "
                    onClick={decrement}
                >Decrement</button>
                <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-sm "
                    onClick={reset}
                >Reset</button>
            </div>
        </div>
    )
}