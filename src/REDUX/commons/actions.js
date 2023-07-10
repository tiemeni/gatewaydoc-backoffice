import * as types from "./types"

export const showPRDV = (data) => {
    return {
        type: types.SHOW_PRDV,
        data
    }
}

export const getCivilities = payload => ({
    type: types.GET_CIVILITIES,
    payload
})