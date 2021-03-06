import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// import CoinOnList from "../../components/CoinOnList/CoinOnList";
import SearchCoin from "../../components/SearchCoin/SearchCoin";
import classes from "./SearchLive.css";
import * as actions from "../../store/action";

class SearchLive extends Component {
  state = {
    searchString: ""
  };

  componentDidMount() {
    this.props.onCoinsInit();
    setTimeout(() => {
      this.props.onAfterInitialCoins();
    }, 1000);
  }

  handleChange = e => {
    this.setState({ searchString: e.target.value.toLowerCase() });
  };

<<<<<<< HEAD
  addHandlerToList = id => {
    const asd = this.props.itemOnList.concat({ id: id });
    this.setState({
      ...this.state,
      itemOnList: asd
    });
    console.log(asd);
  };
=======
>>>>>>> at-work
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
      listIsOpen: false,
      date: new Date().getTime(),
      symbol: coin.symbol
    }));

    let searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      updatedArray = updatedArray.filter(coin => {
        return (
          coin.name.toLowerCase().includes(this.state.searchString) ||
          coin.symbol.toLowerCase().includes(this.state.searchString)
        );
      });
    }
    let visibleList = null;

    if (searchString !== "") {
      visibleList =
<<<<<<< HEAD
        this.state.isLoading && this.state.coin
          ? data.map(item => (
              <CoinOnList
                key={item.id}
=======
        this.props.isLoading && this.props.coins
          ? updatedArray.map(item => (
              <SearchCoin
                key={item.name}
>>>>>>> at-work
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
        <Inputa
          type="text"
          value={this.state.searchString}
          onChange={e => this.handleChange(e)}
          placeholder="Add currency"
        />

        {visibleList}
      </div>
    );
  }
}

const Inputa = styled.input`
  width: 150px;
  margin: 30px 0;
  border: none;
  border-bottom: 1px grey solid;
  font-size: 18px;
  font-weight: 100;
  padding: 4px;
  text-align: center;
  transition: 0.1s linear;

  &:focus {
    padding-bottom: 12px;
    outline: none;
  }
`;

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
    onCoinsInit: () => dispatch(actions.initCoins()),
    onAfterInitialCoins: () => dispatch(actions.afterInitialCoins())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchLive);
