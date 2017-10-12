import React, { Component } from "react";
import { Field, ToggleSwitch, Button } from "../../../../components";

class LocalLogin extends Component {
  render() {
    return (
      <div>
        <Field placeholder="login" />
        <br />
        <Field placeholder="password" />
        <br />
        <ToggleSwitch />
        <Button content="LOG IN" />
      </div>
    );
  }
}

export default LocalLogin;
