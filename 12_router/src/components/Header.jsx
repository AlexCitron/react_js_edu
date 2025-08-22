import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header className={'header'}>
            <h1>Header</h1>
            <NavLink to={'/'} >Home</NavLink>
            <NavLink to={'/about'} >About</NavLink>
            <NavLink to={'/cart'} >Cart</NavLink>
            <hr/>
        </header>
    )
}