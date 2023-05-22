import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaHome, FaShoppingCart, FaDesktop } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import "./SideNavbar.css";

export const SideNavbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h3 className="logo">
          <FiMenu />
          Categories
        </h3>
      </div>

      <ul className="navbar-nav">
        <li className="nav-links">
          <Link to="/">
            <FaHome />
            Home
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/">
            <FaShoppingCart />
            Shop
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/">
            <FaDesktop />
            Electronics
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/">
            <AiOutlineMail />
            Bag
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/">
            <BiInfoCircle />
            About
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/">
            <AiOutlineMail />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
