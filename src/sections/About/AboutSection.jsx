import React from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";
import { Button } from "../../components/Button/Button";
import aboutimg from "./../../assets/images/about-02.jpg";
import "./AboutSection.css";

function AboutSection(props) {
  return (
    <React.Fragment>
      <div className="about">
        <h2>{props.title}</h2>
      </div>
      <Container className="about-info">
        <Row>
          <Col xl={6} md={6} sm={12} className="about-content">
            <div className="text-container">
              <h3 className="section-sub-title">{props.subtitle}</h3>
              <h2 className="section-title">{props.title}</h2>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur
                eum inventore, rem maxime, nisi excepturi ipsam libero ratione
                adipisci alias eius vero vel!
              </p>
              <Link to="/">
                <Button title={"Learn More"} className={"btn-dark"} />
              </Link>
            </div>
          </Col>
          <Col xl={6} md={6} sm={12} className="image-container">
            <img src={aboutimg} alt={"About"} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default AboutSection;
