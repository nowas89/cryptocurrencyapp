import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";
import styled from "styled-components";

import classes from "./CoinList.css";
// import Button from "../../components/UI/Button/Button";
import CoinOnList from "../../components/CoinOnList/CoinOnList";
import SearchLive from "../SearchLive/SearchLive";

class CoinList extends Component {
  render() {
    return (
      <div className={classes.CoinList}>
        <InfoTable>
          <span>
            <p> Coin name: </p>
          </span>
          <span>
            <p> Coin Price Btc: </p>
          </span>
          <span>
            <p> Coin Price USD: </p>
          </span>
          <span>
            <p> 24 h Change: </p>
          </span>
        </InfoTable>
        {this.props.itemOnList.length > 0
          ? this.props.itemOnList.map(item => (
              <CoinOnList
                key={item.name}
                name={item.name}
                priceBtc={item.price_btc}
                priceUsd={item.price_usd}
                percent={item.percent24}
                clicked={() => this.props.onCardOpening(item)}
                isOnList={item.isOnList}
                listIsOpen={item.listIsOpen}
                delete={() => this.props.onDelete(item)}
              />
            ))
          : null}
        <SearchLive />
      </div>
    );
  }
}

const InfoTable = styled.div`
  width: 90%;
  height: 60px;
  outline: 1px solid red;
  display: flex;
  justify-content: space-around;
  padding-left: 1.8%;
  span {

    width: 100%;
  }
`;

const mapStateToProps = state => {
  return {
    itemOnList: state.itemOnList,
    coin: state.coins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCardOpening: item => dispatch(actions.openCard(item)),

    onDelete: item => dispatch(actions.deleteItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
