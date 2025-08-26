import {Link} from 'react-router-dom'
import fetchDataHandler from "../handlers/fetchDataHandler.jsx";
import {useState, useEffect} from "react";

const URL = 'https://jsonplaceholder.typicode.com/posts'

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const loadPosts = async () => {
            try{
                setPosts(await fetchDataHandler(URL));
            }catch (e){
                setError(e);
            } finally{
                setIsLoading(false);
            }
        }
        loadPosts();
    },[])

    if(isLoading){
        return (<p>Loading...</p>)
    }
    if(error){
        return (
            <div>
                <h1 className="py-15 text-red-500 text-2xl font-bold text-center">Error</h1>
                <p className="px-10">{error.message || 'something went wrong'}</p>
            </div>
        )
    }
    return (
        <div className="px-5">
            <h1 className="mt-10 text-center text-blue-500 text-2xl font-bold">Posts</h1>
            <ul className="list-disc ml-5 mt-10">
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <Link to="/">Go back to Home</Link>
        </div>
    )
}