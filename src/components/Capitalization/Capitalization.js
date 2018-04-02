import React, { Component } from "react";

import classes from "./Capitalization.css";

class Capitalization extends Component {
  state = {
    marketCap: 0
  };
  componentDidMount() {
    fetch("https://api.coinmarketcap.com/v1/global/")
      .then(res => res.json())
      .then(responseData =>
        this.setState({
          marketCap: responseData.total_market_cap_usd
        })
      );
  }

  render() {
    const result =
      this.state.marketCap.toString().replace(/(.{3})/g, "$1 ") + " $";

    return (
      <div className={classes.Capitalization}>
        <p>Capitalization: {result}</p>
      </div>
    );
  }
}

export default Capitalization;
