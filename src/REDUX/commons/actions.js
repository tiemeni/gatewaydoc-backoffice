import { SHOW_PRDV } from "./types"

export const showPRDV = (data) => {
    return {
        type: SHOW_PRDV,
        data
    }
}