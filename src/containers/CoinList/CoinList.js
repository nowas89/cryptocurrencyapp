import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./CoinList.css";
// import Button from "../../components/UI/Button/Button";
// import Coin from "../Coin/Coin";
import SearchLive from "../SearchLive/SearchLive";

class CoinList extends Component {
  state = {
    itemOnList: []
  };

  render() {
    return (
      <div className={classes.CoinList}>
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
    pushCoinToList: () => dispatch({ type: "pushCoinToItemList" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
