import NestedComponent from "./NestedComponent.jsx";

export default function ChildComponent({count, increment, decrement, reset}){
    return (
        <div className="border-2 border-blue-500 m-3 p-3">
            <h1 className="text-2xl font-semibold">Child component</h1>
            <NestedComponent count={count} increment={increment} decrement={decrement} reset={reset}/>
        </div>
    )
}