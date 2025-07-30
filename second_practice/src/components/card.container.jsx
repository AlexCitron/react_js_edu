import Card from "./card.jsx";

export default function CardContainer ({ props }) {
    return (
        <div className='card-container'>
            {props.map((card, index) => (
                    !card.archived && <Card props={card} key={index} />
                ))}
        </div>
    )
}