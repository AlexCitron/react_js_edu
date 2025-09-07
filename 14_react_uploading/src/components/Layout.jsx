import {Outlet, useNavigation} from "react-router-dom";
import StatusDisplay from "./StatusDisplay.jsx";

export default function Layout() {
    const {state} = useNavigation();
    return (
        <main>
            {state === 'loading' && <StatusDisplay />}
            {state === 'idle' && <Outlet/>}
        </main>
    )
}