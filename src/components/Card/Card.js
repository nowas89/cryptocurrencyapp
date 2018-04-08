import React, { Component } from "react";

import classes from "./Card.css";

class Card extends Component {
  render() {
    let btcTotalValue = this.props.boughtValue * this.props.quantity,
      usdTotalValue = Number(btcTotalValue) * Number(this.props.btcUsdVal);
    return (
      <div className={classes.Card}>
        <div className={classes.Sections}>
          <h3> Coin Monitor </h3>
          <span>
            <h4> Coin Name: </h4> <h3>{this.props.name}</h3>
          </span>
          <span>
            <h4> Price: </h4> <h3>{this.props.btcPrice}</h3>
          </span>
          <span>
            <h4> Price USD: </h4> <h3>{this.props.usdPrice}</h3>
          </span>
          <span>
            <h4> 24 h % Change:</h4> <h3> {this.props.percent24} </h3>
          </span>
        </div>
        <div className={classes.Sections}>
          <h3> Holdings </h3>
          <div className={classes.CardCointainer}>
            <h4> Bought Value </h4>
            <input
              type="number"
              placeholder="type bought value"
              onChange={this.props.btcUpdateVal}
              value={this.props.boughtValue}
            />
          </div>
          <div className={classes.CardCointainer}>
            <h4> Quantity </h4>
            <input
              type="number"
              placeholder="type quantity"
              onChange={this.props.quantityVal}
              value={this.props.quantity}
            />
          </div>
          <div className={classes.CardCointainer}>
            <h4> USD BitCoin Value when was bought </h4>
            <input
              type="number"
              placeholder="type btc bought price"
              onChange={this.props.usdBoughtVal}
              value={this.props.btcUsdVal}
            />
          </div>
          <h4>
            Total BTC value:
            {this.props.boughtValue > 0 && this.props.quantity > 0
              ? btcTotalValue
              : 0}
          </h4>
          <h4>
            Total USD value:
            {btcTotalValue > 0 && this.props.btcUsdVal > 0 ? usdTotalValue : 0}
          </h4>
        </div>
        <div className={classes.Sections}>
          <h3> CRYPTO MONITOR </h3> <h4> Bought Value COIN </h4>
          <h4> TOTAL BTC VALUE - CURRENT BTC VALUE </h4>
          {btcTotalValue > 0
            ? btcTotalValue - this.props.btcPrice * this.props.quantity
            : 0}
          <h4> TOTAL USD VALUE - CURRENT USD VALUE </h4>
          {usdTotalValue > 0
            ? usdTotalValue - this.props.usdPrice * this.props.quantity
            : 0}
        </div>
      </div>
    );
  }
}

export default Card;
