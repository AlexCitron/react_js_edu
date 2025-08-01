function handleStartButtonClick(setActive) {
    setActive((previousState) => !previousState);
}

function handleTabButtonClick(setActiveTabButton, name, activeTabButton) {
    (activeTabButton === name) ? setActiveTabButton(null) : setActiveTabButton(name);
}

function handlePreviousButtonClick(tabArrayNames, activeTabButton, setActiveTabButton) {
    const current_pos = tabArrayNames.indexOf(activeTabButton)
    if (!activeTabButton) {
        }
        else {
            (current_pos - 1 >= 0) ? setActiveTabButton(tabArrayNames[current_pos - 1]) : setActiveTabButton(tabArrayNames[current_pos]);
        }
}
function handleNextButtonClick(tabArrayNames, activeTabButton, setActiveTabButton) {
    const current_pos = tabArrayNames.indexOf(activeTabButton)
    if (!activeTabButton) {
        }
        else {
            (current_pos + 1 < tabArrayNames.length) ? setActiveTabButton(tabArrayNames[current_pos + 1]) : setActiveTabButton(tabArrayNames[current_pos]);
        }
}

export { handleStartButtonClick, handleTabButtonClick, handlePreviousButtonClick, handleNextButtonClick }