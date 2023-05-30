import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../../components/Button/Button";
import { FaHome, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "./Contact.css";

function Contact() {
  return (
    <React.Fragment>
      <div className="contact-banner">
        <div className="contact-banner-content">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <Container className="contact-form">
        <Row>
          <h3 className="contact-form-title">Get in Touch</h3>
          <Col xl={6} className="contact-address">
            <h2>Say Hello.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <ul className="address-list">
              <li>
                <FaHome />
                212 7th St SE, Lahore, Pakistan
              </li>
              <li>
                <AiOutlineMail />
                info@example.com
              </li>
              <li>
                <FaPhone />
                123-456-7890/91
              </li>
            </ul>
          </Col>
          <Col xl={6}>
            <form action="" method="post">
              <div className="input-group">
                <div className="form-group">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Name"
                    autoComplete="off"
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="textarea"
                  rows="8"
                  cols="8"
                  placeholder="Enter Message"
                />
              </div>
              <Button
                title={"Send"}
                className={"btn"}
                type="button"
                name="button"
              />
            </form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Contact;
