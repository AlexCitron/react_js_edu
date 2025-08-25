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
                    <Link className={'relative flex flex-col items-center justify-center group'} to={`/category/${category.id.toLowerCase()}`}>
                        <span className={'absolute z-10 text-xl font-semibold text-white group-hover:text-2xl  duration-500'}>{category.name}</span>
                        <img className={'rounded-xl'} src={category.img} alt={category.name} />
                        <div className={'absolute inset-0 rounded-xl group-hover:bg-gray-900 group-hover:opacity-70 transition duration-500'}></div>
                    </Link>
                    </li>))}
            </ul>
        </div>
    )
}