import React, { Component } from "react";
import "./style.css";

const ToggleSwitch = props =>
  <div className="row">
    <div className="col span-1-of-2">Remember me?</div>
    <div className="col span-1-of-2">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
    </div>
  </div>;
export default ToggleSwitch;
