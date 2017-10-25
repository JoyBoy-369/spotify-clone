import React, { Component } from "react";
import "./style.css";

class Field extends Component {
  state = {
    value: this.props.value
  };

  onChange = evt => {
    const name = this.props.name;
    const value = evt.target.value;

    this.setState({ value });

    this.props.onChangeHandle({ name, value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Field;
