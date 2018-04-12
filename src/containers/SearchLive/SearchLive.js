import React, { Component } from "react";
import { connect } from "react-redux";

import CoinOnList from "../../components/CoinOnList/CoinOnList";
import classes from "./SearchLive.css";
import * as actions from "../../store/action";

class SearchLive extends Component {
  state = {
    searchString: ""
  };

  componentDidMount() {
    this.props.onCoinsInit();
  }

  handleChange = e => {
    this.setState({ searchString: e.target.value.toLowerCase() });
  };

  render() {
    let updatedArray = this.props.coins.map(coin => ({
      id: coin.id,
      name: coin.name,
      price_btc: coin.price_btc,
      price_usd: coin.price_usd,
      percent24: coin.percent_change_24h,
      isOnList: false,
      boughtValue: 0,
      quantity: 0,
      btcUsdVal: 0,
      listIsOpen: false
    }));

    let searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      updatedArray = updatedArray.filter(coin => {
        return coin.name.toLowerCase().includes(this.state.searchString);
      });
    }

    let visibleList = null;

    if (searchString !== "") {
      visibleList =
        this.props.isLoading && this.props.coins
          ? updatedArray.map(item => (
              <CoinOnList
                key={item.name}
                name={item.name}
                priceBtc={item.price_btc}
                priceUsd={item.price_usd}
                percent={item.percent24}
                clicked={() => this.props.onAddItemToList(item)}
              />
            ))
          : null;
    }

    return (
      <div>
        <input
          className={classes.SearchLive}
          type="text"
          value={this.state.searchString}
          onChange={e => this.handleChange(e)}
          placeholder="Add currency"
        />{" "}
        {visibleList}{" "}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemOnList: state.itemOnList,
    coins: state.coins,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItemToList: item => dispatch(actions.addItemToList(item)),
    onCoinsInit: () => dispatch(actions.initCoins())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchLive);
