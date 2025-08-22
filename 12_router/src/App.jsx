import "./index.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Categories from "./pages/Categories.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "about", element: <About/>},
  {path: "cart", element: <Cart/>},
  {path: "categories", element: <Categories/>},
  {path: "product", element: <ProductDetails/>},
  {path: "*", element: <NotFound/>},
])

export default function App() {
  return <RouterProvider router={router} />
}
