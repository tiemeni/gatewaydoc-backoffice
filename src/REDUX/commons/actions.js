import { SHOW_PRDV, VALID_TOKEN } from "./types"

export const showPRDV = (data) => {
    return {
        type: SHOW_PRDV,
        data
    }
}

export const setIsConnected = (payload) => ({
    type: VALID_TOKEN,
    payload
})