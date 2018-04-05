import * as actionTypes from "./actionTypes";

const initialState = {
  itemOnList: [],
  coins: [],
  isLoading: false
};

export const addItemToList = (state, action) => {
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
      ? state.itemOnList.concat(action.item)
      : state.itemOnList
  };
};

// itemOnList: state.itemOnList.concat(action.item)

export const openCard = (state, action) => {
  return {
    ...state,
    itemOnList: [
      ([...action.item] = {
        ...action.item,
        isOnList: !action.item.isOnList
      })
    ]
  };
};

export const initCoins = (state, action) => {
  return {
    ...state,
    coins: action.data,
    isLoading: true
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_LIST:
      return addItemToList(state, action);
    case actionTypes.OPEN_ITEM_CARD:
      return openCard(state, action);
    case actionTypes.COINS_INIT:
      return initCoins(state, action);
    default:
      return state;
  }
};

export default reducer;
