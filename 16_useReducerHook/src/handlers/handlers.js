export function  handleIncrementBy(state, dispatch) {

    const value = parseInt(state.inputValue, 10);
    if(!isNaN(value)) {
        dispatch({type: 'incrementBy', payload: value})
    }
    handleUpdateInput({dispatch})
}

export function  handleUpdateInput({e, dispatch}) {
    let value = "";
    if (e){
        value = e.target.value
    }
    dispatch({type: 'updateInput', payload: value})
}