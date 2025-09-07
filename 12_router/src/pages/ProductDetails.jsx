import {products} from "../data/data.js";
import {useParams} from "react-router-dom";


export default function ProductDetails(setCountGoods) {
    const { productId} = useParams()
    const currentProduct = products.find(p => p.id === parseInt(productId, 10))
    if (!currentProduct) {
        return <p>Not found</p>
    }
    const { name, price, img} = currentProduct;
    return (
            <div className={'productContainer'}>
                <div className="productDetails">
                    <h1>Product Details</h1>
                    <h2>{name}</h2>
                    <p>Price: {price}$</p>
                    <img src={img} alt={name} style={{ width: "150px" }} />
                </div>
                <button onClick={() => console.log(`Add to cart`)}>Add to cart</button>
            </div>
    )
}

