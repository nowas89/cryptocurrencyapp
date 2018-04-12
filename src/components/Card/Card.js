import React, { Component } from "react";

import classes from "./Card.css";

class Card extends Component {
  render() {
    let btcTotalValue = this.props.boughtValue * this.props.quantity,
      usdTotalValue = this.props.btcUsdVal * this.props.quantity;
    return (
      <div className={classes.Card}>
        <button onClick={this.props.imBack}> BACK </button>
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
            <input
              type="number"
              placeholder="type bought value"
              onChange={this.props.btcUpdateVal}
              value={this.props.boughtValue}
            />
          </span>
          <span className={classes.CardCointainer}>
            <h2> Quantity </h2>
            <input
              type="number"
              placeholder="type quantity"
              onChange={this.props.quantityVal}
              value={this.props.quantity}
            />
          </span>
          <span className={classes.CardCointainer}>
            <h2> PRICE IN USD when was bought </h2>
            <input
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
            <h3>
              {btcTotalValue > 0
                ? (
                    this.props.btcPrice * this.props.quantity -
                    btcTotalValue
                  ).toFixed(8)
                : 0}
            </h3>
          </span>
          <span>
            <h2> {this.props.name} USD Profit </h2>
            <h3>
              {usdTotalValue > 0
                ? (
                    this.props.usdPrice * this.props.quantity -
                    usdTotalValue
                  ).toFixed(2)
                : 0}
            </h3>
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
