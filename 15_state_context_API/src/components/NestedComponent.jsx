export default function NestedComponent() {
    return (
        <div className="border-2 border-green-500 m-3 p-3">
            <h1 className="text-md">Nested component</h1>
            {/*<p>Counter: {count}</p>*/}
            <button
                className="bg-blue-500 text-white px-2 py-1 rounded-sm "
                // onClick={increment}
            >Increment</button>
        </div>
    )
}