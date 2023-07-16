import {
  SAVE_ALL_PRATICIENS,
} from "./types";

const initialState = {
  praticiens: [],
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
    default:
      return state;
  }
};

export default PraticiensReducer;
