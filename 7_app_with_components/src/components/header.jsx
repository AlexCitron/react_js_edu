import Button from "./button.jsx";
import Instructions from "./instructions.jsx";
import {useState} from "react";

export default function Header() {
    const [showInstructions, setShowInstructions] = useState(false);

    return (
        <>
        <div className={'app-header'}>
            <h1> UI Component Library</h1>
            <p>Explore reusable and customizable components</p>
            <Button className={'accordion-button'} name={'Show instructions'} onClick={setShowInstructions}/>
            <Button className={'download-button'} name={'Download Button.js'}/>
        </div>
        <Instructions state={showInstructions ? ' open' : ""} />
        </>
)
}