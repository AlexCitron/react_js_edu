import {NavLink} from "react-router-dom";

export default function Header({ children }) {

    return (
        <header className={'header'}>
            <h1>Header</h1>
            <div className={'container'}  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div>
                    <NavLink to={'/'} >Home</NavLink>
                    <NavLink to={'/about'} >About</NavLink>
                    <NavLink to={'/cart'} >Cart</NavLink>
                </div>
                <div>
                    <NavLink to={"/cart"}>
                        <img src={null} alt="cart img"/>
                        {children}
                    </NavLink>
                </div>
            </div>
            <hr/>
        </header>
    )
}