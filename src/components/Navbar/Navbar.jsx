import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(storedCartItems.length);
  }, []);

  return (
    <nav className="navbar">
      <Container>
        <Link to="/" className="logo">
          MyStore
        </Link>
        <ul className="navbar-nav">
          <Link to="/" className="menu-link">
            Home
          </Link>
          <Link to="/shop" className="menu-link">
            Shop
          </Link>
          <Link to="/about" className="menu-link">
            About
          </Link>
          <Link to="/contact" className="menu-link">
            Contact
          </Link>
          {cartCount > 0 && (
            <Link to="/cart" className="menu-link">
              <FaShoppingCart />
              <span className="cart-badge">{cartCount}</span>
            </Link>
          )}
        </ul>
      </Container>
    </nav>
  );
};
