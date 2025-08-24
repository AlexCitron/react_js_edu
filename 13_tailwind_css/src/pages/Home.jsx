import {categories} from "../data/data.js";
import {Link, useLocation} from "react-router-dom";

export default function Home() {

    const  location = useLocation();
    console.log(location)

    return (
        <div className={'py-10'}>
            <h1 className={'text-2xl font-semibold text-center mb-8'}>Categories</h1>
            <ul className={'grid grid-cols-3 gap-4 px-5'}>
                {categories.map(category => (
                    <li key={category.id} style={{ listStyle: "none" }}>
                    <Link to={`/category/${category.id.toLowerCase()}`}>
                        {category.name}
                        <img src={category.img} alt={category.name} />
                    </Link>
                    </li>))}
            </ul>
        </div>
    )
}