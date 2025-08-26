import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="m-5">
            <h1 className="text-red-500 text-center font-semibold">Welcome to the Home Page</h1>
            <p>
                Go to the <Link className='underline' to='/posts'>Posts</Link> page to view the list of posts
            </p>
        </div>
    )
}