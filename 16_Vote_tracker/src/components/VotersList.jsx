import {data} from "../../data/voters.jsx";
import Button from "./Button.jsx";

export default function VotersList() {
    return (
        <ul className="mx-15 mt-5 px-5 py-5
        shadow-gray-300 rounded-lg
        shadow-md sm:rounded-md
        border-1 border-gray-50
        ">
            {data.candidates.map(({id, name, votes}) => (
                <li className="flex justify-between items-center
                mb-3
                "
                    key={id}>
                        <p >{name}: {votes} votes</p>
                        <div className="flex gap-10">
                            <Button
                                className="bg-green-600 w-8 h-8
                                hover:bg-green-500 transition duration-300 "
                                name={'+'}/>
                            <Button />
                            <Button
                                className="bg-red-600 w-8 h-8
                                hover:bg-red-500 transition duration-300 "
                                name={'-'}/>
                            <Button />
                        </div>
                </li>
                ))
            }
        </ul>
    )
}