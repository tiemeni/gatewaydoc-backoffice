import * as types from "./types";

const initalState = {
    groups: []
}

const GroupReducers = (state = initalState, action) => {
    switch (action.type) {
        case types.GET_ALL_GROUPS:
            return {
                ...state,
                groups: [...action.payload]
            }
        default:
            return state;
    }
}

export default GroupReducers