import { FETCH_MOTIF_REQUEST, FETCH_MOTIF_SUCCESS, FETCH_MOTIF_FAILURE } from "./types"

const initialState = {
    data: null,
    loading: false,
    error: null
  };

const MotifsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOTIF_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case  FETCH_MOTIF_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }
        case FETCH_MOTIF_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default MotifsReducer;