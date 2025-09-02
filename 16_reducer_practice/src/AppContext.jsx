import {createContext, useContext} from 'react'

const MyAppContext = createContext({})


export default function AppContext({children}){
    return(
        <MyAppContext.Provider value={{}}>
        {children}
        </MyAppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(MyAppContext)
}