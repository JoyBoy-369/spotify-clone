import React, { Component } from "react";
import { Field, ToggleSwitch, Button, Error } from "../../../../components";
import "./style.css";

class LocalLogin extends Component {
  state = {
    fields: {
      name: "",
      email: ""
    },
    error: false
  };

  onChange = ({ name, value }) => {
    const fields = this.state.fields;
    fields[name] = value;
    this.setState({ fields });
  };

  render() {
    return (
      <div>
        <form id="login-form">
          <Field
            placeholder="Username or email"
            name="email"
            onChangeHandle={this.onChange}
          />
          <br />
          <Field
            placeholder="Password"
            name="password"
            onChangeHandle={this.onChange}
          />
          <br />
          <ToggleSwitch label="remember me" />
          <Error
            error={this.state.error}
            value="The username or password is incorrect"
          />
          <Button btnStyle="btn btn-login" content="log in" />
        </form>
      </div>
    );
  }
}

export default LocalLogin;
