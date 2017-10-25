import React, { Component } from "react";
import logo from "./images/logo.png";
import Login from "./scenes/LoginForm";
import "./vendors/css/grid.css";
import "./vendors/css/ionicons.min.css";
import "./App.css";

const App = () =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Login />
  </div>;

export default App;
