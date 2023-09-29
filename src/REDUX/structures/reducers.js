import * as types from "./types";

const initalState = {
    structutres: [],
}

const StructutresReducers = (state = initalState, action) => {
    switch (action.type) {
        case types.SAVE_STRUCTURES:
            return {
                ...state,
                structutres: action.payload
            }
        case types.GET_STRUCTURES:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default StructutresReducers