import Button from "./Button.jsx";
import { useMyAppContext } from "../AppContext.jsx";

export default function VotersList() {
    const { state, dispatch } = useMyAppContext()
    return (
        <ul className="mx-15 mt-5 px-5 py-5
        shadow-gray-300 rounded-lg
        shadow-md sm:rounded-md
        border-1 border-gray-50
        ">
            {state.candidates.map(({id, name, votes}) => (
                <li className="flex justify-between items-center mb-3 "
                    key={id}>
                        <p >{name}: {votes} votes</p>
                        <div className="flex gap-10">
                            <Button
                                className="bg-green-600 w-8 h-8
                                hover:bg-green-500 transition duration-300 "
                                name={'+'}
                                onClick={() => dispatch({ type: "addVote", payload: {id} })}/>
                            <Button />
                            <Button
                                className="bg-red-600 w-8 h-8
                                hover:bg-red-500 transition duration-300 "
                                name={'-'}
                                onClick={() => dispatch({ type: "removeVote", payload: {id} })}/>
                            <Button />
                        </div>
                </li>
                ))
            }
        </ul>
    )
}