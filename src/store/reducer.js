import * as actionTypes from "./actionTypes";

const initialState = {
  itemOnList: []
};

export const addItemToList = (state, action) => {
<<<<<<< HEAD
// if(state.itemOnList[action.item].key)
console.log(action.item.name, state.itemOnList)
=======
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

  console.log(newAr());
  console.log(state.itemOnList);
>>>>>>> a9deeed8e840eafd589f1553776f4ff6573f6eed
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
