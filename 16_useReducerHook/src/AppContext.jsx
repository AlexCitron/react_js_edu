import {createContext, useContext, useReducer } from "react";

const MyAppContext = createContext({})

const initialState = {count: 0, inputValue: ""};

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {...state, count: state.count + 1};
        case "decrement":
            return {...state, count: state.count - 1};
        case "reset":
            return {...state, count: 0};
        case "incrementByFive":
            return {...state, count: state.count + action.payload};
            case "updateInput":
            return {...state, inputValue: action.payload};
        case "incrementBy":
            return {...state, count: state.count + action.payload};
        default:
            return new Error("Invalid action type: " + action.type);
    }
}

export default function AppContext({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <MyAppContext.Provider value={{
            dispatch,
            state
        }}>
            {children}
        </MyAppContext.Provider>
        )
};

export function useMyAppContext() {
    return useContext(MyAppContext);
}