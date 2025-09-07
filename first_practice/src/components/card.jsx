export default function Card({props}) {
    const { title, description, date, imageUrl, tags } = props;
    return (
        <div className="card">
            <img className="card-image" src={imageUrl} alt="картинка"/>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-date">{date}</p>
                <div className="card-tags">
                    {tags.map((tag, index) => (
                        <CardTag key={index} tag={tag}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

function CardTag({tag}) {
    return <span className="card-tag">{tag}</span>
}