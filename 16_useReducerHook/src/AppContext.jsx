import {createContext, useContext} from "react";

export const MyAppContext = createContext({})

function getActionResultIf(actionType) {
    if(actionType === 'increment') {
        console.log('Increment action executed (if)')
    } else if(actionType === 'decrement') {
        console.log('Decrement action executed  (if)')
    } else if(actionType === 'reset') {
        console.log('Increment action executed  (if)')
    } else {
        console.log('Unknown action type (if)')
    }
}



export default function AppContext({children}) {
    return(
        <MyAppContext.Provider value={{getActionResultIf}}>
            {children}
        </MyAppContext.Provider>
        )
};

export function useMyAppContext() {
    return useContext(MyAppContext);
}