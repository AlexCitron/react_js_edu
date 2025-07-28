export default function Product({ product }) {
    const { name, description, price, photoName  } = product
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