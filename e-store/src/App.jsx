import Header from "./components/header.jsx";
import Catalog from "./components/catalog/catalog.jsx";
import Footer from "./components/footer.jsx";
import {productData}  from "./misc/gadgets.jsx";

import './index.css'

export default function App() {
    return (
        <>
        <Header />
        <Catalog productData={productData}/>
        <Footer />
        </>
    )
}