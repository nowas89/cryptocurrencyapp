import React from "react";

import classes from "./CoinOnList.css";
import OpenCard from "../../containers/OpenCard/OpenCard";
import Button from "../UI/Button/Button";

const CoinOnList = props => {
  return (
    <div className={classes.CoinOnList}>
      <div className={classes.CoinOnListItem} onClick={props.clicked}>
      <span className={classes.CoinOnListImage}>
          <img  src={props.icon} alt={props.id} />
        </span>
        <span>
          <h4>{props.name}</h4>
        </span>
        <span>{props.priceBtc}</span>
        <span>${props.priceUsd}</span>
        {props.percent > 0 ? (
          <span style={{ color: "rgba(109, 123, 252, 0.933)" }}>
            {props.percent}%
          </span>
        ) : (
          <span style={{ color: "red" }}>{props.percent}%</span>
        )}
      </div>
      <div>
        {props.isOnList ? (
          <span onClick={props.delete}>
            <Button val="X"/>
          </span>
        ) : null}
      </div>
      {props.listIsOpen ? <OpenCard /> : null}
    </div>
  );
};

export default CoinOnList;
