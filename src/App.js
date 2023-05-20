import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
