import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error/Error";
import Navebar from "./components/Navebar/Navebar";
import ProductsDetails from "./components/ProductDetails/ProductsDetails";
import About from "./Pages/About";
import Details_products from "./Pages/Details_products";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
export default function App() {
  

    return (
        <>
       <Navebar/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/item/:productid" element={<Details_products/>} />
        <Route path="*" element={<Error/>} />
            
       </Routes>
        </>
                
        
    
       

    )

}