import * as types from "./types";

const initalState = {
    users: [],
    connected_user: null,
}

const UserReducers = (state = initalState, action) => {
    switch (action.type) {
        case types.SAVE_USERS:
            return {
                ...state,
                users: [...action.payload]
            }
        case types.SIGNIN:
            return {
                ...state,
                connected_user: action.payload
            }
        default:
            return state;
    }
}

export default UserReducers