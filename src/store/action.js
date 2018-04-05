import * as actionTypes from './actionTypes';


export const addItemToList = (item, name) => {
    return {
        type: actionTypes.ADD_ITEM_TO_LIST,
        item: item,
        name: name
    };
}
export const openCard = (item) => {
    return {
        type: actionTypes.OPEN_ITEM_CARD,
        item: item
    };
}