import {Link, useLoaderData} from "react-router-dom";


export default function Posts() {
    const posts = useLoaderData()
    return (
        <div className="px-5">
            <h1 className="mt-10 text-center text-blue-500 text-2xl font-bold">Posts</h1>
            <ul className="list-disc ml-5 mt-10">
            {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <p>Go to <Link className="underline" to="/">Home</Link> page</p>
        </div>
    )
}