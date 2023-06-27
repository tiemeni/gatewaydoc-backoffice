import * as types from "./types";

const initalState = {
    users: []
}

const UserReducers = (state = initalState, action) => {
    switch (action.type) {
        case types.SAVE_USERS:
            return {
                ...state,
                users: [...action.payload]
            }
        default:
            return state;
    }
}

export default UserReducers