import { SAVE_MOTIFS } from "./types"

const initialState = {
    motifs: [],
    loading: false,
    error: null
};

const MotifsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_MOTIFS:
            return {
                ...state,
                motifs: action.payload,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}

export default MotifsReducer;