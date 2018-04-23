import React from "react";

import classes from "./CoinOnList.css";
import OpenCard from "../../containers/OpenCard/OpenCard";
import Button from "../UI/Button/Button";

const CoinOnList = props => {
  return (
    <div className={classes.CoinOnList}>
      <div className={classes.CoinOnListItem} onClick={props.clicked}>
        <span>{props.name}</span>
        <span>{props.priceBtc}</span>
        <span>{props.priceUsd}</span>
        <span>{props.percent}</span>
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
