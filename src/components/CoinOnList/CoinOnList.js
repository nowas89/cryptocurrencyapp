import React from "react";

import classes from "./CoinOnList.css";
import OpenCard from "../../containers/OpenCard/OpenCard";
import Button from "../UI/Button/Button";

const CoinOnList = props => {
  return (
    <div className={classes.CoinOnList}>
      <div className={classes.CoinOnListItem} onClick={props.clicked}>
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
      <div>
        {props.isOnList ? (
          <span onClick={props.delete}>
            <Button val="X" />
          </span>
        ) : null}
      </div>
      {props.listIsOpen ? <OpenCard /> : null}
    </div>
  );
};

export default CoinOnList;
