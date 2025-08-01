export default function Card({ card }) {
    const {title, description, date, imageUrl, tags, archived} = card
    return(
        <>
            <div className='card'>
                <img className='card-image' src={imageUrl} alt='card' />
                <div className='card-content'>
                    <h2 className='card-title'>{title}</h2>
                    <p className='card-description'>{description}</p>
                    <p className='card-date'>{date}</p>
                    <div className='card-tags'>
                        {tags.map((tag, index) => (
                        <CardTag tag={tag} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

function CardTag ({tag}) {
    return <span className='card-tag'>{tag}</span>
}