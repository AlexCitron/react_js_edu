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
            const addVoteList =  []
            for ( let {id, name, votes} of state.candidates) {
                if(id === action.payload.id) {
                    addVoteList.push({id, name, votes: votes + 1});
                } else {
                    addVoteList.push({id, name, votes});
                }
            }
            return {...state, candidates: addVoteList}
        case "removeVote":
            const removeVoteList =  []
            for ( let {id, name, votes} of state.candidates) {
                if(id === action.payload.id) {
                    removeVoteList.push({id, name, votes: votes ? votes - 1 : votes});
                } else {
                    removeVoteList.push({id, name, votes});
                }
            }
            return {...state, candidates: removeVoteList };
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


