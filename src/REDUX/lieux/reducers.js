import { FETCH_LIEUX_REQUEST, FETCH_LIEUX_SUCCESS, FETCH_LIEUX_FAILURE } from "./types"

const initialState = {
    data: null,
    loading: false,
    error: null
  };

const LieuxReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIEUX_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case  FETCH_LIEUX_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }
        case FETCH_LIEUX_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default LieuxReducer;