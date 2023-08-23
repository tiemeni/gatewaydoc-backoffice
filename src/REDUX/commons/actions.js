import * as types from "./types"

export const showPRDV = (data) => {
    return {
        type: types.SHOW_PRDV,
        data
    }
}

export const showPFRDV = (data, event=null) => {
    return {
        type: types.SHOW_PFRDV,
        data,
        event
    }
}
export const showDRDV = (data, rdv=null) => {
    return {
        type: types.SHOW_DRDV,
        data,
        rdv
    }
}

export const setIsConnected = (payload) => ({
    type: types.VALID_TOKEN,
    payload
});

export const getCivilities = payload => ({
    type: types.GET_CIVILITIES,
    payload
})