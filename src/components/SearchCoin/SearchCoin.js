import React from "react";

import classes from "./SearchCoin.css";

const SearchCoin = props => {
  return (
    <div className={classes.SearchCoin}>
      <div
        className={classes.SearchCoinItem}
        onClick={props.clicked}
        onMouseUp={props.reset}
      >
        <span className={classes.SearchCoinImage}>
          <img src={props.icon} alt={props.id} />
        </span>
        <span>
          <p> Coin name: </p>
          <p>{props.name}</p>
        </span>
        <span>
          <p> Coin Price Btc: </p>
          <p>{props.priceBtc}</p>
        </span>
        <span>
          <p> Coin Price USD: </p>
          <p>{props.priceUsd}</p>
        </span>
        <span>
          <p> 24 h Change: </p>
          <p>{props.percent}</p>
        </span>
      </div>
    </div>
  );
};

export default SearchCoin;
