import React, { Component } from "react";

import classes from "./Coin.css";
import CoinOnList from "../../components/CoinOnList/CoinOnList";
// import SearchLive from "../SearchLive/SearchLive";

class Coin extends Component {
  state = {
    isLoaded: false
  };
  // componentDidMount() {
  //   fetch("https://api.coinmarketcap.com/v1/ticker/")
  //     .then(res => res.json())
  //     .then(resData =>
  //       resData.map(coin =>
  //         this.setState({
  //           coin: {
  //             id: coin.id,
  //             name: coin.name,
  //             price_btc: coin.price_btc,
  //             price_usd: coin.price_usd,
  //             percent24: coin.percent_change_24h
  //           },
  //           isLoaded: true
  //         })
  //       )
  //     );
  // }
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
