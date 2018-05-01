import * as actionTypes from "./actionTypes";

const initialState = {
  itemOnList: [],
  coins: [],
  isLoading: false
};

export const addItemToList = (state, action) => {
  console.log(action.item.alerts);
  const newAr = () => {
    if (
      state.itemOnList.length > 0 &&
      state.itemOnList.find(user => user.name === action.item.name)
    ) {
      return false;
    } else {
      return true;
    }
  };
  if (!newAr()) {
    alert("That Coin Was Added early!!");
  }

  return {
    ...state,
    itemOnList: newAr()
      ? state.itemOnList.concat(
          ([...action.item] = {
            ...action.item,
            isOnList: true
          })
        )
      : state.itemOnList
  };
};

export const openCard = (state, action) => {
  return {
    ...state,
    itemOnList: state.itemOnList.map(item => {
      if (item.id === action.item.id) {
        return {
          ...item,
          listIsOpen: true
        };
      } else {
        return item;
      }
    })
  };
};

export const initCoins = (state, action) => {
  return {
    ...state,
    coins: action.data,
    isLoading: true
  };
};

export const afterInitialCoins = (state, action) => {
  let stc = state.coins;
  let sti = state.itemOnList;
  let newArr = [];
  if (sti.length > 0 && stc.length > 0) {
    let trueList = sti.filter(
      row1 => stc.filter(row2 => row1.name === row2.name).length > 0
    );

    trueList.map(item =>
      stc.filter(coin => {
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
  }

  return {
    ...state,
    itemOnList: newArr
  };
};

export const deliveryData = (state, action) => {
  return {
    ...state
  };
};

export const updateBTC = (state, action) => {
  return {
    ...state,
    itemOnList: state.itemOnList.map(item => {
      if (item.id === action.item.id) {
        return {
          ...item,
          boughtValue: action.e
        };
      } else {
        return item;
      }
    })
  };
};
export const updateUSD = (state, action) => {
  return {
    ...state,
    itemOnList: state.itemOnList.map(item => {
      if (item.id === action.item.id) {
        return {
          ...item,
          btcUsdVal: action.e
        };
      } else {
        return item;
      }
    })
  };
};
export const updateQuantity = (state, action) => {
  return {
    ...state,
    itemOnList: state.itemOnList.map(item => {
      if (item.id === action.item.id) {
        return {
          ...item,
          quantity: action.e
        };
      } else {
        return item;
      }
    })
  };
};
export const imBack = (state, action) => {
  return {
    ...state,
    itemOnList: state.itemOnList.map(item => {
      if (item.id === action.item.id) {
        return {
          ...item,
          listIsOpen: false
        };
      } else {
        return item;
      }
    })
  };
};
export const deleteItem = (state, action) => {
  let arrayAfterDelete = state.itemOnList.filter(item => item !== action.item);
  return {
    ...state,
    itemOnList: arrayAfterDelete
  };
};
export const addAlert = (state, action) => {
  const percentFromOption = Number(action.e.target.value / 100);
  const alertValue = Number(action.price * percentFromOption);
  const newAlert = [
(Number(action.price) + alertValue).toFixed(7)]

 
  const updatedAlerts = action.alerts.concat(newAlert);
  console.log(updatedAlerts);

  return {
    ...state,
    itemOnList: state.itemOnList.map(item => {
      if (item.name === action.name) {
        return {
          ...item,
          alerts: updatedAlerts
        };
      } else {
        return item;
      }
    })
  };
};
export const removeAlert = (state, action) => {

let removeAlert = action.item.alerts.filter(item => item !== action.alert)
console.log(removeAlert)


return {
    ...state,
    itemOnList: state.itemOnList.map(item => {
        if (item.name === action.name) {
          return {
            ...item,
            alerts: removeAlert
          };
        } else {
          return item;
        }
      })
}

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_LIST:
      return addItemToList(state, action);
    case actionTypes.OPEN_ITEM_CARD:
      return openCard(state, action);
    case actionTypes.COINS_INIT:
      return initCoins(state, action);
    case actionTypes.DELIVERY_DATA:
      return deliveryData(state, action);
    case actionTypes.UPDATE_USD:
      return updateUSD(state, action);
    case actionTypes.UPDATE_BTC:
      return updateBTC(state, action);
    case actionTypes.UPDATE_QUANTITY:
      return updateQuantity(state, action);
    case actionTypes.CLICKED_BACK:
      return imBack(state, action);
    case actionTypes.AFTER_INITIAL_COINS:
      return afterInitialCoins(state, action);
    case actionTypes.ON_DELETE:
      return deleteItem(state, action);
    case actionTypes.ADD_ALERT:
      return addAlert(state, action);
    case actionTypes.REMOVE_ALERT:
      return removeAlert(state, action);

    default:
      return state;
  }
};

export default reducer;
