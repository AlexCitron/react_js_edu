import Button from "./button.jsx";
import Instructions from "./instructions.jsx";
// import downloadButtonFile from "../utils/downloadButtons.js";

import handleShowInstructionsClick from "../handlers/handleButtonClick.js";

export default function Header({showInstructions, setShowInstructions}) {

    return (
        <>
        <header className={'app-header'}>
            <h1> UI Component Library</h1>
            <p>Explore reusable and customizable components</p>
            <div className={'header-buttons'}>
                <Button variant={'accordion-button'} text={'Show instructions'} onClick={() => (handleShowInstructionsClick(setShowInstructions))}>
                    Show instructions
                </Button>
                <Button variant={'download-button'} text={'Download Button.js'}>
                    Download Button.js
                </Button>
            </div>
        </header>
            <Instructions state={showInstructions ? ' open' : ""} />
        </>
)
}