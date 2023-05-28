import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <Container>
          <Row>
            <Col xl={3} md={6} sm={6} lg={3}>
              <h4 className="heading">Contact Us</h4>
              <div className="">
                <ul className="contact-us">
                  <li>Phone:+92 12345678901</li>
                  <li>Email: yourmail@example.com</li>
                  <li>Address: 1234 Street Name City, AA 99999</li>
                </ul>
              </div>
            </Col>
            <Col xl={3} md={6} sm={6} lg={3}>
              <h4 className="heading">Menu</h4>
              <ul className="menu">
                <Link to="/about" className="menu-links">
                  About
                </Link>
                <Link to="/shop" className="menu-links">
                  Shop
                </Link>
                <Link to="/contact" className="menu-links">
                  Contact
                </Link>
                <Link to="/cart" className="menu-links">
                  Cart
                </Link>
              </ul>
            </Col>
            <Col xl={3} md={6} sm={6} lg={3}>
              <h4 className="heading">MINISHOP</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium deserunt ullam dicta aut, at molestiae a asperiores
                hic ut fuga eius praesentium expedita vel inventore deleniti
                sapiente veritatis animi quasi?
              </p>
            </Col>
            <Col xl={3} md={6} sm={6} lg={3}>
              <h4 className="heading">Join Our Newsletter Now</h4>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <input type="email" placeholder="Enter Your Mail" />
            </Col>
          </Row>
        </Container>
      </footer>
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </p>
    </React.Fragment>
  );
};

export default Footer;
