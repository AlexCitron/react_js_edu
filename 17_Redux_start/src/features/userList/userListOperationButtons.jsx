export default function OperationButton({color, children, onClick}) {
    const className = `py-1 px-2 rounded sm text-white 
    bg-${color}-500 hover:bg-${color}-600 transition duration-500`
    return (
        <button
            className={className}
            onClick={onClick}
        >{children}</button>
    )
}