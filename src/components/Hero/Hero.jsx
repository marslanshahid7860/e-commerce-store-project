import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "./../Button/Button";
import { Link } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  return (
    <Container className="hero">
      <Row>
        <Col xl={12}>
          <div className="hero-container">
            <div className="hero-content">
              <h3 className="subtitle">Top Brands</h3>
              <h1>New Collection</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Link to="/Shop">
                <Button title={"Shop Now"} className={"btn btn-light"} />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
