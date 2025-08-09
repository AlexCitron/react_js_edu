function handleButtonCloseOpenClick(buttonName, setButtonName, elem) {
    if (buttonName === elem[0].className) {
        setButtonName(null);
    } else {
        setButtonName(elem[0].className)
    }
}

export default handleButtonCloseOpenClick
