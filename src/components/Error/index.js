import React from "react";
import "./style.css";

const Error = props => {
  if (props.error)
    <div className="error-container row">
      <div className="col span-1-of-4 icon">
        <i className="ion-ios-flag-outline" />
      </div>
      <div className="col span-3-of-4">
        <p>
          {props.value}
        </p>
      </div>
    </div>;
  else return null;
};

export default Error;
