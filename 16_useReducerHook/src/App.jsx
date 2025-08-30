import './index.css'
import {useMyAppContext} from "./AppContext.jsx";
import Button from "./Button.jsx";

export default function App() {

    const { count, dispatch } = useMyAppContext()

  return (
    <main className="bg-gray-300 flex justify-center">
        <div className="m-10 p-2 bg-white rounded-lg flex flex-col">
            <p className="m-auto">Count: <span className={"font-semibold"}>
                {count}
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
            </div>
        </div>
    </main>
  )
}