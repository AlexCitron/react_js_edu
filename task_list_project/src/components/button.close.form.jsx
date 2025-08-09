export default function ButtonCloseOpenForm ({buttonName, onClick}) {
    return (
        <button
            className={buttonName ? 'close-button open' : 'close-button'}
            onClick={onClick}
        >+</button>
    )
}