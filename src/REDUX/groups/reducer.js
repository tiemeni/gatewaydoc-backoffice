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
            case types.FETCH_GROUPS_REQUEST:
                return {
                    ...state,
                    loading: true,
                }
            case  types.FETCH_GROUPS_SUCCESS:
                return {
                    ...state,
                    data: action.payload,
                    groups: action.payload,
                    loading: false,
                    error: null
                }
            case types.FETCH_GROUPS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: true
                }
            default:
                return state;
    }
}

export default GroupReducers