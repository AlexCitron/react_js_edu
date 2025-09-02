import "./index.css"
import Button from "./components/Button.jsx";
import VotersList from "./components/VotersList.jsx";
import AddCandidateForm from "./components/AddCandidateForm.jsx";
import {useMyAppContext} from "./AppContext.jsx";

export default function App() {
    const { dispatch } = useMyAppContext();

  return (
    <main className="mx-35 mt-5 p-5">
        <h1 className="text-black text-center font-bold text-4xl mt-5">Vote Tracker</h1>
        <VotersList />
        <Button
            className="bg-orange-400 hover:bg-orange-500 transition duration-300
            py-1 px-2 mx-18 my-5 "
            name="Reset Votes"
            onClick={() => {dispatch({type: "resetVotes"});}}
        />
        <AddCandidateForm />
    </main>
  )
}
