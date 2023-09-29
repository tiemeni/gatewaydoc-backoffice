import * as types from './types'

export const saveStructures = (payload) => {
    return {
        type: types.SAVE_STRUCTURES,
        payload
    }
}

export const getStructures = (payload) => {
    return {
        type: types.GET_STRUCTURES,
        payload
    }
}