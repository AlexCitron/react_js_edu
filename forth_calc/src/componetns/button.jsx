export default function Button({className, onClick, title}) {
    return (
        <button
            className={className ?? className}
            onClick={onClick}
        >{title}</button>
    )
}