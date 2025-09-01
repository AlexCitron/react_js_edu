import Button from "./Button.jsx";
import {useMyAppContext} from "../AppContext.jsx";

export default function AddCandidateForm() {
    const { state, dispatch } = useMyAppContext();

    return (
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
                focus:outline-blue-500
                px-3 py-1.5"
                type="text"
                placeholder="Candidate name"
                onChange={(e) => {
                    dispatch({type: "inputUpdate", payload: e.target.value});
                    console.log(state)
                }}
            />
            <Button
                className="bg-orange-400 hover:bg-orange-500 transition duration-300
                py-1 px-2 mx-2 "
                name="Add"
                onClick={() => {
                    dispatch({type: "addCandidate"});
                    console.log(state)
                }}
            />
        </div>
    )
}