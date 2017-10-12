import React, { Component } from "react";
import logo from "./images/logo.png";
import Login from "./scenes/LoginForm";
import "./App.css";
import "./vendors/css/grid.css";

const App = () =>
  <div className="App">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Login />
    </div>
  </div>;

export default App;
