import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
