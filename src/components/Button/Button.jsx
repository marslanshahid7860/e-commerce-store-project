import React from "react";
import "./Button.css";

export const Button = ({ title }) => {
  return (
    <React.Fragment>
      <button className="btn btn-light">{title}</button>
      
    </React.Fragment>
  );
};
