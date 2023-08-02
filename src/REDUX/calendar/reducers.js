import { SAVE_EVENT, SAVE_EVENT_PRACTIONNER_FILTER } from "./types"

const initialState = {
    events: [],
    eventsPractionerId: [],
    loading: false,
    error: null
};

const CalendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_EVENT:
            return {
                ...state,
                events: action.payload,
                loading: false,
                error: null
            }
        case SAVE_EVENT_PRACTIONNER_FILTER:
            return {
                ...state,
                eventsPractionerId: action.payload,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}

export default CalendarReducer;