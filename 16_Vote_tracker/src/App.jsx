import "./index.css"
import Button from "./Button.jsx";

export default function App() {

  return (
    <main>
        <h1 className="text-black text-center font-bold text-4xl">Vote Tracker</h1>
        <div className="
        mx-15 mt-5 p-5
        flex justify-between items-center
        shadow-gray-300 rounded-lg
        shadow-md sm:rounded-md
        border-1 border-gray-50">
            <p >Dima: 10 votes</p>
            <div className="flex gap-10">
                <Button
                    className="bg-green-600 w-8 h-8 "
                    name={'+'}/>
                <Button />
                <Button
                    className="bg-red-600 w-8 h-8 "
                    name={'-'}/>
                <Button />
            </div>
        </div>
        <Button
            className="bg-orange-400 py-1 px-2 mx-18 my-5 "
            name="Reset Votes"
        />
        <div className="
                mx-15 p-5
                shadow-gray-300 rounded-lg
                shadow-md sm:rounded-md
                border-1 border-gray-50">
            <h2 className="font-bold text-2xl">Add Candidate</h2>
            <input
                className="
                my-5 mx-2 w-95/100
                border-1 border-gray-300 rounded-md
                focus:outline-none
                px-3 py-1.5"
                type="text"
                placeholder="Candidate name"/>
            <Button
                className="bg-orange-400 py-1 px-2 mx-2 "
                name="Add"
            />
        </div>
    </main>
  )
}
