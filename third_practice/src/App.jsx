import {useState} from "react";
import cardData from "./misc/card.data.jsx";
import CardContainer from "./components/cards.container.jsx";
import TabButtonsContainer from "./components/tab.buttons.container.jsx";
import { handleStartButtonClick } from "./handlers/handlers.jsx";

import Button from "./components/button.jsx";
import NavigationContainer from "./components/navigation.container.jsx";
import Footer from "./components/footer.jsx";

export default function App() {

    /* Useful variables section */
    const cardsSowedAtTab = 1 // Int how many cards will be presented in section
    const tabArrayNames = [] // Qtty of tab buttons depends on CardData file and qtty of cards shown

    /* Dynamic array of Tab button names */
    for(let i = 1; i < (cardData.length / cardsSowedAtTab) + 1; i++){
        tabArrayNames.push(`Tab ${i}`)
    }

    /* States section*/
    const [isActive, setActive] = useState(false); // State for Start Button
    const [activeTabButton, setActiveTabButton] = useState(tabArrayNames[0]); // State for

    /* start index for Cards Section*/
    const start = (tabArrayNames.indexOf(activeTabButton) ? tabArrayNames.indexOf(activeTabButton) * cardsSowedAtTab : 0)
    console.log(start)

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
                <NavigationContainer
                    tabArrayNames={tabArrayNames}
                    activeTabButton={activeTabButton}
                    setActiveTabButton={setActiveTabButton}
                />
                <Footer />
            </>
        }

    </div>
  )
}
