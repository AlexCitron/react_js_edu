import {useNavigation} from "react-router-dom";

export default function StatusDisplay() {
    console.log(useNavigation())
    return (
        <h1 className="items-center text-center
        text-2xl
        text-blue-500
        font-semibold
        ">Loading...</h1>
    )
}