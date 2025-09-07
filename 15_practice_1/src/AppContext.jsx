import {createContext, useContext, useEffect, useState} from "react";
import {initialTasks} from "./misc/data.js";

const MyAppContext = createContext({})

export default function AppContext({children}){
    const [time, setTime] = useState(new Date());
    const [tasks, setTasks] = useState([...initialTasks]);
    const [openSection, setOpenSection] = useState({
        'add-task-container': false,
        'task-container': true,
        'completed-task-container': true,
    });

    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('Low')
    const [dueDate, setDueDate] = useState('')

    const [sortType, setSortType] = useState("date") //priority
    const [sortOrder, setSortOrder] = useState("asc") // desc

    const activeTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    useEffect(() => {
        const timer = setInterval(() => {setTime(new Date())}, 1000);
        return () => {clearInterval(timer)}
    }, [time])

    function overdue(task) {
        if(new Date(task.dueDate) < new Date(time)){
            return 'overdue'
        }
        return ""
    }

    return (
        <MyAppContext.Provider value={{
            time,
            activeTasks,
            setTasks,
            openSection,
            setOpenSection,
            sortType,
            setSortType,
            sortOrder,
            setSortOrder,
            tasks,
            completedTasks,
            title,
            priority,
            dueDate,
            setTitle,
            setPriority,
            setDueDate,
            overdue
        }}>
            {children}
        </MyAppContext.Provider>
    )
}

export function useMyAppContext(){
    return useContext(MyAppContext)
}