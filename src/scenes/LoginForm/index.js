import React from "react";
import SocialLogin from "./components/SocialLogin";
import LocalLogin from "./components/LocalLogin";
import { External } from "../../components/";
import "./style.css";

const LoginForm = props =>
  <div>
    <SocialLogin content="Log in with Facebook" />
    <p className="login-content">OR</p>
    <LocalLogin />
    <External linkName="Sign up" />
    <External linkName="Reset password" />
    <External linkName="Settings" />
  </div>;

export default LoginForm;
