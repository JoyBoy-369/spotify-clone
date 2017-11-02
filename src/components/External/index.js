import React, { Component } from "react";
import "./style.css";

const External = props =>
  <div className="row link">
    <a href="#">
     {props.children}
    </a>
  </div>;

export default External;
