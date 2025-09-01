import {createContext, useContext, useReducer} from "react";
import { data } from "../data/voters.jsx"

const MyAppContext = createContext({})

const userData = {inputValue: ""}

function reducer(state, action) {
    switch (action.type) {
        case "inputUpdate":
            return {...state, inputValue: action.payload};
        case "addCandidate":
            data.candidates.push({
                id: data.candidates.length + 1,
                name: state.inputValue,
                votes: 0,
            });
            break;
    }
}

export function AppContext({ children }) {

    const [state, dispatch] = useReducer(reducer, userData)
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
