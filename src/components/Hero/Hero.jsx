import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "./../Button/Button";
import { Link } from "react-router-dom";
import hero from "../../assets/images/free.png";
import "./Hero.css";

export const Hero = () => {
  return (
    <Container fluid className="hero">
      <Row>
        <Col xl={6}>
            <div className="hero-content">
              <h3 className="subtitle">Top Brands</h3>
              <h1>New Collection</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/Shop">
                <Button title={"Shop Now"} className={"btn btn-"} />
              </Link>
            </div>
        </Col>
        <Col xl={6}>
          <img src={hero} alt={"hero"} />
        </Col>
      </Row>
    </Container>
  );
};
