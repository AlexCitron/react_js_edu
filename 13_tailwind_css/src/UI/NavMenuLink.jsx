import {NavLink} from 'react-router-dom'

export default function NavMenuLink({to, children}) {
    return (
        <NavLink className={({isActive}) =>
            isActive ? "text-gray-900 font-semibold" : "text-gray-500"}
                 to={to}>{children}</NavLink>
    )
}