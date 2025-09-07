import NestedComponent from "./NestedComponent.jsx";

export default function ChildComponent(){
    return (
        <div className="border-2 border-blue-500 m-3 p-3">
            <h1 className="text-2xl font-semibold">Child component</h1>
            <NestedComponent />
        </div>
    )
}