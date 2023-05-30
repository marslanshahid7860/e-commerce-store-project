import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(storedCartItems.length);
  }, []);

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <nav className="navbar">
      <Container>
        <NavLink exact to="/" className="navbar-logo">
          MyStore
        </NavLink>
        <ul className={`navbar-menu ${click ? "active" : ""}`}>
          <NavLink exact to="/" className="navbar-menu-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/shop" className="navbar-menu-link" onClick={closeMenu}>
            Shop
          </NavLink>
          <NavLink to="/about" className="navbar-menu-link" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className="navbar-menu-link" onClick={closeMenu}>
            Contact
          </NavLink>
          {cartCount > 0 && (
            <NavLink to="/cart" className="navbar-menu-link" onClick={closeMenu}>
              <FaShoppingCart />
              <span className="navbar-cart-badge">{cartCount}</span>
            </NavLink>
          )}
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </Container>
    </nav>
  );
};
