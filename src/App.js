import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart";
import { Navbar } from "./components/Navbar/Navbar";
import ProductDetail from './pages/ProductDetail/ProductDetail';
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="product/:id" element={<ProductDetail />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
