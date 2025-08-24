import {NavLink} from "react-router-dom";

export function Header({children}) {

    return (
        <header className={'flex py-8 px-8 justify-between header bg-blue-200'}>
            <img className={"h-6"} src={"/logo.svg"} alt={'logo'}/>
            <ul className={'flex gap-x-8'}>
                <li><NavLink className={"font-semibold"} to={'/'}>Home</NavLink></li>
                <li><NavLink className={"font-semibold"} to={'/about'}>About</NavLink></li>
                <li><NavLink className={"font-semibold"} to={'/cart'}>Cart</NavLink></li>
            </ul>
        </header>
)
}