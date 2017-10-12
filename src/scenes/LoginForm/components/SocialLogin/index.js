import React from "react";
import { Button } from "../../../../components";
import "./style.css";

const SocialLogin = props =>
  <div className="row btn-social-fb">
    <Button content={props.content} />
  </div>;

export default SocialLogin;
