import "./index.css"
import { lazy } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import FetchData from "./utils/FetchData.js";
import Layout from "./components/Layout.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Cart = lazy(() => import("./pages/Cart"));
const Category = lazy(() => import("./pages/Category"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Thanks = lazy(() => import("./pages/Thanks"));

/*Setting routes*/
const router = createBrowserRouter([{
    path: "/", element: <Layout />, children: [
        {
            index: true,
            element: <Home />,
            loader: () => FetchData('http://localhost:9000/categories'),
            errorElement: <ErrorBoundary />,
        },
        {path: "cart", element: <Cart />},
        {path: "about", element: <About />},
        {
            path: "category/:categoryId",
            element: <Category />,
            loader: () => FetchData('http://localhost:9000/products'),
            errorElement: <ErrorBoundary />,
        },
        {
            path: "product/:productId",
            element: <ProductDetails />,
        },
        {path: "thanks", element: <Thanks />},
        {path: "*", element: <NotFound />},
    ]
}])

export default function App() {
    return <RouterProvider router={router} />
}

