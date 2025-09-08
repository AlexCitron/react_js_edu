import {Link, useLocation, useRouteError} from "react-router-dom";

export default function ErrorBoundary() {
    const err = useRouteError()
    const { pathname} = useLocation()
    return (
        <div>
            <h1>Error</h1>
            <p>{err.message}</p>
            {!(pathname === '/') && <p>Got to <Link className="underline" to='/'>Home</Link> page</p>}
        </div>
    )
}