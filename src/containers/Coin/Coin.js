import React, { Component } from "react";

import classes from "./Coin.css";
import CoinOnList from "../../components/CoinOnList/CoinOnList";
// import SearchLive from "../SearchLive/SearchLive";

class Coin extends Component {
  state = {
    isLoaded: false
  };
 
  onClickAction = () => {
    alert("asd");
  };
  render() {
    return (
      <div className={classes.Coin}>
        <CoinOnList
          name={this.state.coin.name}
          priceBtc={this.state.coin.price_btc}
          priceUsd={this.state.coin.price_usd}
          percent={this.state.coin.percent24}
          clicked={this.onClickAction}
        />
      </div>
    );
  }
}
export default Coin;
