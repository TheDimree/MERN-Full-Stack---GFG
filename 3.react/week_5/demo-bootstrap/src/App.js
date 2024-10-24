import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <section className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="product-detail/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}
