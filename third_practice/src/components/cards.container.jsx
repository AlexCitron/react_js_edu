import Card from "./card.jsx";

export default function CardContainer({ cardData }) {
    return (
        <div className='card-container'>
            {cardData.map((card, index) => (
                <Card key={index} card={card}/>
            ))}
        </div>
    )
}