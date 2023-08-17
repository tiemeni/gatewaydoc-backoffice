import {
  FETCH_PRATICIENS_REQUEST,
  FETCH_PRATICIENS_SUCCESS,
  FETCH_PRATICIENS_FAILURE,
  SAVE_PRATICIENS_PER_JOB,
  SAVE_ALL_PRATICIENS
} from "./types";

const initialState = {
  praticiens: [],
  praticienJob: [],
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
    case SAVE_PRATICIENS_PER_JOB:
      return {
        ...state,
        praticienJob: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_PRATICIENS_SUCCESS:
      return {
        ...state,
        praticiens: action.payload,
        loading: false,
        error: null,
      };
    case SAVE_ALL_PRATICIENS:
      return {
        ...state,
        praticiens: action.payload,
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