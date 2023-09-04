import { FETCH_CIVILITIES_REQUEST, FETCH_CIVILITIES_SUCCESS, FETCH_CIVILITIES_FAILURE } from "./types"

import { url } from "../../Constants/urls";
import app from "../../Configs/app";



export const loading = () => ({ type: FETCH_CIVILITIES_REQUEST });
export const loadingError = (error) => ({ type: FETCH_CIVILITIES_FAILURE, payload: error });
export const save = (data) => ({ type: FETCH_CIVILITIES_SUCCESS, payload: data });

export default {
  loading,
  loadingError,
  save
}