import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 0,
    };
    this.handleDepositClick = this.handleDepositClick.bind(this);
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this);
  }
  handleDepositClick(e) {
    // It is good practice to still prevent default behavior
    e.preventDefault();
    // set a local variable to the amount entered in the text box.
    console.log(this.inputBox.value);
    //this.setState({value: e.inputBox.value});
    const amount = parseInt(this.inputBox.value);
    // set a local variable to the new balance based off of the original balance + amount
    const newBalance = this.state.balance + amount;
    // set the balance to the newBalance using the setState method (necessary)
    console.log(newBalance);
    this.setState({
      balance: newBalance
    })
    // empty out the text box in this component
    this.inputBox.value = '';
  }
  handleWithdrawClick(e) {
    // It is good practice to still prevent default behavior
    e.preventDefault();
    // set a local variable to the amount entered in the text box.
    //const amount = parseInt(this.inputBox.value);
    const amount = parseInt(e.target.value);
    // set a local variable to the new balance based off of the original balance + amount
    const newBalance = this.state.balance + amount;
    // set the balance to the newBalance using the setState method (necessary)
    this.setState({
      balance: newBalance
    })
    // empty out the text box in this component
    this.inputBox.value = '';
  }
  render() {
    let balanceClass = ' balance';
    
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }
    

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
      </div>
    )
  }
}

export default Account;
