import {NavLink} from "react-router-dom";
import NavMenuLink from "../UI/NavMenuLink.jsx";

export function Header({children}) {

    return (
        <header className='flex py-8 px-8 justify-between header bg-blue-200 shadow-md max-w-2xl m-auto'>
            <img className="h-6" src={"/logo.svg"} alt={'logo'}/>
            <ul className='flex gap-14'>
                <li><NavMenuLink to={'/'}>Home</NavMenuLink></li>
                <li><NavMenuLink to={'/about'}>About</NavMenuLink></li>
                <li><NavMenuLink to={'/cart'}>Cart</NavMenuLink></li>
            </ul>
        </header>
)
}