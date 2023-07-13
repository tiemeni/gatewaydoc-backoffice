/**
*  Une Action est un objet qui decrit un changement à appliquer dans le store local (le state)
*/


import axios from "axios";

import { FETCH_PRATICIENS_SUCCESS, SAVE_PRATICIEN_SUCCESS } from "./types";

export const fireGetPraticiens = (payload) => ({
	type: FETCH_PRATICIENS_SUCCESS,
	payload,
});

export const fireSavePraticien = (payload) => ({
  type: SAVE_PRATICIEN_SUCCESS,
  payload,
});