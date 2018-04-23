import React from "react";

import classes from "./SearchCoin.css";



const SearchCoin = props => {
  return (
    <div className={classes.SearchCoin}>
      <div className={classes.SearchCoinItem} onClick={props.clicked}>
        <span>
          <p> Coin name: </p> {props.name}
        </span>
        <span>
          <p> Coin Price Btc: </p> {props.priceBtc}
        </span>
        <span>
          <p> Coin Price USD: </p> {props.priceUsd}
        </span>
        <span>
          <p> 24 h Change: </p> {props.percent}
        </span>
      </div>
    </div>
  );
};

export default SearchCoin;
