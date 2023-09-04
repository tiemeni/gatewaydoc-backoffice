import { FETCH_CIVILITIES_REQUEST, FETCH_CIVILITIES_SUCCESS, FETCH_CIVILITIES_FAILURE } from "./types"

const initialState = {
    data: null,
    loading: false,
    error: null
  };

const CivilitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CIVILITIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case  FETCH_CIVILITIES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }
        case FETCH_CIVILITIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default CivilitiesReducer;