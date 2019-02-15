import React, { Component } from 'react';


export default class Account extends Component {
  inputBox=React.createRef()
  state = {
    balance: 0
  }

  handleDepositClick = (event) => {
    event.preventDefault()
    let amount = parseInt(this.inputBox.current.value)
    let newBalanace = this.state.balance + amount
    this.setState({
      balance: newBalanace
    })
  }

  handleWithdrawClick = (event) => {
    event.preventDefault()
    let amount = parseInt(this.inputBox.current.value)
    let newBalanace = this.state.balance - amount
    this.setState({
      balance: newBalanace
    })
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={this.inputBox} />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
      </div>
    )
  }
}

