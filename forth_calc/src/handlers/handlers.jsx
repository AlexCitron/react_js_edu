function handlerIncrement(setInput){
    setInput((prev) => prev + 1);
}

function handlerDecrement(setInput){
    setInput((prev) => prev - 1);
}

function pressCommonButton(setInput, btn){
    const btnName = btn.target.innerHTML
    if (btnName === ","){
        setInput((prev) =>  prev + '.')
    } else {
    setInput((prev) => (prev  + btnName).startsWith('0') &&
    !(prev + btnName).startsWith('0.')
        ? btnName: (prev  + btnName));
    }
}

function handleOperatorButton(input, setInput, cacheArr, setCacheArr, btn){
    let operation = btn.target.innerHTML;
    if (operation === 'x') {
        operation = '*'
    } else if (operation === '%') {
        operation = '/'
    }

    if(!cacheArr){
        setCacheArr([input, operation]);
    } else {
        setCacheArr(cacheArr.concat([input, operation]));
    }
    setInput(0)
}

function handleEqualButton(input, cacheArr, setCacheArr, setInput){
    if(!cacheArr){
        {}
    } else {
        setInput(eval(cacheArr.concat([input]).join('')));
    }
    setCacheArr(null);
}

function handleClearButton(setInput, setCacheNumber){
    setInput(0)
    setCacheNumber(null)
}


export { handleClearButton, handleEqualButton, handleOperatorButton, handlerIncrement, handlerDecrement, pressCommonButton };