import React, { Component } from "react";
import { connect } from "react-redux";

import CoinOnList from "../../components/CoinOnList/CoinOnList";
import classes from "./SearchLive.css";
import * as actions from "../../store/action";

class SearchLive extends Component {
  state = {
    searchString: "",
    isLoading: false,
    coin: {}
  };

  componentDidMount() {
    fetch("https://api.coinmarketcap.com/v1/ticker/")
      .then(res => res.json())
      .then(resData =>
        resData.map(coin => ({
          id: coin.id,
          name: coin.name,
          price_btc: coin.price_btc,
          price_usd: coin.price_usd,
          percent24: coin.percent_change_24h,
          isOnList: false
        }))
      )
      .then(coin => this.setState({ coin, isLoading: true }))
      .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({ searchString: e.target.value.toLowerCase() });
  };

  addHandlerToList = id => {
    const asd = this.state.itemOnList.concat({ id: id });
    this.setState({
      ...this.state,
      itemOnList: asd
    });

  };

  render() {
    let data = this.state.coin,
      searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      data = data.filter(coin => {
        return coin.name.toLowerCase().includes(this.state.searchString);
      });
    }

    let visibleList = null;

    if (searchString !== "") {
      visibleList =
        this.state.isLoading && this.state.coin
          ? data.map(item => (
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
          placeholder="Type here"
        />
        {visibleList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemOnList: state.itemOnList,
    coin: state.coin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItemToList: item => dispatch(actions.addItemToList(item))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchLive);
