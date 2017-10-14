import React, { Component } from "react";
import "./style.css";

const External = props =>
  <div className="row link">
    <a href="#">
      {props.linkName}
    </a>
  </div>;

export default External;
