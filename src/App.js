import React, { Component } from 'react';
import logo from './ga.png';
import Account from './Account';

export default class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <div>
        <Account name="Checking"/>
        <Account name="Savings"/>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}


