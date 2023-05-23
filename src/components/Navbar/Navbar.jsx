import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import {GiHamburgerMenu} from "react-icons/gi"
import {VscChromeClose} from "react-icons/vsc"



const Navbar = () => {

const [mobile, setMobile] = useState(false)


  return (
    <>
  <nav className="nav-bar">
    

    <h3 className='logo'>Binco</h3>
    <ul className={mobile? 'nav-links-mobile': "nav-links"} onClick={()=>setMobile
    (false)}>
      <Link to="/"><li>Home</li></Link>
      <Link to="/About"><li>About</li></Link>
      <Link to="/Contact"><li>Contact</li></Link>
      <Link to="/Cart"><li>Cart</li></Link>
      <Link to="/Shop"><li>Shop</li></Link>
    </ul>
    <button className='mobile-menu-icon' onClick={() => setMobile
    (!mobile)}>
      {mobile? <VscChromeClose/> : <GiHamburgerMenu/> }
      
    </button>
    
  </nav>
</>
)};

export default Navbar;