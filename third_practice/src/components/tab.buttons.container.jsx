import Button from "./button.jsx";

export default function TabButtonsContainer({ cardData }) {
    const cardsSowedAtTab = 2
    const tabArrayNames = []

    for(let i = 1; i < (cardData.length / cardsSowedAtTab) + 1; i++){
        tabArrayNames.push(`Tab ${i}`)
    }

    return (
        <div className='tab-buttons'>
            {tabArrayNames.map((name, index) =>
                (<Button
                    key={index}
                    name={name}
                    className='tab-button'
                    onClick={() => console.log(`${name} clicked`)}
                />)
            )}
        </div>
    )
}