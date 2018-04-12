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
        itemOnList: newAr() ?
            state.itemOnList.concat(([...action.item] = {
                ...action.item,
                isOnList: true
            })) : state.itemOnList,

    };
};

// itemOnList: state.itemOnList.concat(action.item)

export const openCard = (state, action) => {
    return {
        ...state,
        itemOnList: [
            ([...action.item] = {
                ...action.item,
                listIsOpen: true
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

export const deliveryData = (state, action) => {
    console.log("delivery data is recived");
    return {
        ...state
    };
};

export const updateBTC = (state, action) => {
    console.log(action, action.e);
    return {
        ...state,
        itemOnList: [
            ([...action.item] = {
                ...action.item,
                boughtValue: action.e
            })
        ]
    };
};
export const updateUSD = (state, action) => {
    console.log(action, action.e);
    return {
        ...state,
        itemOnList: [
            ([...action.item] = {
                ...action.item,
                btcUsdVal: action.e
            })
        ]
    };
};
export const updateQuantity = (state, action) => {
    console.log(action, action.e);
    return {
        ...state,
        itemOnList: [
            ([...action.item] = {
                ...action.item,
                quantity: action.e
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
        default:
            return state;
    }
};

export default reducer;