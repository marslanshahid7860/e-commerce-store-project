import React from "react";
import "./ProductCard.css";
import { Button } from "../Button/Button";

export const ProductCard = ({product}) => {
  return (
    <div className="product_list_wrapper">
      {/* <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="shirt_image"
      /> */}
      <div className="product-detail">
        <span>{product.title}</span>
        <span className="price">{product.price}</span>
        <Button title={"View Details"} className={"btn"} />
      </div>
    </div>
  );
};
