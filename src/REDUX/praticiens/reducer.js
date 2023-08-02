/**
 *  Un Reducer est une fonction qui manipule la valeur du state
 */
import {
  SAVE_ALL_PRATICIENS,
  SAVE_PRATICIENS_PER_JOB
} from "./types";

const initialState = {
  praticiens: [],
  praticienJob: [],
  loading: false,
  error: null,
};

const PraticiensReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ALL_PRATICIENS:
      return {
        ...state,
        praticiens: action.payload,
        loading: false,
        error: null,
      };
    case SAVE_PRATICIENS_PER_JOB:
      return {
        ...state,
        praticienJob: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default PraticiensReducer;