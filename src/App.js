import React, { Component } from 'react';
import logo from './images/logo.png';
import SocialLogin from './scenes/SocialLogin';
import './App.css';

const App=()=>
      <div className="App">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        <SocialLogin content="Login with facebook"/>
        </header>
      </div>
</div>

export default App;
