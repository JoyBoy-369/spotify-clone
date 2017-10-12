import React from "react";
import SocialLogin from "./components/SocialLogin";
import LocalLogin from "./components/LocalLogin";
import { External } from "../../components/";

const LoginForm = props =>
  <div>
    <SocialLogin content="Login with Facebook" />
    <p className="login-content">OR</p>
    <LocalLogin />
    <External linkName="Sign up" />
    <External linkName="Reset password" />
  </div>;

export default LoginForm;
