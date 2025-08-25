import { products } from "../data/data.js";
import {Link, useLocation, useParams, useSearchParams} from "react-router-dom";


export default function Category() {
    const [searchParams, setSearchParams] = useSearchParams();

    const  { categoryId} = useParams()
    const currentCategoryGoodsList = products.filter((product) => product.categoryId.toLowerCase() === categoryId)

    function getMaxCost() {
        return [...currentCategoryGoodsList.sort((a, b) => b.price - a.price)][0].price
    }

    const minSearchPrice = searchParams.get("min") || 0;
    const maxSearchPrice = searchParams.get("max") || getMaxCost();

    const filteredCategoryGoodsList = [...currentCategoryGoodsList.filter((product) => product.price >= minSearchPrice && product.price <= maxSearchPrice)]

    function updateSearchParams(e) {
        if(e.target.id === "minPrice") {
            let minPrice = e.target.value;
            if (minPrice < 0) {
                minPrice = '0';
            }
            setSearchParams({min: minPrice, max: maxSearchPrice})
        }
        if(e.target.id === "maxPrice") {
            setSearchParams({min: `${minSearchPrice}`, max: `${e.target.value}`})
        }
    }
    if (currentCategoryGoodsList.length === 0) {
        return <p>Category not found</p>
    }
        return (
            <div className="py-10 px-6">
                <h1 className="mb-4 text-3xl font-semibold text-center">Category {categoryId}</h1>
                <div className="mb-4 ml-5 flex">
                    <div className="mr-4">
                        <label
                            className="block text-gray-500 font-medium"
                            htmlFor="minPrice">Min price</label>
                        <input
                            className="border border-gray-200 rounded-md w-20 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            id="minPrice"
                            type="text"
                            placeholder='0'
                            value={minSearchPrice}
                            onChange={updateSearchParams}/>
                    </div>
                    <div>
                        <label
                            className="block text-gray-500 font-medium"
                            htmlFor="maxPrice">Max price</label>
                        <input
                            className="border border-gray-200 rounded-md w-20 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            id="maxPrice"
                            type="text"
                            placeholder={maxSearchPrice}
                            value={maxSearchPrice}
                            onChange={updateSearchParams}/>
                    </div>
                </div>
                <ul className="grid grid-cols-3 gap-4 px-5">
                    {filteredCategoryGoodsList.map((product) => (
                        <li
                            key={product.id}
                            style={{ listStyle: "none" }}>
                            <Link
                                className="relative flex flex-col items-center justify-center group"
                                to={`/product/${product.id}`}>
                                <span className='absolute z-10 text-md font-semibold text-white group-hover:text-xl  duration-500 text-center'>{product.name}<br/>{product.price}$</span>
                                {<img className="rounded-xl" src={product.img} alt={product.name}/>}
                                <div className='absolute inset-0 rounded-xl group-hover:bg-gray-900 group-hover:opacity-70 transition duration-500'></div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
    )
}