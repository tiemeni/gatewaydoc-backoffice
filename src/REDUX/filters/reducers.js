import { UPDATE_FILTER } from "./types"

const initialState = {
};

const CivilitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILTER:
            return {
                ...state,
                [action.model]: action.payload,
            }

        default:
            return state;
    }
}

export default CivilitiesReducer;