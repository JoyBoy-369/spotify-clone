import React, { Component } from "react";
import "./style.css";

class Field extends Component {
  onChange = evt => {
    console.log("value changed");
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          value=""
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Field;
