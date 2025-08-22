import { products } from "../data/data.js";
import {Link, useParams} from "react-router-dom";


export default function Category() {
    const  { categoryId} = useParams()
    const currentCategoryGoodsList = products.filter((product) => product.categoryId.toLowerCase() === categoryId)
    if (currentCategoryGoodsList.length === 0) {
        return <p>Category not found</p>
    }
        return (
        <ul style={{ display: "flex"}}>
            {currentCategoryGoodsList.map((product) => (
                <li key={product.id} style={{ listStyle: "none" }}>
                    <Link to={`/product/${product.id}`}>
                        {product.name} {product.price}$
                        {<img src={product.img} alt={product.name} style={{ width: "150px"}}/>}
                    </Link>
                </li>
            ))}
        </ul>
    )
}