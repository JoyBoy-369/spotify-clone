import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./style.css";

class Field extends Component {
  state = {
    value: this.props.value
  };

  onChange = evt => {
    const name=this.props.name;
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
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

Field.propTypes={
  onChangeHandle:PropTypes.func.isRequired,
  placeholder:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
}

export default Field;
