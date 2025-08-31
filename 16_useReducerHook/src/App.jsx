import './index.css'
import {useMyAppContext} from "./AppContext.jsx";
import Button from "./Button.jsx";
import {handleIncrementBy, handleUpdateInput} from "./handlers/handlers.js";

export default function App() {

    const { state, dispatch } = useMyAppContext()

  return (
    <main className="bg-gray-300 flex justify-center">
        <div className="m-10 p-2 bg-white rounded-lg flex flex-col">
            <p className="m-auto">Count: <span className={"font-semibold"}>
                {state.count}
            </span></p>
            <div className="flex gap-2">
                <Button
                    className="bg-red-500 w-10 h-10"  name={'+'}
                    onClick={() => {
                        dispatch({type: 'increment'})
                    }}
                />
                <Button
                    className="bg-orange-500 w-10 h-10" name={'-'}
                    onClick={() => {
                        dispatch({type: 'decrement'})
                    }}
                />
                <Button
                    className="bg-blue-200 p-2 h-10" name={'Reset'}
                    onClick={() => {
                        dispatch({type: 'reset'})
                    }}
                />
                <Button
                    className="bg-green-200 p-2 h-10" name={'+5'}
                    onClick={() => {
                        dispatch({type: 'incrementByFive', payload: 5})
                    }}
                />
            </div>
            <div className="mt-5 flex flex-col gap-y-2">
                <input placeholder="0"
                       className="border-1 rounded-sm placeholder: p-1 placeholder: text-end"
                       type="number"
                       value={state.inputValue}
                       onChange={(e) => handleUpdateInput({e, dispatch})}
                />
                <Button className="bg-emerald-400 " name={'incrementBy'}
                    onClick={() => {
                        handleIncrementBy(state, dispatch)
                    }} />
            </div>

        </div>
    </main>
  )
}