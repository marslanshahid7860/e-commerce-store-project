import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  // Fetch the cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if there are any items in the cart
  const hasItemsInCart = cartItems.length > 0;

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
          {hasItemsInCart && (
            <Link to="/cart" className="menu-link">
              <FaShoppingCart />
              <span className="cart-badge">{cartItems.length}</span>
            </Link>
          )}
        </ul>
      </Container>
    </nav>
  );
};
