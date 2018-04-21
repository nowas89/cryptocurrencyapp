import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";

import classes from "./OpenCard.css";
import Card from "../../components/Card/Card";

class OpenCard extends Component {
  render() {
    console.log(this.props.itemFromList);
    return (
      <div className={classes.OpenCard}>
        {this.props.itemFromList.map(item => (
          item.listIsOpen && item.updates ?
          <Card
            key={item.name}
            name={item.name}
            btcPrice={item.price_btc}
            usdPrice={item.price_usd}
            percent24={item.percent24}
            btcUpdateVal={e => this.props.onBtcBoughtVal(e, item)}
            usdBoughtVal={e => this.props.onUpdateUsdBoughtVal(e, item)}
            quantityVal={e => this.props.onUpdateQuantity(e, item)}
            quantity={item.quantity}
            boughtValue={item.boughtValue}
            btcUsdVal={item.btcUsdVal}
            imBack={() => this.props.onTouchingBack(item)}
          />
          : null
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemFromList: state.itemOnList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBtcBoughtVal: (e, item) => dispatch(actions.updateBTC(e, item)),
    onUpdateQuantity: (e, item) => dispatch(actions.updateQuantity(e, item)),
    onUpdateUsdBoughtVal: (e, item) => dispatch(actions.updateUSD(e, item)),
    onTouchingBack: item => dispatch(actions.imBack(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenCard);
