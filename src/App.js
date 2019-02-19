import React, { Component } from 'react'
import './index.css'
import Account from './Account/index'

class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="title">ECMASCRYPT Bank</div>
        </div>
        <div>
          <Account name="Checking"/>
        </div>
        <div>
          <Account name="Savings"/>
        </div>
      </div>
        )
    }
}

export default App