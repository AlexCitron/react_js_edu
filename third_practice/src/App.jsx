import {useState} from "react";
import cardData from "./misc/card.data.jsx";
import CardContainer from "./components/cards.container.jsx";
import TabButtonsContainer from "./components/tab.buttons.container.jsx";
import { handleStartButtonClick } from "./handlers/handlers.jsx";

import Button from "./components/button.jsx";

export default function App() {

    /* States section*/
    const [isActive, setActive] = useState(false); // State for Start Button
    const [activeTabButton, setActiveTabButton] = useState(null); // State for


    /* Useful variables section */
    const cardsSowedAtTab = 2 // Int how many cards will be presented in section
    const tabArrayNames = [] // Qtty of tab buttons depends on CardData file and qtty of cards shown

    /* Dynamic array of Tab button names */
    for(let i = 1; i < (cardData.length / cardsSowedAtTab) + 1; i++){
        tabArrayNames.push(`Tab ${i}`)
    }

    /* start index for Cards Section*/
    const start = (tabArrayNames.indexOf(activeTabButton) ? tabArrayNames.indexOf(activeTabButton) * 2 : 0)


  return (
    <div className='app'>
        {!isActive ? // show Start button or all content
            <Button name='Start' onClick={() => handleStartButtonClick(setActive)} /> :
            <>
                <span className='close' onClick={() => setActive(!isActive)}>&times;</span>
                <h1> State Tabs Card Display</h1>
                <TabButtonsContainer
                    tabArrayNames={tabArrayNames}
                    activeTabButton={activeTabButton}
                    setActiveTabButton={setActiveTabButton}
                />
                <CardContainer cardData={cardData.slice(start, start + cardsSowedAtTab)} />

            </>
        }

    </div>
  )
}
