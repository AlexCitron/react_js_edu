import Button from "./button.jsx";
import Instructions from "./instructions.jsx";
import downloadButtonFile from "../utils/dowloadButtons.js";

export default function Header({showInstructions, setShowInstructions}) {

    return (
        <>
        <header className={'app-header'}>
            <h1> UI Component Library</h1>
            <p>Explore reusable and customizable components</p>
            <div className={'header-buttons'}>
                <Button className={'accordion-button'} name={'Show instructions'} onClick={setShowInstructions}/>
                <Button className={'download-button'} name={'Download Button.js'} onClick={downloadButtonFile}/>
            </div>
        </header>
            <Instructions state={showInstructions ? ' open' : ""} />
        </>
)
}