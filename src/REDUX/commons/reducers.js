import * as types from "./types"

const initialState = {
    civilities: [],
    planningMode: null
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
        case types.SHOW_MEDP:
            return {
                ...state,
                showEDP: action.data,
                passwordUser: action.passwordUser                
            }
        case types.SHOW_MFP:
            return {
                ...state,
                showFP: action.data,
                patient: action.patient                
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
        case types.SHOW_PRATICIEN_PLANNING:
            return {
                ...state,
                planningMode: action.payload
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