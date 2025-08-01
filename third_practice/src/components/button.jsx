
export default function Button({name, onClick, className }) {
    return (
        <>
            <button
                className={className ?? className}
                onClick={onClick}
            >{name}</button>
        </>
    )
}