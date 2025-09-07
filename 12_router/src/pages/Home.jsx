import {categories} from "../data/data.js";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Categories</h1>
            <ul style={{display: "flex"}}>
                {categories.map(category => (
                    <li key={category.id} style={{ listStyle: "none" }}>
                    <Link to={`/category/${category.id.toLowerCase()}`}>
                        {category.name}
                        <img src={category.img} alt={category.name} style={{ width: "150px" }} />
                    </Link>
                    </li>))}
            </ul>
        </div>
    )
}