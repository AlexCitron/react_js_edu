import {handleIncrementButtonsClick , handleBeginButtonClick } from "../handlers/handlers.jsx";

export default function Button({title, setCount, className, setIsOpen, id}) {

    return (
        <>
            <button
                id={id ? id : ''}
                className={className ? className : 'common'}
                onClick={() => (
                    title === 'Начать' ?
                        handleBeginButtonClick(setIsOpen) :
                        handleIncrementButtonsClick(title, setCount)
                )}
            >
            {title}</button>
        </>
    )
}