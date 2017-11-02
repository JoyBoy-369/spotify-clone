import React from "react";
import "./style.css";

const Error = props =>
    <div className="error-container row">
      <div className="col span-1-of-4 icon">
        <i className="ion-ios-flag-outline" />
      </div>
      <div className="col span-3-of-4">
        <p>
          {props.children}
        </p>
      </div>
    </div>;

export default Error;
