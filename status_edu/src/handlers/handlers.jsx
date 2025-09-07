function handleIncrementButtonsClick(title, setCount) {
    switch (title) {
        case `+1`:
            setCount((prevCount) => prevCount + 1)
            break
        case `-1`:
            setCount((prevCount) => prevCount - 1)
            break
        default:
            setCount(0)
            break
    }
}

function handleBeginButtonClick(setIsOpen) {
    setIsOpen((currentState) => {
        return !currentState})
}

function handleMouseEnter(name, setActiveItem) {
    setActiveItem(name)
}
function handleMouseLeave(setActiveItem) {

    setActiveItem(null)
}

export  { handleIncrementButtonsClick, handleBeginButtonClick, handleMouseEnter, handleMouseLeave }