import {createContext, useContext} from "react";

const MyAppContext = createContext({})

export function AppContext({ children }) {
    return (
        <MyAppContext.Provider
            value={{

            }}
        >
            {children}
        </MyAppContext.Provider>
    )
}

export function useMyAppContext() {
    return useContext(MyAppContext)
}
