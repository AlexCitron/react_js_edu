import Button from "./button.jsx";
import {handlePreviousButtonClick, handleNextButtonClick} from "../handlers/handlers.jsx";

export default function NavigationContainer({tabArrayNames, activeTabButton, setActiveTabButton}) {
    return (
        <div className='navigation-buttons'>
            <Button name='< Previous' onClick={() => handlePreviousButtonClick(tabArrayNames, activeTabButton, setActiveTabButton)} />
            <Button name='Next >' onClick={() => handleNextButtonClick (tabArrayNames, activeTabButton, setActiveTabButton)} />
        </div>
    )
}