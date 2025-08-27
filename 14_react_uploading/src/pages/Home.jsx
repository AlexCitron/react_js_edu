import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="m-5">
            <h1 className="text-red-500 text-center font-semibold">Welcome to the Home Page</h1>
            <p className="mt-5 font-semibold">
                Go to the <Link className='underline' to='/posts'>Posts</Link> page to view the list of posts
            </p>
            <p className="mt-5 font-semibold">
                Go to the <Link className='underline' to='/create'>Add Post</Link> page to add a new post
            </p>
        </div>
    )
}