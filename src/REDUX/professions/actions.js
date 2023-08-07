import { FETCH_PROFESSION_REQUEST, FETCH_PROFESSION_SUCCESS, FETCH_PROFESSION_FAILURE  } from "./types"

import { url } from "../../Constants/urls";
import app from "../../Configs/app";



export const loading = () => ({ type: FETCH_PROFESSION_REQUEST });
export const loadingError = (error) => ({ type: FETCH_PROFESSION_FAILURE, payload: error });
export const save = (data) => ({ type: FETCH_PROFESSION_SUCCESS, payload: data });

export default {
  loading,
  loadingError,
  save
}