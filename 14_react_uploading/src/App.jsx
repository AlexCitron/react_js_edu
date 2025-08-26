import "./index.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";

const  router = createBrowserRouter([
    {path: "/", element: <Layout/>, children: [
            {index: true, element: <Home/>},
            {path: "/posts", element: <Posts/>},
        ]},
])

export default function App() {

  return <RouterProvider router={router}/>
}
