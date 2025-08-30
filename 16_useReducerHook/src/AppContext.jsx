import {createContext, useContext, useState} from "react";

const MyAppContext = createContext({})

export default function AppContext({children}) {

    const [count, setCount] = useState(0);

    function getActionResult(actionType) {
        switch (actionType) {
            case 'increment':
                setCount((prevCount) => prevCount + 1);
                break
            case 'decrement':
                setCount((prevCount) => prevCount - 1);
                break
            case 'reset':
                setCount(0);
                break
            default:
                console.log('Unknown action type (switch)')
        }
    }

    return(
        <MyAppContext.Provider value={{
            getActionResult,
            count,
        }}>
            {children}
        </MyAppContext.Provider>
        )
};

export function useMyAppContext() {
    return useContext(MyAppContext);
}