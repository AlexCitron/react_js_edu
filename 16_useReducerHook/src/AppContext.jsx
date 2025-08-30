import {createContext, useContext} from "react";

const MyAppContext = createContext({})

export default function AppContext({children}) {
    function getActionResultSwitch(actionType) {
        switch (actionType) {
            case 'increment':
                console.log('Increment action executed (switch)')
                break
            case 'decrement':
                console.log('Decrement action executed (switch)')
                break
            case 'reset':
                console.log('Reset action executed (switch)')
                break
            default:
                console.log('Unknown action type (switch)')
        }
    }

    return(
        <MyAppContext.Provider value={{
            getActionResultSwitch,
        }}>
            {children}
        </MyAppContext.Provider>
        )
};

export function useMyAppContext() {
    return useContext(MyAppContext);
}