import React from "react";
import "./Button.css";

export const Button = ({ title, onClick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};
