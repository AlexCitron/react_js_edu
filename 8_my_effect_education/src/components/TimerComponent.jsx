import { useState, useEffect } from 'react'

export default function TimerComponent() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning) {
            timer = setInterval(() => {
                console.log('Timer running', count);
                setCount((prev) => prev + 1)
            }, 1000)
        }

        return () => {
            if (timer) {
                console.log('Cleaning up the timer');
                clearInterval(timer);
            }
        };
    }, [isRunning]);


    return (
    <div>
        <h1>Timer: {count}</h1>
        <button onClick={() => setIsRunning((prevState) => !prevState)}>
            {isRunning ? 'Stop Timer' : 'Start Timer'}
        </button>
        <button onClick={() => setCount(0)}>
            ResetTimer
        </button>
    </div>)
}