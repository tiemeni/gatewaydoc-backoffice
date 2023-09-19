import { UPDATE_PAGiNQTION } from "./types"

const initialState = {
    user: {
        page: 0,
        rowsPerPage: 10
    }
};

const CivilitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PAGiNQTION:
            return {
                ...state,
                [action.model]: action.payload,
            }

        default:
            return state;
    }
}

export default CivilitiesReducer;