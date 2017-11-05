import React from "react";
import { Redirect } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
import LocalLogin from "./components/LocalLogin";
import { External } from "components";
import logo from "images/logo.png";
import "./style.css";

class LoginContainer extends React.Component{

  state={
    shouldRedirect:false,
    loginInProgress:false
  }

    //TODO:talk to a server for authentication
  onLogin=({username,password})=>{
    //only to display the loader
      this.setState({
        shouldRedirect:true
      })
  }

  redirectPath = () => {
    const locationState = this.props.location.state;
    const pathname =
      locationState && locationState.from && locationState.from.pathname;
    return pathname || "/landing";
  };

  render(){
  if(this.state.shouldRedirect) {
      return <Redirect to={this.redirectPath()} />;
    }
    else {
      return(
    <section className="app">
    <header className="app--header">
      <img src={logo} className="app--logo" alt="logo" />
    </header>
    <div className="login">
    <SocialLogin>
    Log in with Facebook
    </SocialLogin>
    <p className="login-content">OR</p>
    <LocalLogin onLogin={this.onLogin}/>
    {//dummy links
    }
    <External>Sign up</External>
    <External> Reset password</External>
    <External>Settings</External>
    </div>
  </section>);
        }
    }
}

export default LoginContainer;
