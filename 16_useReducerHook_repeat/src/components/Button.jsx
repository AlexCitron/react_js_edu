export default function Button ({name, className, onClick}) {
    return (
        <button
            className={className + "text-white rounded-sm"}
            onClick={onClick}
        > {name}
        </button>
    )
}