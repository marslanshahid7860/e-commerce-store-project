import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FeatureBox.css";
import { Button } from "../Button/Button";

export const FeatureBox = () => {
  return (
    <Container fluid className="feature-box">
      <Container>
        <div className="feature-content">
          <div className="feature-text">
            <h2 className="feature-heading">Hurry Up!</h2>
            <p className="feature-paragraph">
              Buy Product At 20% Discount, Use Code Off20
            </p>
            <Link to="/Shop">
              <Button title={"Shop Now"} className={"btn"} />
            </Link>
          </div>
        </div>
      </Container>
    </Container>
  );
};
