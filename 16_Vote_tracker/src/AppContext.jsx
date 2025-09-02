import {createContext, useContext, useReducer} from "react";
import { data } from "../data/voters.jsx"

const MyAppContext = createContext({})
const InitialData = {...data, inputValue: ""}

function reducer(state, action) {
    switch (action.type) {
        case "inputUpdate":
            return {...state, inputValue: action.payload};
        case "HandleAdd":
            const newCandidates = [...state.candidates, {
                id: state.candidates.length + 1,
                name: action.payload,
                votes: 0,
            }];
        return {candidates: newCandidates, inputValue: "" };
        case "addVote":
            const filteredAddList = state.candidates.filter(({id}) => id !== action.payload.id);
            return {...state, candidates: [...filteredAddList, { ...action.payload, votes: action.payload.votes + 1}] };
        case "removeVote":
            const filteredRemoveList = state.candidates.filter(({id}) => id !== action.payload.id);
            return {...state, candidates: [...filteredRemoveList, { ...action.payload, votes: action.payload.votes - 1}] };
        case "resetVotes":
            const resetList = state.candidates.map((p) => {return {...p, votes: 0}})
            return {...state, candidates: resetList};
}}

export function AppContext({ children }) {

    const [state, dispatch] = useReducer(reducer, InitialData)
    return (
        <MyAppContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </MyAppContext.Provider>
    )
}

export function useMyAppContext() {
    return useContext(MyAppContext)
}


