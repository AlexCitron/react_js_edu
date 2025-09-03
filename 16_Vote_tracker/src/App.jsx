import "./index.css"
import Button from "./components/Button.jsx";
import VotersList from "./components/VotersList.jsx";
import AddCandidateForm from "./components/AddCandidateForm.jsx";
import {useMyAppContext} from "./AppContext.jsx";

export default function App() {
    const { state, dispatch } = useMyAppContext();

    if (state.status === "loading") {
        return <h1 className="text-blue-400 text-center font-bold text-4xl mt-5">Loading...</h1>
    }

    if (state.status === "error") {
        return <h1 className="text-red-500 text-center font-bold text-4xl mt-5">Failed to fetch data from remote sever...</h1>
    }

    return (
            <main className="mx-35 mt-5 p-5">
                <h1 className="text-black text-center font-bold text-4xl mt-5">Vote Tracker</h1>

                <VotersList/>
                <Button
                    className="bg-orange-400 hover:bg-orange-500 transition duration-300
                    py-1 px-2 mx-18 my-5 "
                    name="Reset Votes"
                    onClick={() => {dispatch({type: "resetVotes"});}}
                />
                <AddCandidateForm/>
            </main>
        )
}
