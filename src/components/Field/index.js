import React, { Component } from "react";

class Field extends Component {
  onChange = evt => {
    console.log("value changed");
  };

  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          value="test"
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Field;
