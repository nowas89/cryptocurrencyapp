import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";

import classes from "./CoinList.css";
// import Button from "../../components/UI/Button/Button";
import CoinOnList from "../../components/CoinOnList/CoinOnList";
import SearchLive from "../SearchLive/SearchLive";

class CoinList extends Component {



  render() {
    let newArr = [];
    let trueList = this.props.itemOnList.filter(
      row1 => this.props.coin.filter(row2 => row1.name === row2.name).length > 0
    );
    
    trueList.map(item =>
      this.props.coin.filter(coin => {
        if (item.name === coin.name) {
          newArr.push(
            (item = {
              ...item,
              price_btc: coin.price_btc,
              price_usd: coin.price_usd,
              percent24: coin.percent_change_24h,
              updates: true
            })
          );
        }
        return newArr;
      })
    );
    console.log(newArr)



    return (
      <div className={classes.CoinList}>
        {newArr.length > 0
          ? newArr.map(item => (
              <CoinOnList
                key={item.name}
                name={item.name}
                priceBtc={item.price_btc}
                priceUsd={item.price_usd}
                percent={item.percent24}
                clicked={() => this.props.onCardOpening(item)}
                isOnList={item.isOnList}
                listIsOpen={item.listIsOpen}
              />
            ))
          : null}
        <SearchLive />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemOnList: state.itemOnList,
    coin: state.coins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCardOpening: item => dispatch(actions.openCard(item)),
    onUpdate: item => dispatch(actions.updateItems(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
