import { FETCH_PROFESSION_REQUEST, FETCH_PROFESSION_SUCCESS, FETCH_PROFESSION_FAILURE } from "./types"

const initialState = {
    data: null,
    loading: false,
    error: null
  };

const ProfessionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROFESSION_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case  FETCH_PROFESSION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }
        case FETCH_PROFESSION_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default: return state;
    }
}

export default ProfessionsReducer;