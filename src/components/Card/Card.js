import React, { Component } from "react";
import styled from 'styled-components'

import classes from "./Card.css";


class Card extends Component {
  render() {
    let btcTotalValue = this.props.boughtValue * this.props.quantity,
      usdTotalValue = this.props.btcUsdVal * this.props.quantity;
      let btcProfit = btcTotalValue > 0
      ? (
          this.props.btcPrice * this.props.quantity -
          btcTotalValue
        ).toFixed(8)
      : 0;
      let usdProfit = usdTotalValue > 0
      ? (
          this.props.usdPrice * this.props.quantity -
          usdTotalValue
        ).toFixed(2)
      : 0
    return (
      <div className={classes.Card}>

   
        <Btn onClick={this.props.imBack}> BACK </Btn>
        
        <div className={classes.Sections}>
          <h2> Coin Monitor </h2>
          <span>
            <h2> Coin Name: </h2> <h3>{this.props.name}</h3>
          </span>
          <span>
            <h2> Price: </h2> <h3>{this.props.btcPrice}</h3>
          </span>
          <span>
            <h2> Price USD: </h2> <h3>{this.props.usdPrice}</h3>
          </span>
          <span>
            <h2> 24 h % Change:</h2> <h3> {this.props.percent24} </h3>
          </span>
        </div>
        <div className={classes.Sections}>
          <h2> Holdings </h2>
          <span className={classes.CardCointainer}>
            <h2> PRICE IN BTC when was bought </h2>
            <InputField
              type="number"
              placeholder="type bought value"
              onChange={this.props.btcUpdateVal}
              value={this.props.boughtValue}
            />
          </span>
          <span className={classes.CardCointainer}>
            <h2> Quantity </h2>
            <InputField
              type="number"
              placeholder="type quantity"
              onChange={this.props.quantityVal}
              value={this.props.quantity}
            />
          </span>
          <span className={classes.CardCointainer}>
            <h2> PRICE IN USD when was bought </h2>
            <InputField
              type="number"
              placeholder="type btc bought price"
              onChange={this.props.usdBoughtVal}
              value={this.props.btcUsdVal}
            />
          </span>
          <span>
            <h2>Total BTC value:</h2>
            <h3>
              {this.props.boughtValue > 0 && this.props.quantity > 0
                ? btcTotalValue.toFixed(8)
                : 0}
            </h3>
          </span>
          <span>
            <h2>Total USD value:</h2>
            <h3>
              {btcTotalValue > 0 && this.props.btcUsdVal > 0
                ? usdTotalValue.toFixed(2)
                : 0}
            </h3>
          </span>
        </div>
        <div className={classes.Sections}>
          <h2> PROFIT MONITOR </h2>
          <span>
            <h2> {this.props.name} Profit</h2>
           
              {btcProfit > 0 
              ? <h3 style={{color: "rgba(109, 123, 252, 0.933)" }}>{btcProfit}</h3> 
              : <h3 style={{color: 'red'}}>{btcProfit}</h3> }

          </span>
          <span>
            <h2> {this.props.name} USD Profit </h2>
            
            {usdProfit > 0 
              ? <h3 style={{color: "rgba(109, 123, 252, 0.933)" }}>{usdProfit}</h3> 
              : <h3 style={{color: 'red'}}>{usdProfit}</h3> }
            
          </span>
        </div>
      </div>
    );
  }
}

const Btn = styled.button`
display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da;
    margin: 30px;
    &:hover{
      transform: scale(1.1);
    }

`

const InputField = styled.input`
position: absolute;
right: 0;
top: 12px;
  width: 150px;
hight: 30px;
  border: none;
  border-bottom: 1px grey solid;
  font-size: 18px;
  font-weight: 100;
  padding: 4px;
  text-align: center;
  transition: 0.1s linear;

  &:focus {
    padding-bottom: 12px;
    outline: none;
   
  }
`;

export default Card;
