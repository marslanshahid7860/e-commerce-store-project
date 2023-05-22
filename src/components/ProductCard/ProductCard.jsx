import React from "react";
import "./ProductCard.css";
import { Button } from "../Button/Button";

export const ProductCard = ({product}) => {
  return (
    <React.Fragment>
      <div className="product_list_wrapper">
        <img src={product.image} alt={"product"} />
        <div className="product-detail">
          <span className="category">{product.category}</span>
          <span className="price">${product.price}</span>
          <Button title={"View Details"} className={"btn"} />
        </div>
      </div>
    </React.Fragment>
  );
};
