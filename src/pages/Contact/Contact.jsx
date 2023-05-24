import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../../components/Button/Button";
import { FaHome, FaPhone } from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import "./Contact.css";

function Contact() {
  return (
    <React.Fragment>
      <div className="contact">
        <div className="content-text">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <Container className="form-group">
        <Row>
          <h3 className="content-title">Get in Touch</h3>
          <Col xl={8}>
            <form action="" method="post">
              <div className="input-wrapper">
                <div className="name-email-wrapper">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Name"
                    autoComplete="off"
                    autofocus
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                  />
                </div>
                <div className="subject-wrapper">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="textarea">
                  <textarea
                    name="textarea"
                    rows="8"
                    cols="8"
                    placeholder="Enter Message"
                  />
                </div>
                <Button
                  title={"Send"}
                  className={"btn btn-light"}
                  type="button"
                  name="button"
                />
              </div>
            </form>
          </Col>
          <Col xl={4} className="contact-address">
            <div>
              <FaHome />
              <span>Excellence Delivered Lahore(Exd) - Lahore</span>
            </div>
            <div>
              <FaPhone />
              <span>+1 253 565 2365</span>
            </div>
            <div>
              <AiOutlineMail />
              <span>support@colorlib.com</span>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Contact;
