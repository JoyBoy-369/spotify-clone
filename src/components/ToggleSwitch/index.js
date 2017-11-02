import React, { Component } from "react";
import "./style.css";

const ToggleSwitch = props =>
  <div className="row toggle-switch">
    <div className="col span-1-of-2 label">
      {props.children}
    </div>
    <div className="col span-1-of-2 switch-container">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
    </div>
  </div>;

export default ToggleSwitch;
