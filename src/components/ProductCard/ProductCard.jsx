import React from "react";
import "./ProductCard.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <React.Fragment>
      <div className="product-card-wrapper">
        <img src={product.image} alt={"product"} />
        <div className="card-details">
          <span className="product-category">{product.category}</span>
          <p className="product-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <span className="product-price">${product.price}</span>
          <Link to={`/product/${product.id}`}>
            <Button title={"View Details"} className={"btn btn-custom"} />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
