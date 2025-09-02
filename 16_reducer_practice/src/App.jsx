import './index.css'
import {useAppContext} from "./AppContext.jsx";


export default function App() {
    const { someVal } = useAppContext()

  return (
    <main className={"bg-gray-100 mx-auto mt-5 flex"}>
        <div className="mx-80 px-10 my-20 bg-white rounded-lg shadow-md p-5 flex-1">
            <p className="mt-5 text-center text-4xl font-semibold">SOME DATE</p>
            <button className="text-white bg-gray-400 rounded-sm mt-5 px-5 py-2 hover:bg-gray-500 text-2xl">Reset</button>
            <div>
                <input className="border-1 rounded-md h-15 px-3 w-100 text-2xl placeholder:text-2xl border-gray-400 select:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" placeholder="Days after today" />
                <button className="text-white bg-green-400 rounded-sm mt-5 mx-5 px-5 h-15 hover:bg-green-500 text-2xl">Show result</button>
            </div>
        </div>
    </main>
  )
}
