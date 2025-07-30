import Product from "./product.jsx";
import {productData}  from "../../misc/gadgets.jsx";

export default function Catalog() {
    const products = [...productData]
    return (
        <main className="catalog">
            <ul className="products">
                {products.map((product) => (
                    <Product props={product} key={product.name} />
                ))}
            </ul>
        </main>
    )
}