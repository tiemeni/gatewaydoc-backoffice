import * as types from "./types"

const initialState = {
    civilities: []
}

const CommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESET_APP:
            return {
                ...state
            }
        case types.SHOW_PRDV:
            return {
                ...state,
                showPRDV: action.data
            }
        case types.SHOW_PFRDV:
            return {
                ...state,
                showPFRDV: action.data,
                event: action.event
            }
        case types.SHOW_DRDV:
            return {
                ...state,
                showDRDV: action.data,
                rdv: action.rdv
            }
        case types.VALID_TOKEN:
            return {
                ...state,
                isValidToken: action.payload
            }
        case types.GET_CIVILITIES:
            return {
                ...state,
                civilities: [...action.payload]
            }
        default: return state;
    }
}

export default CommonReducer