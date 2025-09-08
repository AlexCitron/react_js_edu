import "./index.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Category from "./pages/Category.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Layout from "./components/Layout.jsx";
import Thanks from "./pages/Thanks.jsx";
import FetchData from "./utils/FetchData.js";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

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

