import * as actionTypes from "./actionTypes";

const initialState = {
  itemOnList: []
};

export const addItemToList = (state, action) => {
// if(state.itemOnList[action.item].key)
console.log(action.item)
  return {
    ...state,
    itemOnList: state.itemOnList.concat(action.item)
  };
};


export const openCard = (state, action) => {


  return {
    ...state,
    itemOnList: [
    [...action.item] = {
      ...action.item,
isOnList: !action.item.isOnList
    }
  ]
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_LIST:
      return addItemToList(state, action);
    case actionTypes.OPEN_ITEM_CARD:
      return openCard(state, action);
    default:
      return state;
  }
};

export default reducer;
