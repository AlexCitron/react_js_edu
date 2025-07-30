export default function Product({props}) {
    const { name, description, price, photoName  } = props
    return (
        <li className="product">
            <img src={photoName} alt="photo"/>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>{"$" + price}</span>
            </div>
        </li>
    )
}