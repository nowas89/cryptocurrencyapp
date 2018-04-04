import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";

import classes from "./CoinList.css";
// import Button from "../../components/UI/Button/Button";
import CoinOnList from "../../components/CoinOnList/CoinOnList";
import SearchLive from "../SearchLive/SearchLive";

class CoinList extends Component {
  
  render() {
    console.log(this.props.itemOnList)
    return (
      <div className={classes.CoinList}>
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
    itemOnList: state.itemOnList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCardOpening: item => dispatch(actions.openCard(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
