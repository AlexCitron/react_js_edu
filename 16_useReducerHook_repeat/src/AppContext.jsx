import {createContext, useContext, useReducer} from "react";

const MyAppContext = createContext({})
const initialState = {count: 0, inputValue: ''};

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        case 'DECREMENT':
            return {...state, count: state.count - 1};
        case 'RESET':
            return {...state, count: 0};
        case 'INCREMENT_5':
            return {...state, count: state.count + 5};
        case 'InputValue':
            return {...state, inputValue: action.payload};
        case 'INCREMENT_BY':
            const value = parseInt(action.payload, 10);
            if (!isNaN(value)) {
               return {count: state.count + value, inputValue: ""};
            }
            return {...state, inputValue: ""}
    }
}


export default function AppContext({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <MyAppContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </MyAppContext.Provider>
        )
};

export function useMyAppContext() {
    return useContext(MyAppContext);
}