import { FETCH_MOTIFS_REQUEST, FETCH_MOTIFS_SUCCESS, FETCH_MOTIFS_FAILURE } from "./types"

const initialState = {
    data: null,
    loading: false,
    error: null
  };

const MotifsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOTIFS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case  FETCH_MOTIFS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }
        case FETCH_MOTIFS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default: return state;
    }
}

export default MotifsReducer;