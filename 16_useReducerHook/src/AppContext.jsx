import {createContext, useContext, useReducer } from "react";

const MyAppContext = createContext({})

export default function AppContext({children}) {

    function reducer(state, action) {
        switch (action.type) {
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            case "reset":
                return state = 0;
            default:
                return new Error("Invalid action type: " + action.type);
        }
    }

    const [count, dispatch] = useReducer(reducer, 0)

    return(
        <MyAppContext.Provider value={{
            dispatch,
            count
        }}>
            {children}
        </MyAppContext.Provider>
        )
};

export function useMyAppContext() {
    return useContext(MyAppContext);
}