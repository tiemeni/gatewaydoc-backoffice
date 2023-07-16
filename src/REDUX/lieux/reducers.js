import { SAVE_LIEUX } from "./types"

const initialState = {
    lieux: [],
    loading: false,
    error: null
};

const LieuxReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_LIEUX:
            return {
                ...state,
                lieux: action.payload,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}

export default LieuxReducer;