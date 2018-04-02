const initialState = {
    coin: {

    },
    itemOnList: []
}


const reducer = (state = initialState, action) => {

    if (action.type === "pushCoinToItemList") {
        return {
            ...state
            // itemOnList: state.itemOnList.concat()

        }
    }


    return state
}

export default reducer