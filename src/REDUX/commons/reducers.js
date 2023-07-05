import * as types from "./types"

const initialState = {
    civilities: []
}

const CommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESET_APP:
            return {
                ...state
            }
        case types.SHOW_PRDV:
            return {
                ...state,
                showPRDV: action.data
            }
        case types.GET_CIVILITIES:
            return {
                ...state,
                civilities: [...action.payload]
            }
        default:
            return state;
    }
}

export default CommonReducer