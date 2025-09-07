import {createContext, useContext, useEffect, useReducer} from "react";
import reducer from "./components/reducer.js";

const MyAppContext = createContext({})
const InitialData = {candidates: [], inputValue: "", status: "loading"}

export function AppContext({ children }) {

    const [state, dispatch] = useReducer(reducer, InitialData)

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetch("http://localhost:9000/candidates");
                if(!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                dispatch({type:"dataReceived", payload: data})
            } catch (error) {
                dispatch({type: "dataFailed", payload: error.message});
            }
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


