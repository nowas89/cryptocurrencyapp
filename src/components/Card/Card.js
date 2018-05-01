import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/action";

class Card extends Component {
  // handleChange = e => {
  //   console.log(e.target.value);
  //   const percentFromOption = Number(e.target.value / 100);
  //   const alertValue = Number(this.props.btcPrice * percentFromOption);
  //   const newAlert = (Number(this.props.btcPrice) + alertValue).toFixed(7);
  // };

  render() {
    let btcTotalValue = this.props.boughtValue * this.props.quantity,
      usdTotalValue = this.props.btcUsdVal * this.props.quantity;
    let btcProfit =
      btcTotalValue > 0
        ? (this.props.btcPrice * this.props.quantity - btcTotalValue).toFixed(8)
        : 0;
    let usdProfit =
      usdTotalValue > 0
        ? (this.props.usdPrice * this.props.quantity - usdTotalValue).toFixed(2)
        : 0;

    return (
      <CardStyle>
        <CardWrapper>
          <FirstContainer>
            <Btn onClick={this.props.imBack}> BACK </Btn>
          </FirstContainer>
          <Wrapper>
            <h2> Coin Monitor </h2>

            <span>
              <h2> Coin Name: </h2> <h3>{this.props.name}</h3>
            </span>
            <span>
              <h2> Price: </h2> <h3>{this.props.btcPrice}</h3>
            </span>
            <span>
              <h2> Price USD: </h2> <h3>{this.props.usdPrice}</h3>
            </span>
            <span>
              <h2> 24 h % Change:</h2> <h3> {this.props.percent24} </h3>
            </span>
          </Wrapper>
          <Wrapper>
            <h2> Holdings </h2>
            <span>
              <h2> PRICE IN BTC when was bought </h2>
              <InputField
                type="number"
                placeholder="type bought value"
                onChange={this.props.btcUpdateVal}
                value={this.props.boughtValue}
              />
            </span>
            <span>
              <h2> Quantity </h2>
              <InputField
                type="number"
                placeholder="type quantity"
                onChange={this.props.quantityVal}
                value={this.props.quantity}
              />
            </span>
            <span>
              <h2> PRICE IN USD when was bought </h2>
              <InputField
                type="number"
                placeholder="type btc bought price"
                onChange={this.props.usdBoughtVal}
                value={this.props.btcUsdVal}
              />
            </span>
            <span>
              <h2>Total BTC value:</h2>
              <h3>
                {this.props.boughtValue > 0 && this.props.quantity > 0
                  ? btcTotalValue.toFixed(8)
                  : 0}
              </h3>
            </span>
            <span>
              <h2>Total USD value:</h2>
              <h3>
                {btcTotalValue > 0 && this.props.btcUsdVal > 0
                  ? usdTotalValue.toFixed(2)
                  : 0}
              </h3>
            </span>
          </Wrapper>
          <Wrapper>
            <h2> PROFIT MONITOR </h2>
            <span>
              <h2> {this.props.name} Profit</h2>

              {btcProfit > 0 ? (
                <h3 style={{ color: "rgba(109, 123, 252, 0.933)" }}>
                  {btcProfit}
                </h3>
              ) : (
                <h3 style={{ color: "red" }}>{btcProfit}</h3>
              )}
            </span>
            <span>
              <h2> {this.props.name} USD Profit </h2>

              {usdProfit > 0 ? (
                <h3 style={{ color: "rgba(109, 123, 252, 0.933)" }}>
                  {usdProfit}
                </h3>
              ) : (
                <h3 style={{ color: "red" }}>{usdProfit}</h3>
              )}
            </span>
          </Wrapper>
          <Alert>
            <h2> ALERT </h2>
            <span>
              <select
                onChange={e =>
                  this.props.onAddAlert(
                    e,
                    this.props.btcPrice,
                    this.props.name,
                    this.props.alerts
                  )
                }
              >
                <option value="0">0</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
                <option value="60">60</option>
                <option value="65">65</option>
                <option value="70">70</option>
                <option value="75">75</option>
                <option value="80">80</option>
                <option value="85">85</option>
                <option value="90">90</option>
                <option value="95">95</option>
                <option value="100">100</option>
              </select>
            </span>
            <List>
              {this.props.itemOnList.map(
                item =>
                  item.name === this.props.name
                    ? item.alerts.map(alert => (
                        <ListItem key={alert}>
                          <h2>Alert on </h2>
                          <h3>{alert}</h3>
                          <h3 style={{ color: "red" }}>
                            {(
                              Number(this.props.btcPrice) - Number(alert)
                            ).toFixed(7)}
                          </h3>
                          {alert === this.props.btcPrice
                            ? alert(alert, " is reached")
                            : null}
                          <button
                            onClick={() =>
                              this.props.onRemoveAlert(
                                alert,
                                this.props.name,
                                item
                              )
                            }
                          >
                            X
                          </button>
                        </ListItem>
                      ))
                    : null
              )}
            </List>
          </Alert>
        </CardWrapper>
      </CardStyle>
    );
  }
}
const CardStyle = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 140vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  overflow: hidden;

  @media (max-width: 800px) {
    height: 120%;
  }
`;

const CardWrapper = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const FirstContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  height: 5%;
  width: 100%;
  @media (max-width: 600px) {
    height: 5%;
  }
`;

const Btn = styled.button`
  position: absolute;
  top: 8px;
  display: inline-block;
  width: 100px;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 600px) {
    height: 20px;
    width: 50px;
    font-size: 10px;
    padding: 2px 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justfy-content: center;
  box-sizing: border-box;
  padding: 10px 10px;
  outline: 0.3px solid rgba(204, 204, 204, 0.2);
  height: 20%;
  span {
    position: relative;
    display: flex;
  }
  h3 {
    width: 135px;
    position: absolute;
    right: 0px;
    top: 17px;
    margin: auto;
    font-weight: 400;

    font-size: 17px;
    @media (max-width: 600px) {
      font-size: 12px;
      width: 80px;
    }
  }
  h2 {
    font-size: 17px;
    color: rgb(70, 70, 70);
    font-weight: 100;
    @media (max-width: 600px) {
      font-size: 12px;
      width: 80px;
    }
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 2px;
  }
`;

const InputField = styled.input`
  position: absolute;
  right: 0;
  top: 12px;
  width: 120px;
  hight: 30px;
  border: none;
  border-bottom: 1px grey solid;
  font-size: 18px;
  font-weight: 400;
  padding: 4px;
  text-align: center;
  transition: 0.1s linear;
  @media (max-width: 600px) {
    font-size: 12px;
    width: 80px;
    right: 5px;
  }
  &:focus {
    outline: none;
  }
`;

const Alert = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  width: 100%;

  select {
    box-sizing: border-box;

    margin: 10px;
    height: 30px;
    width: 70px;
    font-size: 13px;
    text-align: center;
    background: white;
    border: none;
    outline: 0.3px solid rgba(204, 204, 204, 0.3);
    @media (max-width: 600px) {
      height: 20px;
    }
  }

  h2 {
    font-size: 17px;
    color: rgb(70, 70, 70);
    font-weight: 100;
    @media (max-width: 600px) {
      font-size: 12px;
      width: 80px;
    }
  }
  @media (max-width: 600px) {
    font-size: 12px;
    width: 80px;
  }
`;
const List = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0 auto;
  h3 {
    font-weight: 100;
    font-size: 17px;
    margin-left: 10px;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 40px;
  h3 {
    font-weight: 400;
  }
  button {
    display: none;
  }
  &:hover {
    color: #49a3ff;

    button {
      display: flex;
      text-align: center;
      height: 21px;
      width: 21px;
      border: none;
      outline: none;
    }
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

const mapStateToProps = state => {
  return {
    itemOnList: state.itemOnList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddAlert: (e, price, name, alerts) =>
      dispatch(actions.addAlert(e, price, name, alerts)),
    onRemoveAlert: (alert, name, item) =>
      dispatch(actions.removeAlert(alert, name, item))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
