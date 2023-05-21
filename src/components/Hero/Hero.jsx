import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "./../Button/Button";
import { Link } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <Container className="hero-content">
        <h1>Shop With Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <Link to="/Shop">
          <Button title={"Shop Now"} className={"btn"} />
        </Link>
      </Container>
    </div>
  );
};
