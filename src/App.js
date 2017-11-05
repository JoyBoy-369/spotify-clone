import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./scenes/LoginContainer";
import Landing from "./scenes/LandingContainer";
import PrivateRoute from "./components/PrivateRoute";
import "./vendors/css/grid.css";
import "./vendors/css/ionicons.min.css";

const App = () =>
<Switch>
<PrivateRoute path="/landing" component={Landing}></PrivateRoute>
<Route path="/login" component={Login}></Route>
<Route exact path="/" render={() => <Redirect to="/landing" />} />
</Switch>

export default App;
