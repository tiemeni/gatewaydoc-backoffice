import { RESET_APP, SHOW_PRDV } from "./types"

const initialState = {}

const CommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_APP:
            return {
                ...state
            }
        case SHOW_PRDV:
            return {
                ...state,
                showPRDV: action.data
            }
        default:
            return state;
    }
}

export default CommonReducer