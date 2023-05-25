import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Container>
        <Link to="/" className="logo">
          Store
        </Link>
        <ul className="navbar-nav">
          <Link to="/" className="menu-link">Home</Link>
          <Link to="/shop" className="menu-link">Shop</Link>
          <Link to="/about" className="menu-link">About</Link>
          <Link to="/contact" className="menu-link">Contact</Link>
          <Link to="/cart" className="menu-link">Cart</Link>
        </ul>
      </Container>
    </nav>
  );
};
