/**
*  Une Action est un objet qui decrit un changement à appliquer dans le store local (le state)
*/


import axios from "axios";

import {
	FETCH_PRATICIENS_REQUEST,
	FETCH_PRATICIENS_SUCCESS,
	FETCH_PRATICIENS_FAILURE,
} from "./types";

import { getAllPraticiens } from "../../services/praticiens";


export const getPraticiens = (options) => {
	return (dispatch, options) => {
		dispatch({ type: FETCH_PRATICIENS_REQUEST });
		// lecture HTTP
		const promise = getAllPraticiens(options);
		// en cas de succès
		promise.then((response)=>{
			dispatch({
				type: FETCH_PRATICIENS_SUCCESS,
				payload: { success: true, data: response.data },
			});
			
		});
		// en cas d'erreur
		promise.catch((response)=>{
			dispatch({ type: FETCH_PRATICIENS_FAILURE, payload: response.error });
		});
	};
};