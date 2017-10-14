import React, { Component } from "react";
import { Field, ToggleSwitch, Button } from "../../../../components";
import "./style.css";

class LocalLogin extends Component {
  render() {
    return (
      <div>
        <form id="login-form">
          <Field placeholder="Username or email" />
          <br />
          <Field placeholder="Password" />
          <br />
          <ToggleSwitch label="remember me" />
          <Button btnStyle="btn btn-login" content="log in" />
        </form>
      </div>
    );
  }
}

export default LocalLogin;
