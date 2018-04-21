import * as actionTypes from "./actionTypes";

export const addItemToList = (item) => {
    return {
        type: actionTypes.ADD_ITEM_TO_LIST,
        item: item
    };
};
export const openCard = item => {
    return {
        type: actionTypes.OPEN_ITEM_CARD,
        item: item
    };
};
export const coinsInit = data => {
    return {
        type: actionTypes.COINS_INIT,
        data: data
    };
};
export const initCoins = () => {
    return dispatch => {
        fetch("https://api.coinmarketcap.com/v1/ticker/")
            .then(response => response.json())
            .then(data => dispatch(coinsInit(data)))
            .catch(error => {
                // set state for error
                console.log(error);
            });
    };
};

export const deliveryData = item => {
    return {
        type: actionTypes.DELIVERY_DATA,
        item: item
    }
}
export const updateBTC = (e, item) => {
    return {
        type: actionTypes.UPDATE_BTC,
        e: e.target.value,
        item: item
    }
}
export const updateUSD = (e, item) => {
    return {
        type: actionTypes.UPDATE_USD,
        e: e.target.value,
        item: item
    }
}
export const updateQuantity = (e, item) => {
    return {
        type: actionTypes.UPDATE_QUANTITY,
        e: e.target.value,
        item: item
    }
}
export const imBack = (item) => {
    return {
        type: actionTypes.CLICKED_BACK,
        item: item

    }
}
export const updateItems = (array) => {
    return {
        type: actionTypes.UPDATE_ITEMS,
        array: array

    }
}
export const afterInitialCoins = () => {
    return {
        type: actionTypes.AFTER_INITIAL_COINS
  

    }
}
