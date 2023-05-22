import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FeatureBox.css";
import { Button } from "../Button/Button";

export const FeatureBox = () => {
  return (
    <Container>
      <div className="feature-box">
        <div className="feature-content">
          <h2>New Collection</h2>
          <p>Men & Women</p>
          <Link to="/Shop">
            <Button title={"Shop Now"} className={"btn btn-light"} />
          </Link>
        </div>
      </div>
    </Container>
  );
};
