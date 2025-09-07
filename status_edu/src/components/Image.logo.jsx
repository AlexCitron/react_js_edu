import {handleMouseEnter, handleMouseLeave} from "../handlers/handlers.jsx";

export default function Logo({name, className, setActiveItem}) {
    return (
        <>
            <img
                src={`/${name}.svg`} alt="Logo"
                className={className}
                onMouseEnter={() => handleMouseEnter(name, setActiveItem)}
                onMouseLeave={() => handleMouseLeave(setActiveItem)}
            />
        </>
    )
}