import * as types from "./types";

const initalState = {
    patients: []
}

const PatientReducers = (state = initalState, action) => {
    switch (action.type) {
        case types.GET_ALL_PATIENTS:
            return {
                ...state,
                patients: [...action.payload]
            }
        default:
            return state;
    }
}

export default PatientReducers