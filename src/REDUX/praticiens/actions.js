/**
 *  Une Action est un objet qui decrit un changement à appliquer dans le store local (le state)
 */


import axios from "axios";

import {
  FETCH_PRATICIENS_REQUEST,
  FETCH_PRATICIENS_SUCCESS,
  FETCH_PRATICIENS_FAILURE,
} from "./types";
import app from "../../Configs/app";



export const loading = () => ({ type: FETCH_PRATICIENS_REQUEST });
export const loadingError = (error) => ({ type: FETCH_PRATICIENS_FAILURE, payload: error });
export const save = (data) => ({ type: FETCH_PRATICIENS_SUCCESS, payload: data });

export default {
  loading,
  loadingError,
  save
}