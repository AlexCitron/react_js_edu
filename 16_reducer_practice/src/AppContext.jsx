import {createContext, useContext, useReducer} from 'react'

const MyAppContext = createContext({})
const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
}
const initialValue = {date: new Date().toDateString(), inputValue: ""}

function reducer(state = initialValue, action) {
    switch (action.type) {
        case "inputChanged":
            return {...state, inputValue: action.payload}
        case "calcDays":
            const days = parseInt(action.payload, 10)
            if(!isNaN(days)) {
                let res = new Date();
                res.setDate(res.getDate() + days)
                return {...state, inputValue: "", date: res.toDateString()}
            }
            return {...state, inputValue: ""}
        case "reset":
            return {date: new Date().toDateString() , inputValue: ""}
    }
}

export default function AppContext({children}){
    const [state, dispatch] = useReducer(reducer, initialValue)

    return(
        <MyAppContext.Provider value={{
            state,
            dispatch,
        }}>
        {children}
        </MyAppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(MyAppContext)
}