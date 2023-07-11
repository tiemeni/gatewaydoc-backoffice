/**
 *  Un Reducer est une fonction qui manipule la valeur du state
 */
import {
  FETCH_PRATICIENS_REQUEST,
  FETCH_PRATICIENS_SUCCESS,
  FETCH_PRATICIENS_FAILURE,
} from "./types";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const PraticiensReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRATICIENS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRATICIENS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_PRATICIENS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default PraticiensReducer;
