import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

const Button = props =>
  <button className={`${props.btnStyle} ui button `} onClick={props.clickHandle}>
  {props.children}
  </button>;

Button.PropTypes={
  clickHandle:PropTypes.func,
  btnStyle:PropTypes.string.isRequired
}

export default Button;
