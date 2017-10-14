import React from "react";
import { Button } from "../../../../components";
import "./style.css";

const SocialLogin = props =>
  <div className="row social-login">
    <Button btnStyle="btn btn-social-fb " content={props.content} />
  </div>;

export default SocialLogin;
