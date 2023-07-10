import * as types from './types'

export const savePatients = (payload) => ({
    type: types.GET_ALL_PATIENTS,
    payload
})