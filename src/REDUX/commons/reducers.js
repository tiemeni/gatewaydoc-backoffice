import { RESET_APP, SHOW_PRDV, VALID_TOKEN } from "./types"

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
            case VALID_TOKEN:
                console.log(action.token)
                return {
                    ...state,
                    isValidToken: action.payload
                }
        default:
            return state;
    }
}

export default CommonReducer