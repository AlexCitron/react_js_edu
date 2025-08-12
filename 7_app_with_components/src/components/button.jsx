export default function ({className, name, onClick}) {
    return (
        <button
            className={className}
            onClick={() => onClick((prev) => !prev)}
        >
            {name}
        </button>
    )
}