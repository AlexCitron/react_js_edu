import {createContext, useContext, useEffect, useReducer, useState} from "react";

const MyAppContext = createContext({})
const InitialData = {candidates: [], inputValue: "", status: "loading"}

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
        return {...state, candidates: newCandidates, inputValue: "" };
        case "addVote":
            const addVoteList = state.candidates.map((c) => {
                if (c.id === action.payload.id) {
                    return {...c, votes: c.votes + 1}
                }
                return c;})
            return {...state, candidates: addVoteList}
        case "removeVote":
            const removeVoteList =  state.candidates.map((c) => {
                if (c.id === action.payload.id) {
                    return {...c, votes: c.votes ? c.votes - 1 : c.votes}
                }
                return c;})
            return {...state, candidates: removeVoteList };
        case "resetVotes":
            const resetList = state.candidates.map((c) => {return {...c, votes: 0}})
            return {...state, candidates: resetList};
        case "dataReceived":
            return {...state, candidates: action.payload, status: "ready"};
}}

export function AppContext({ children }) {

    const [state, dispatch] = useReducer(reducer, InitialData)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:9000/candidates");
            if(!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            dispatch({type:"dataReceived", payload: data})
        }
        fetchData()
    }, [])

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


