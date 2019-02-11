import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props)
    this.state={
      balance: 0
    }
  }
  handleDepositClick(event){
    event.preventDefault()
    const inputBox = document.getElementById("amount")
    const inputValue = parseInt(this.inputBox.value)

    this.setState({
      balance: this.state.balance+inputValue
    })
  }
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" id="amount" ref={(input)=>this.inputBox=input}/>
        <input type="button" value="Deposit" onClick={this.handleDepositClick}/>
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
