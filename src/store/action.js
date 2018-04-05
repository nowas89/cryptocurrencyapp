import * as actionTypes from "./actionTypes";

export const addItemToList = (item, name) => {
    return {
        type: actionTypes.ADD_ITEM_TO_LIST,
        item: item,
        name: name
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