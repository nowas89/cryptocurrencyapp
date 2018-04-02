import React, { Component } from "react";

import Capitalization from "./components/Capitalization/Capitalization";
import CoinList from "./containers/CoinList/CoinList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Capitalization />
        <CoinList />
      </div>
    );
  }
}

export default App;
