import {products} from "../data/data.js";
import {useParams} from "react-router-dom";


export default function ProductDetails() {
    const { productId} = useParams()
    const currentProduct = products.find(p => p.id === parseInt(productId, 10))
    if (!currentProduct) {
        return <p className="text-center text-red-500 font-bold text-xl">Not found</p>
    }
    const { name, price, img} = currentProduct;
    return (
            <div className="py-10 px-6">
                <h1 className="mb-4 text-3xl font-semibold text-center">Product Details</h1>
                <div className="flex flex-col items-center rounded-md bg-white p-6">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className='text-lg text-gray-700'>Price: {price}$</p>
                    <img className="w-40 h-40 mb-4 rounded-md" src={img} alt={name} />
                </div>
            </div>
    )
}

