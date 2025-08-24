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
                    <Link className={'relative flex flex-col items-center justify-center'} to={`/category/${category.id.toLowerCase()}`}>
                        <span className={'z-10 absolute font-semibold text-slate-50 text-xl'}>{category.name}</span>
                        <img className={'rounded-xl'} src={category.img} alt={category.name} />
                        <div className={'absolute inset-0 bg-gray-950/40 rounded-xl'}></div>
                    </Link>
                    </li>))}
            </ul>
        </div>
    )
}