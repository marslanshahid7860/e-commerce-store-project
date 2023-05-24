import React from "react";
import "./Footer.css";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";

function Footer() {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <a href="#">
              <CiFacebook />
            </a>
            <a href="#">
              <CiTwitter />
            </a>
            <a href="#">
              <CiYoutube />
            </a>
            <a href="#">
              <CiInstagram />
            </a>
          </div>

          <div class="row">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
