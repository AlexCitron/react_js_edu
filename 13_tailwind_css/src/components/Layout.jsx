import {Header} from "./Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import {useState} from "react";

export default function Layout() {
    const [cart, setCart] = useState([]);
    return (
        <>
            <Header>
                <span> {cart.length}</span>
            </Header>
            <main>
                <Outlet cart={cart} setCart={setCart} />
            </main>
            <Footer/>
        </>
    )
}