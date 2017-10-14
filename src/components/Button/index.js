import React from "react";
import "./style.css";

const Button = props =>
  <button className={`${props.btnStyle}`}>
    {props.content}
  </button>;

export default Button;
