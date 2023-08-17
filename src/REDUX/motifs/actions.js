import { FETCH_MOTIFS_REQUEST, FETCH_MOTIFS_SUCCESS, FETCH_MOTIFS_FAILURE  } from "./types"

import { url } from "../../Constants/urls";



export const loading = () => ({ type: FETCH_MOTIFS_REQUEST });
export const loadingError = (error) => ({ type: FETCH_MOTIFS_FAILURE, payload: error });
export const save = (data) => ({ type: FETCH_MOTIFS_SUCCESS, payload: data });

export default {
  loading,
  loadingError,
  save
}