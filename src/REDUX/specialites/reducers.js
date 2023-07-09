import * as types from "./types";

const initalState = {
    specialites: [],
}

const specialitiesReducers = (state = initalState, action) => {
    switch (action.type) {
        case types.SAVE_SPECIALITIES:
            return {
                ...state,
                specialites: action.payload
            }
        default:
            return state;
    }
}

export default specialitiesReducers