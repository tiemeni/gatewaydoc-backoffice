/**
 *  Une Action est un objet qui decrit un changement à appliquer dans le store local (le state)
 */

import {
  FETCH_PRATICIENS_REQUEST,
  FETCH_PRATICIENS_SUCCESS,
  FETCH_PRATICIENS_FAILURE,
  SAVE_PRATICIENS_PER_JOB,
} from "./types";



export const loading = () => ({ type: FETCH_PRATICIENS_REQUEST });
export const loadingError = (error) => ({ type: FETCH_PRATICIENS_FAILURE, payload: error });
export const save = (data) => ({ type: FETCH_PRATICIENS_SUCCESS, payload: data?.data });
export const savePraticiensPerJob = (payload) => {
  return {
    type: SAVE_PRATICIENS_PER_JOB,
    payload
  }
}
export default {
  loading,
  loadingError,
  save
}