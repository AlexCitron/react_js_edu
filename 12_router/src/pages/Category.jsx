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
            <div className={'CategoryContainer'}>
                <div className="priceFilterContainer">
                    <input id="minPrice" type="text" placeholder='0' value={minSearchPrice} onChange={updateSearchParams}/>
                    <input id="maxPrice" type="text" placeholder={maxSearchPrice} value={maxSearchPrice} onChange={updateSearchParams}/>
                </div>
                <ul style={{ display: "flex"}}>
                    {filteredCategoryGoodsList.map((product) => (
                        <li key={product.id} style={{ listStyle: "none" }}>
                            <Link to={`/product/${product.id}`}>
                                {product.name} {product.price}$
                                {<img src={product.img} alt={product.name} style={{ width: "150px"}}/>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
    )
}