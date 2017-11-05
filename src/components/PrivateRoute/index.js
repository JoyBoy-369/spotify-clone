import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      //TODO: check if user is logged in
      true
        ? React.createElement(component, props)
        : <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location
              }
            }}
          />}
  />;


export default PrivateRoute;

