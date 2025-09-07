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

const router = createBrowserRouter([{
    path: "/", element: <Layout />, children: [
        {index: true, element: <Home />},
        {path: "cart", element: <Cart />},
        {path: "about", element: <About />},
        {path: "category/:categoryId", element: <Category />},
        {path: "product/:productId", element: <ProductDetails />},
        {path: "thanks", element: <Thanks />},
        {path: "*", element: <NotFound />},
    ]
}])

export default function App() {
    return <RouterProvider router={router} />
}
