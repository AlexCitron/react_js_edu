import { useContext, createContext, useReducer } from 'react'

const MyAppContext = createContext({})
const initialData = {}

function reducer(state, action) {
    switch (action.type) {
        case '1':
            return {...state}
    }
}

export function AppContext({ children }) {
    const [state, dispatch] = useReducer(reducer, initialData)
    return (
        <MyAppContext value={{
            state, dispatch
        }}>
            {children}
        </MyAppContext>
    )
}

export function useMyAppContext() {
    return useContext(MyAppContext)
}
