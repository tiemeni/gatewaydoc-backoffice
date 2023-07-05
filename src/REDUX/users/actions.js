import * as types from './types'

export const saveUsers = (payload) => ({
    type: types.SAVE_USERS,
    payload
})

export const setUser = (payload) => ({
    type: types.SIGNIN,
    payload
})