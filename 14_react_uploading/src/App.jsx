import "./index.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import fetchDataHandler from "./handlers/fetchDataHandler.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import AddPost from "./pages/AddPost.jsx";
import createPostHandler from "./handlers/createPostHandler.jsx";

const URL = 'https://jsonplaceholder.typicode.com/posts'


const  router = createBrowserRouter([
    {path: "/", element: <Layout/>, children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/posts",
                element: <Posts/>,
                loader: () => fetchDataHandler(URL),
                errorElement: <ErrorBoundary/>,
            },
            {
                path: "/create",
                element: <AddPost />,
                action: createPostHandler,
                errorElement: <ErrorBoundary/>,
            },
            {
                path: "*",
                element: <h1>404: Page not Found</h1>,
            },
        ]},
])

export default function App() {

  return <RouterProvider router={router}/>
}
