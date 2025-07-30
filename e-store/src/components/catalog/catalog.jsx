import Product from "./product.jsx";

export default function Catalog({productData}) {
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