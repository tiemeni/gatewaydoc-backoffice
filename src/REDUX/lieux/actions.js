import { FETCH_LIEUX_REQUEST, FETCH_LIEUX_SUCCESS, FETCH_LIEUX_FAILURE } from "./types"

import { url } from "../../Constants/urls";
import app from "../../Configs/app";



export const loading = () => ({ type: FETCH_LIEUX_REQUEST });
export const loadingError = (error) => ({ type: FETCH_LIEUX_FAILURE, payload: error });
export const save = (data) => ({ type: FETCH_LIEUX_SUCCESS, payload: data });

export default {
  loading,
  loadingError,
  save
}