import Button from "./button.jsx";
import {handleTabButtonClick} from "../handlers/handlers.jsx";

export default function TabButtonsContainer({ tabArrayNames, activeTabButton, setActiveTabButton }) {

    return (
        <div className='tab-buttons'>
            {tabArrayNames.map((name, index) =>
                (<Button
                    key={index}
                    name={name}
                    className={(activeTabButton === name) ? 'tab-button active' : 'tab-button'}
                    onClick={() =>handleTabButtonClick(setActiveTabButton, name, activeTabButton)}
                />)
            )}
        </div>
    )
}