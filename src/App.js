import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Shop" element={<Shop />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Cart" element={<Cart />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
