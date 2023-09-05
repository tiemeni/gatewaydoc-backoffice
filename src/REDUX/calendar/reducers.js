import { SAVE_EVENT, SAVE_EVENT_PRACTIONNER_FILTER, LOADING_EVENT_PRACTIONNER_FILTER_START } from "./types"

const initialState = {
    events: [],
    eventsPractionerId: [],
    selectedPractionerId: [],
    loading: false,
    error: null,
    loadingFilter: false
};

const CalendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_EVENT:
            return {
                ...state,
                events: action.payload,
                loading: false,
                loadingFilter: false,
                error: null
            }
        case SAVE_EVENT_PRACTIONNER_FILTER:
            return {
                ...state,
                eventsPractionerId: action.payload,
                loadingFilter: false,
                error: null
            }
        case LOADING_EVENT_PRACTIONNER_FILTER_START:
            return {
                ...state,
                loadingFilter: true,
            }
        default:
            return state;
    }
}

export default CalendarReducer;