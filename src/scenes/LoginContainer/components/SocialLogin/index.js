import React from "react";
import { Button } from "components";
import "./style.css";

const SocialLogin = props =>
  <div className="row social-login">
    <Button btnStyle="btn btn-social-fb ">
    {props.children}
    </Button>
  </div>;

export default SocialLogin;
