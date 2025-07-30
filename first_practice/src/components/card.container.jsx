import Card from './Card'

export default function CardContainer({cardData}) {
    return (
        <div className="card-contaner">
            {cardData.map((card, index) => (
                <Card key={index} props={card}/>
            ))}
        </div>
    )
}