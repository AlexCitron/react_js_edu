export default function Product({props}) {
    const { name, description, price, photoName, soldOut  } = props
    return (
        <li className={"product" + (soldOut ? " sold-out" : '')}>
            <img src={photoName} alt="photo"/>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>{soldOut ? 'SOLD-OUT' : "$" + price}</span>
            </div>
        </li>
    )
}