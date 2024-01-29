import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/products";
import Addproduct from "./components/Addproduct";
import Admin from "./components/Admin";
import UpdateProduct from "./components/UpProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/updateproduct/:productid" element={<UpdateProduct />} />
      </Routes>
    </>
  );
}

export default App;
