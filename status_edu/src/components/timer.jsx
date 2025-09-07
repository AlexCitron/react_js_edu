import {useState} from "react";

export default function Timer() {
    const [currentTime, setTime] = useState(new Date().toLocaleTimeString('ru-RU'))

    setInterval(() => {
        setTime(new Date().toLocaleTimeString('ru-Ru'))
    }, 500)

    return (
        <>
            <p className='timer'>{currentTime}</p>
        </>
    )
}