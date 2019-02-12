import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props)
    this.inputBox=React.createRef()
    this.state={
      balance: 0
    }
    this.handleDepositClick = this.handleDepositClick.bind(this)
    this.handleWithdrawalClick = this.handleWithdrawalClick.bind(this)
  }
  handleDepositClick(event){
    event.preventDefault()
    const inputValue = parseInt(this.inputBox.current.value)
    this.saveBalance(this.state.balance+inputValue)
  }
  handleWithdrawalClick(event){
    event.preventDefault()
    const inputValue = parseInt(this.inputBox.current.value)
    if(!(this.state.balance-inputValue<0)){
      this.saveBalance(this.state.balance-inputValue)
    }
  }
  saveBalance(inputValue){
    if(!isNaN(inputValue)){
      this.setState({
        balance: inputValue
      })
    }
  }
  render() {
    let balanceClass = 'balance '
    if(this.state.balance===0){
      balanceClass+='zero'
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={this.inputBox}/>
        <input type="button" value="Deposit" onClick={this.handleDepositClick}/>
        <input type="button" value="Withdraw" onClick={this.handleWithdrawalClick}/>
      </div>
    )
  }
}

export default Account;
