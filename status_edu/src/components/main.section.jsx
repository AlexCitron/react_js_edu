import Button from './button.jsx'
import {useState} from "react";
import {handleBeginButtonClick, handleIncrementButtonsClick} from "../handlers/handlers.jsx";
import Logo from "./Image.logo.jsx";


export default function MainSection() {
    const buttons = ['+1', '-1', 'Reset']

    const [count, setCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [activeItem, setActiveItem] = useState(null)

        return (
            <>
                {
                    isOpen ?
                    <span className='cross' onClick={() => handleBeginButtonClick(setIsOpen)}>&times;</span> :
                    <Button id='startButton' title='Начать' className={isOpen ? 'active' : 'unactive'} setIsOpen={setIsOpen}/>
                }
                { isOpen &&
                    <>
                        <h1> Vite + React = {count > 2 ? 'Cool thing!' : ''}</h1>

                        <div className='logo-container'>
                            <Logo
                                name='vite'
                                className={activeItem === 'vite' || count > 0 ? 'logo active' : "logo"}
                                setActiveItem={setActiveItem}   />
                            <p>+</p>
                            <Logo
                                name="react"
                                className={activeItem === 'react' || count > 1  ? 'logo active' : "logo"}
                                setActiveItem={setActiveItem}/>
                            <p>=</p>
                            <Logo
                                name="love"
                                className={activeItem === 'love' || count > 2  ? 'logo active' : "logo"}
                                setActiveItem={setActiveItem}/>
                        </div>

                        <hr/>

                        <div className='card'>
                            <p className='count-paragraph'>count is {count}</p>
                            <div className='increment-buttons'>
                                {buttons.map((title, i) => (
                                    <Button title={title} setCount={setCount} key={i} />

                                ))}
                            </div>
                        </div>
                     </>

                }
            </>
        )
}