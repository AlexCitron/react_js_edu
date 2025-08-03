import Button from "./button.jsx";
import {useState} from "react";
import  {
    handlerIncrement,
    handlerDecrement,
    pressCommonButton,
    handleOperatorButton,
    handleEqualButton,
    handleClearButton
}
    from "../handlers/handlers.jsx";


export default function Calculator() {
    const [input, setInput] = useState(0);
    const [cacheArr, setCacheArr] = useState(null);

    return (
        <div className='calculator'>
            <div className='display'>{input}</div>
            <div className='increment-buttons'>
                <Button className='increment' title={'+1'} onClick={() => handlerIncrement(setInput)} />
                <Button className='decrement' title={'-1'} onClick={() => handlerDecrement(setInput)}/>
            </div>
            <div className='buttons'>
                <Button title={'7'}  onClick={(btn) => pressCommonButton(setInput, btn)}/>
                <Button title={'8'}  onClick={(btn) => pressCommonButton(setInput, btn)}/>
                <Button title={'9'}  onClick={(btn) => pressCommonButton(setInput, btn)}/>
                <Button title={'%'}  className='operator' onClick={(btn) => handleOperatorButton(input, setInput, cacheArr, setCacheArr, btn)}/>
                <Button title={'4'}  onClick={(btn) => pressCommonButton(setInput, btn)}/>
                <Button title={'5'}  onClick={(btn) => pressCommonButton(setInput, btn)}/>
                <Button title={'6'}  onClick={(btn) => pressCommonButton(setInput, btn)}/>
                <Button title={'x'}  className='operator' onClick={(btn) => handleOperatorButton(input, setInput, cacheArr, setCacheArr, btn)}/>
                <Button title={'1'}  onClick={(btn) => pressCommonButton(setInput, btn)}/>
                <Button title={'2'}  onClick={(btn) => pressCommonButton(setInput, btn)}/>
                <Button title={'3'}  onClick={(btn) => pressCommonButton(setInput, btn)}/>
                <Button title={'-'}  className='operator' onClick={(btn) => handleOperatorButton(input, setInput, cacheArr, setCacheArr, btn)}/>
                <Button title={'0'}  onClick={(btn) => pressCommonButton(setInput, btn)}/>
                <Button title={','}  onClick={(btn) => pressCommonButton(setInput, btn)}/>
                <Button title={'='}  className='equals' onClick={() => handleEqualButton(input, cacheArr, setCacheArr, setInput)}/>
                <Button title={'+'}  className='operator' onClick={(btn) => handleOperatorButton(input, setInput, cacheArr, setCacheArr, btn)}/>
                <Button title={'C'}  className='clear' onClick={() => handleClearButton(setInput, setCacheArr)}/>
            </div>
        </div>
    )
}