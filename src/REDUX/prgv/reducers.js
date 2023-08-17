import { SAVE_STEP, SAVE_DATA, SAVE_ERROR, SAVE_EVENT_PRACTIONNER_FILTER } from "./types"

const initialState = {
    steps: {
        0: { values: {} }
    },
    results: [], 
    praticienList: [], 
    motifList: [],    
    loading: false,
    error: null
};
//prise de rendez vous
const PrdvReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_STEP:
            return {
                ...state,
                steps: {...state.steps, [action.step]: action.payload},
            
            }
        case SAVE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SAVE_DATA:
            return {
                ...state,
                [action.key]: action.payload
            }
        case SAVE_EVENT_PRACTIONNER_FILTER:
            return {
                ...state,
                eventsPractionerId: action.payload,
                loading: false,
                error: null
            }
        default: return state;
    }
}

export default PrdvReducer;