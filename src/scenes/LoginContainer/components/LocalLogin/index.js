import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Field, ToggleSwitch, Button, ErrorContainer } from "../../../../components";
import "./style.css";

class LocalLogin extends Component {

  state = {
    fields: {
      username: "",
      password: ""
    },
    error: false
  };

  onChange = ({ name, value }) => {
    const fields = this.state.fields;
    fields[name] = value;
    this.setState({ fields });
  };

  onSubmit=evt=>{
    const username = this.state.fields.username;
    const password = this.state.fields.password;
  
    evt.preventDefault();
    if(!this.validate())return;
    this.props.onLogin({username,password});
  }

  validate=()=>{
    const username = this.state.fields.username;
    const password = this.state.fields.password;
    const err=this.state.error;

    if (!username) return false;
    if (!password) return false;
    if (err) return false;
    //TODO:remove this when a server auth is added
    if(username!=='spotify' || password!=='spotify')
    {
    this.setState({error:true});
    return false;
    }

    return true;
  }

  render() {
    return (
        <form id="login-form">
          <Field
            placeholder="Username or email"
            name="username"
            value={this.state.fields.username}
            onChangeHandle={this.onChange}
          />
          <br />
          <Field
            placeholder="Password"
            name="password"
            value={this.state.fields.password}
            onChangeHandle={this.onChange}
          />
          <br />
          <ToggleSwitch>
          remember me
          </ToggleSwitch>
          {this.state.error?<ErrorContainer>The username or password is incorrect</ErrorContainer>:null}
          <Button btnStyle="btn btn-login" clickHandle={this.onSubmit}>
          log in
          </Button>
        </form>
    );
  }
}

LocalLogin.propTypes = {
  onLogin:PropTypes.func.isRequired,
};

export default LocalLogin;
