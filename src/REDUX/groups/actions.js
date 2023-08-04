import * as types from './types'

export const saveGroups = (payload) => ({
    type: types.GET_ALL_GROUPS,
    payload
})

export const loading = () => ({ type: types.FETCH_GROUPS_REQUEST });
export const loadingError = (error) => ({ type: types.FETCH_GROUPS_FAILURE, payload: error });
export const save = (data) => ({ type: types.FETCH_GROUPS_SUCCESS, payload: data });

export default {
  loading,
  loadingError,
  save
}