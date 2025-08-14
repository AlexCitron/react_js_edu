export default function Button({
                                   className='button',
                                   onClick,
                                   children }) {
    return(
        <button className={className} onClick={onClick}>{children}</button>
    )
}
