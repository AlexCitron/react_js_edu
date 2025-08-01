import {useState} from "react";
import cardData from "./misc/card.data.jsx";
import CardContainer from "./components/cards.container.jsx";
import TabButtonsContainer from "./components/tab.buttons.container.jsx";
import handleStartButtonClick from "./handlers/handlers.jsx";

import Button from "./components/button.jsx";

export default function App() {
    const [isActive, setActive] = useState(false);
    const [isActiveTabButton, setActiveTabButton] = useState(false);


  return (
    <div className='app'>
        {!isActive ?
            <Button name='Start' onClick={() => handleStartButtonClick(setActive)} /> :
            <>
                <span className='close' onClick={() => setActive(!isActive)}>&times;</span>
                <h1> State Tabs Card Display</h1>
                <TabButtonsContainer cardData={cardData} />
                <CardContainer cardData={cardData} />
            </>
        }

    </div>
  )
}
