function handleStartButtonClick(setActive) {
    setActive((previousState) => !previousState);
}

function handleTabButtonClick(setActiveTabButton, name, activeTabButton) {
    (activeTabButton === name) ? setActiveTabButton(null) : setActiveTabButton(name);
}

export {handleStartButtonClick, handleTabButtonClick}