import {useRouteError} from "react-router-dom";

export default function ErrorBoundary() {
    const error = useRouteError()
    return (
        <div className="mt-10 px-5 py-5">
            <h1 className="text-red-500 text-2xl font-bold text-center">Error</h1>
            <p className="mt-10 px-10">{error.message || 'something went wrong'}</p>
        </div>
    )
}